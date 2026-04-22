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
  UrgencyBanner,
  ScenarioSection,
  ObjectionSection,
  AuthoritySection,
  SocialProofSection,
} from "@/components/landing";
import { LandingVisitTracker } from "@/components/analytics/landing-visit-tracker";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <UrgencyBanner />
      <LandingVisitTracker />
      
      <div className="mq-fade-up">
        <HeroSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:100ms]">
        <ProblemSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:200ms]">
        <SolutionSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:300ms]">
        <ScenarioSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:400ms]">
        <HowItWorksSection id="como-funciona" />
      </div>
      
      <div className="mq-fade-up [animation-delay:500ms]">
        <ObjectionSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:600ms]">
        <AuthoritySection />
      </div>
      
      <div className="mq-fade-up [animation-delay:700ms]">
        <SocialProofSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:800ms]">
        <PricingSection id="precios" />
      </div>
      
      <div className="mq-fade-up [animation-delay:900ms]">
        <FAQSection id="faq" />
      </div>
      
      <div className="mq-fade-up [animation-delay:1000ms]">
        <CtaBand />
      </div>
    </main>
  );
}
