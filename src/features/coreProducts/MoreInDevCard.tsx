import { Users } from "lucide-react";
import collaborators from "@/data/collaborators.json";

const VISIBLE_AVATARS = 3;

const visible = collaborators.slice(0, VISIBLE_AVATARS);
const extraCount = Math.max(0, collaborators.length - VISIBLE_AVATARS);

export default function MoreInDevCard() {
  return (
    <article className="rounded-2xl bg-primary p-6 text-white sm:p-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-2xl font-bold sm:text-3xl">More in Development</h3>
          <p className="mt-3 max-w-md text-sm text-white/90 sm:text-base">
            Our community is constantly working on new tools for language
            processing, data visualization, and civic tech.
          </p>
        </div>

        <div className="flex shrink-0 -space-x-3">
          {visible.map((person) => (
            <a
              key={person.login}
              href={person.html_url}
              target="_blank"
              rel="noopener noreferrer"
              title={person.login}
              aria-label={`${person.login} on GitHub`}
              className="block transition-transform hover:z-10 hover:scale-110"
            >
              <img
                src={person.avatar_url}
                alt=""
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary"
              />
            </a>
          ))}

          {extraCount > 0 && (
            <a
              href="https://github.com/build-for-nepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${extraCount} more contributors on GitHub`}
              className="flex h-11 w-11 flex-col items-center justify-center rounded-full bg-primary/80 text-[10px] font-bold leading-none text-white ring-2 ring-primary transition-transform hover:z-10 hover:scale-110"
            >
              <Users className="h-3 w-3" aria-hidden="true" />
              <span className="mt-0.5">+{extraCount}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
