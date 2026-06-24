import GetInTouch from "@/features/getInTouch/GetInTouch";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <main>
      <GetInTouch />
    </main>
  );
}
