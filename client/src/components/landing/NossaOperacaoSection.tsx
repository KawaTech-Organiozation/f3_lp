import { SectionHeading } from "@/components/SectionHeading";
import { MetricCard } from "./MetricCard";

export function NossaOperacaoSection() {
  const metrics = [
    { value: "+X", label: "Parceiros Ativos" },
    { value: "+X%", label: "Crescimento nos últimos meses" },
    { value: "+X", label: "Milhões em volume potencial" },
    { value: "XX", label: "Acompanhamentos individuais por mês" },
    { value: "XX", label: "Treinamentos realizados" },
  ];

  return (
    <section
      id="nossa-operacao"
      className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          title="A força da nossa operação"
          light
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mt-12 max-w-6xl mx-auto">
          {metrics.map((item, i) => (
            <MetricCard
              key={i}
              value={item.value}
              label={item.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
