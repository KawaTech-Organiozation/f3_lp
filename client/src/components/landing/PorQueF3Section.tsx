import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function PorQueF3Section() {
  const benefits = [
    "Estrutura pronta para apoiar e impulsionar sua operação",
    "Acompanhamento próximo e orientado a performance",
    "Materiais e campanhas para apoiar suas vendas",
    "Treinamentos frequentes e desenvolvimento contínuo",
    "Suporte estratégico para crescimento",
    // "Operação organizada e direcionada a resultado",
    "Acesso a um ecossistema que fortalece sua atuação",
  ];

  return (
    <section id="por-que-f3" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Por que estar na rede F3"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-transparent hover:border-primary/20 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
