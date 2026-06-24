import type { ContactChannel } from "@/types/contact";

interface ContactChannelCardProps {
  channel: ContactChannel;
}

export default function ContactChannelCard({
  channel,
}: ContactChannelCardProps) {
  const { title, description, icon: Icon } = channel;

  return (
    <article className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-bold text-dark sm:text-lg">{title}</h3>

        <p className="mt-1 text-sm text-muted">{description}</p>

        {/* <a
          href={`mailto:${email}`}
          className="mt-3 inline-block break-all text-sm font-semibold text-primary transition-colors hover:text-accent-hover"
        >
          {email}
        </a> */}
      </div>
    </article>
  );
}
