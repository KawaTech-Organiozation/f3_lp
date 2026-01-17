import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function NossaOperacaoSection() {
  const metrics = [
    { value: "+X", label: "Parceiros Ativos" },
    { value: "+X%", label: "Crescimento nos últimos meses" },
    { value: "+X", label: "Milhões em volume potencial" },
    { value: "XX", label: "Acompanhamentos individuais por mês" },
    { value: "XX", label: "Treinamentos realizados" },
  ];

  return (
    <section id="nossa-operacao" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="A força da nossa operação"
          light
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 max-w-5xl mx-auto">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{item.value}</p>
              <p className="text-white/70 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
