import { Users } from "lucide-react";

const AVATARS = [
  { src: "https://i.pravatar.cc/80?img=12", alt: "Contributor avatar" },
  { src: "https://i.pravatar.cc/80?img=33", alt: "Contributor avatar" },
];

const EXTRA_COUNT = 42;

export default function MoreInDevCard() {
  return (
    <article className="flex h-full flex-col justify-center gap-6 rounded-2xl bg-primary p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="min-w-0">
        <h3 className="text-2xl font-bold sm:text-3xl">More in Development</h3>

        <p className="mt-3 max-w-md text-sm text-white/90 sm:text-base">
          Our community is constantly working on new tools for language
          processing, data visualization, and civic tech.
        </p>
      </div>

      <div className="flex flex-shrink-0 -space-x-3">
        {AVATARS.map((avatar, i) => (
          <img
            key={i}
            src={avatar.src}
            alt={avatar.alt}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary"
          />
        ))}

        <div className="flex h-11 w-11 flex-col items-center justify-center rounded-full bg-primary/80 text-[10px] font-bold leading-none ring-2 ring-primary">
          <Users className="h-3 w-3" aria-hidden="true" />
          <span className="mt-0.5">+{EXTRA_COUNT}</span>
        </div>
      </div>
    </article>
  );
}
