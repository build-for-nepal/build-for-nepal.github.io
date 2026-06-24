/**
 * Fetches all unique human contributors across every public repo in the
 * build-for-nepal GitHub org and writes a curated JSON file used by the
 * "More in Development" card.
 *
 * Run manually:   npm run sync:collaborators
 * Optional auth:  export GITHUB_TOKEN=ghp_xxx   (raises rate limit from 60 to 5000/hr)
 */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ORG = "build-for-nepal";
const OUTPUT_PATH = new URL("../src/data/collaborators.json", import.meta.url);

const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) {
    throw new Error(`GitHub ${res.status} on ${path}: ${await res.text()}`);
  }
  return res.json();
}

async function main() {
  console.log(`Fetching repos for org "${ORG}"…`);
  const repos = await gh(`/orgs/${ORG}/repos?per_page=100&type=public`);

  // Map of login -> { login, avatar_url, html_url, contributions }
  const byLogin = new Map();

  for (const repo of repos) {
    console.log(`  • ${repo.name}`);
    const contributors = await gh(
      `/repos/${ORG}/${repo.name}/contributors?per_page=100`,
    );
    for (const c of contributors) {
      // Skip bots (dependabot, renovate, github-actions, etc.)
      if (c.type !== "User") continue;
      const prev = byLogin.get(c.login);
      byLogin.set(c.login, {
        login: c.login,
        avatar_url: c.avatar_url,
        html_url: c.html_url,
        contributions: (prev?.contributions ?? 0) + c.contributions,
      });
    }
  }

  // Sort by contribution count, most active first.
  const collaborators = [...byLogin.values()].sort(
    (a, b) => b.contributions - a.contributions,
  );

  await mkdir(dirname(fileURLToPath(OUTPUT_PATH)), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(collaborators, null, 2) + "\n");

  console.log(
    `\n✓ Wrote ${collaborators.length} collaborators to src/data/collaborators.json`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});