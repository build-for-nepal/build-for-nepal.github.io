// Post-build prerender for GitHub Pages.
// Copies dist/index.html to dist/<route>/index.html with per-route title,
// description, canonical, and Open Graph tags, so crawlers get a 200 status
// and correct metadata for every route instead of the 404.html fallback.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://build-for-nepal.github.io";
const HOME_DESCRIPTION =
  "Open-source tools built for Nepal. Date converters, interactive maps, trail guides, and more by the Build for Nepal community.";

const ROUTES = [
  {
    route: "about",
    title: "About | Build for Nepal",
    description:
      "Learn about Build for Nepal — an open-source community creating free tools for Nepal, from date converters to interactive maps and trail guides.",
  },
  {
    route: "contact",
    title: "Contact | Build for Nepal",
    description:
      "Get in touch with the Build for Nepal community. Questions, feedback, or ideas for open-source tools for Nepal — we'd love to hear from you.",
  },
];

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = readFileSync(path.join(dist, "index.html"), "utf8");

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, replacement);
}

for (const { route, title, description } of ROUTES) {
  const url = `${ORIGIN}/${route}`;
  let html = template;

  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");
  html = replaceOnce(
    html,
    /(rel="canonical"\s+href=")[^"]*(")/,
    `$1${url}$2`,
    "canonical link"
  );
  html = replaceOnce(
    html,
    /(property="og:url"\s+content=")[^"]*(")/,
    `$1${url}$2`,
    "og:url"
  );
  html = replaceOnce(
    html,
    /(property="og:title"\s+content=")[^"]*(")/,
    `$1${title}$2`,
    "og:title"
  );
  html = replaceOnce(
    html,
    /(name="twitter:title"\s+content=")[^"]*(")/,
    `$1${title}$2`,
    "twitter:title"
  );

  if (!html.includes(HOME_DESCRIPTION)) {
    throw new Error("prerender: homepage description not found in dist/index.html");
  }
  html = html.replaceAll(HOME_DESCRIPTION, description);

  const outDir = path.join(dist, route);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`Prerendered /${route}`);
}
