import type { MissionProps } from "@/types/mission";
import laptopCoffeeImg from "@/assets/laptopCoffee.png";

export default function Mission({ activeProductCount }: MissionProps) {
  return (
    <section aria-labelledby="mission-heading">
      <div className="bg-primary px-6 pt-20 pb-40 text-center">
        <span className="inline-block bg-white text-primary font-semibold text-sm px-5 py-2 rounded-full shadow-sm">
          Our Mission
        </span>
        <h2
          id="mission-heading"
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
        >
          Empowering Nepal through Open Source Innovation
        </h2>
      </div>

      {/* -mt-10 pulls the card up to overlap the teal banner above */}
      <div className="page-wrapper -mt-10">
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-snug">
              Built for Nepal, by Developers who know Nepal.
            </h3>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Technology is global, but meaningful impact starts locally. At
                Build for Nepal, we create digital products and solutions that
                address real challenges, empower communities, and improve
                everyday experiences.
              </p>
              <p>
                From practical utility tools to innovative platforms, we focus
                on turning ideas into accessible, reliable, and impactful
                technology. Our mission is to contribute to Nepal's digital
                growth by building products that are useful, inclusive, and
                designed for the people who use them.
              </p>
              <p>
                We envision a future where technology is not just consumed but
                actively shaped by Nepali creators, developers, entrepreneurs,
                and communities. Through thoughtful design, modern technology,
                and a user-centered approach, we are committed to building
                solutions that make a lasting difference and help shape a
                stronger digital future for Nepal.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={laptopCoffeeImg}
              alt="Laptop showing code beside a cup of coffee"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-bold leading-none">
                {activeProductCount}+
              </div>
              <div className="text-xs mt-1 opacity-90">Active Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
