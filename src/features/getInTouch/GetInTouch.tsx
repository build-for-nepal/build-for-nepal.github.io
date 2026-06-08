import { CONTACT_CHANNELS } from "@/data/contact";
import ContactChannelCard from "./ContactChannelCard";
import ContactForm from "./ContactForm";

export default function GetInTouch() {
  return (
    <section aria-labelledby="get-in-touch-heading" className="bg-bg">
      {/* TEAL BANNER — pt-20 pb-40 matches the Mission section pattern.
          The big pb creates room for the content card to "break" the band. */}
      <div className="bg-primary px-6 pt-20 pb-40 text-center">
        <h2
          id="get-in-touch-heading"
          className="text-[32px] font-bold text-white sm:text-[40px] lg:text-[52px]"
        >
          Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
          Have a question about our products or want to collaborate on a project
          for Nepal? We&apos;re here to help and listen.
        </p>
      </div>

      {/* CONTENT — overlap pattern from Mission: page-wrapper + -mt-10
          pulls content up to break into the teal band above. */}
      <div className="page-wrapper -mt-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Form spans 2 cols at lg so it gets the most space. */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right column — stacked channel cards. */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {CONTACT_CHANNELS.map((channel) => (
              <ContactChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
