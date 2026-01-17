import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function ParaQuemSection() {
  const audiences = [
    { title: "Corretores de Seguros", desc: "Que desejam diversificar portfólio e aumentar ticket médio com consórcio." },
    { title: "Escritórios Comerciais", desc: "Empresas que buscam estrutura robusta para escalar operações de vendas." },
    { title: "Profissionais de Vendas", desc: "Especialistas que operam sozinhos e sentem falta de suporte e método." }
  ];

  return (
    <section id="para-quem" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Para quem é essa parceria?"
          subtitle="Nosso modelo de negócio é focado em profissionais e empresas que já possuem tração comercial e buscam profissionalização."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/30 p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-secondary/50 transition-all text-center"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
