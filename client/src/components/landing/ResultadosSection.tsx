import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function ResultadosSection() {
  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Resultados que transformam operações"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-lg">
            Em breve, adicionaremos depoimentos e cases reais de parceiros da F3.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
