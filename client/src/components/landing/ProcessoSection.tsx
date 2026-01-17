import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function ProcessoSection() {
  const steps = [
    { step: "01", title: "Formulário", desc: "Preencha o formulário" },
    { step: "02", title: "Contato", desc: "Nosso time entra em contato" },
    { step: "03", title: "Reunião", desc: "Reunião de alinhamento" },
    { step: "04", title: "Onboarding", desc: "Onboarding e treinamentos iniciais" },
    { step: "05", title: "Operação", desc: "Início da operação com acompanhamento e suporte total" },
  ];

  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Como você pode se tornar parceiro."
          centered
        />

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border shadow-sm text-center md:text-left relative group"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
