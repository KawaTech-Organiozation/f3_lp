import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQSection() {
  const faqs = [
    { q: "Preciso ter experiência prévia com consórcio?", a: "Não necessariamente. Nosso programa de formação é completo e vai do básico ao avançado, capacitando você e sua equipe." },
    { q: "Existe custo para se tornar um parceiro?", a: "A F3 trabalha com um modelo de parceria. Analisamos cada perfil para entender o melhor formato de negócio. Preencha o formulário para detalhes." },
    { q: "A F3 fornece leads?", a: "Nós fornecemos a estratégia e os materiais para captação. Para parceiros de alta performance, existem programas de incentivo que podem incluir distribuição de oportunidades." },
    { q: "Como funciona o comissionamento?", a: "Trabalhamos com tabelas agressivas e competitivas, acima da média de mercado para quem opera isoladamente, devido ao nosso volume consolidado." }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <SectionHeading
          title="Dúvidas Frequentes"
          centered
        />

        <div className="space-y-4 mt-8">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h4 className="font-bold text-lg mb-2 text-primary">{item.q}</h4>
              <p className="text-muted-foreground">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
