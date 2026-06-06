import FeedbackBanner from "@/components/layout/FeedbackBanner";
import Hero from "@/features/hero/Hero";
import InnovationHub from "@/features/innovation/InnovationHub";

export default function Home() {
  return (
    <main>
      <Hero />
      <InnovationHub />
      <FeedbackBanner />
    </main>
  );
}
