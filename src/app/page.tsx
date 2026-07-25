import {
  CtaBand,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  SocialProofSection,
} from "@/components/landing";
import { LandingVisitTracker } from "@/components/analytics/landing-visit-tracker";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <LandingVisitTracker />
      
      <div className="mq-fade-up">
        <HeroSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:100ms]">
        <HowItWorksSection id="como-funciona" />
      </div>
      
      <div className="mq-fade-up [animation-delay:200ms]">
        <SocialProofSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:300ms]">
        <PricingSection id="precios" />
      </div>
      
      <div className="mq-fade-up [animation-delay:400ms]">
        <CtaBand />
      </div>
    </main>
  );
}
