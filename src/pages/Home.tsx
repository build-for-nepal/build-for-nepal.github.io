import FeedbackBanner from "@/components/layout/FeedbackBanner";
import Hero from "@/features/hero/Hero";
import InnovationHub from "@/features/innovation/InnovationHub";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Home() {
  usePageTitle();

  return (
    <main>
      <Hero />
      <InnovationHub />
      <FeedbackBanner />
    </main>
  );
}
