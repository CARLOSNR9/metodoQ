import {
  CtaBand,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  SocialProofSection,
  FAQSection,
} from "@/components/landing";
import { LandingVisitTracker } from "@/components/analytics/landing-visit-tracker";
import { MirSpotlightSection } from "@/components/landing/mir-spotlight-section";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-background">
      <LandingVisitTracker />
      <div className="mq-fade-up">
        <HeroSection />
      </div>

      <MirSpotlightSection />
      
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
        <FAQSection />
      </div>
      
      <div className="mq-fade-up [animation-delay:500ms]">
        <CtaBand />
      </div>

      <WhatsAppFloat />
    </main>
  );
}
