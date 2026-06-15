import { CONTACT_CHANNELS } from "@/data/contact";
import ContactChannelCard from "./ContactChannelCard";
import ContactForm from "./ContactForm";

export default function GetInTouch() {
  return (
    <section aria-labelledby="get-in-touch-heading" className="bg-bg">
      {/* pb-40 creates room for the content card to overlap the band below */}
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

      {/* -mt-10 pulls the card up to overlap the teal band above */}
      <div className="page-wrapper -mt-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

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
