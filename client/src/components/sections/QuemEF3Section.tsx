import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { getDailySociaImage } from "@/lib/utils";

export function QuemEF3Section() {
  return (
    <section id="quem-e-f3" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[3/4]">
                <img
                  src={getDailySociaImage()}
                  alt="Parceira F3"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full relative z-10 bg-white"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              badge="Quem é a F3"
              title="Master em expansão e desenvolvimento de parceiros."
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                A F3 é uma operação especializada em <strong className="text-primary">estruturar, desenvolver e acelerar</strong> redes de vendas no mercado de consórcios.
              </p>
              <p>
                Atuamos como Master, oferecendo suporte completo para parceiros que desejam uma operação mais forte, organizada e orientada a performance.
              </p>
              <p>
                Com método, governança e acompanhamento constante, ajudamos nossos parceiros a expandir sua atuação e atingir novos níveis de resultado.
              </p>
            </div>
            <ScrollLink to="contact" smooth={true} offset={-80}>
              <Button className="mt-8 text-lg px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                QUERO SABER MAIS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
