import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  QuemEF3Section,
  BenefitsSection,
} from "@/components/sections";
import {
  PorQueF3Section,
  AdministradorasSection,
  ResultadosSection,
  NossaOperacaoSection,
  ProcessoSection,
  CTASection,
  ParaQuemSection,
  SobreSection,
  FAQSection,
} from "@/components/landing";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <QuemEF3Section />
      <BenefitsSection />
      <PorQueF3Section />
      <AdministradorasSection />
      {/* <ResultadosSection /> */}
      {/* <NossaOperacaoSection /> */}
      <ProcessoSection /> {/*laranjaaaaa */}
      <CTASection />
      {/* <ParaQuemSection /> */}
      <SobreSection />
      <FAQSection />

      <Footer />

      <WhatsAppFloatingButton />
    </div>
  );
}
