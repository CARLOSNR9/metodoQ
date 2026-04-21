import {
  CtaBand,
  DifferentiatorSection,
  FAQSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProblemSection,
  SolutionSection,
} from "@/components/landing";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection id="como-funciona" />
      <DifferentiatorSection />
      <CtaBand />
      <PricingSection id="precios" />
      <FAQSection id="faq" />
    </main>
  );
}
