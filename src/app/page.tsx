import {
  CtaBand,
  DifferentiatorSection,
  FAQSection,
  HeroSection,
  HowItWorksSection,
  ProductPreviewSection,
  PricingSection,
  ProblemSection,
  SolutionSection,
} from "@/components/landing";
import { LandingVisitTracker } from "@/components/analytics/landing-visit-tracker";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingVisitTracker />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductPreviewSection />
      <HowItWorksSection id="como-funciona" />
      <DifferentiatorSection />
      <CtaBand />
      <PricingSection id="precios" />
      <FAQSection id="faq" />
    </main>
  );
}
