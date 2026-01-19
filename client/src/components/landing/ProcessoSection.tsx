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
    <section
      id="process"
      className="py-24"
      style={{
        background: 'linear-gradient(to bottom, #fd9500, #f49600, #f28d00, #f18500, #f08100, #ef7700, #ee7007, #f56800)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Como você pode se tornar parceiro:"
          centered
          light
        />

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 hidden md:block -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-100/80 p-6 rounded-xl border border-white/20 shadow-sm text-center md:text-left relative group"
              >
                <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
