import { Building2, Users2, BarChart3, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="O que entregamos aos nossos parceiros"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            icon={Building2}
            title="Estrutura Comercial"
            description="Onboarding,
treinamentos
contínuos, suporte
consultivo e
acompanhamento
das métricas de
produção."
            delay={0}
          />
          <FeatureCard
            icon={Users2}
            title="Marketing & Captação"
            description="Materiais,
campanhas
estratégicas e
direcionamento
para fortalecer a
comunicação e a
geração de
oportunidades."
            delay={0.1}
          />
          <FeatureCard
            icon={BarChart3}
            title="CRM & Performance"
            description="Organização de funil,
acompanhamento de
indicadores, análise
de conversão e
suporte ao parceiro
para escalar
resultados."
            delay={0.2}
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Suporte Administrativo & Compliance"
            description="Diretrizes,
orientações
operacionais e apoio
no processo para
garantir eficiência e
segurança na
atuação."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
