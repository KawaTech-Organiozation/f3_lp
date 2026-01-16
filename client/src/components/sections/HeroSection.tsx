import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden bg-gradient-to-br from-background via-white to-secondary/50">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Parceria para quem busca escala
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-primary">
              F3 | Master em expansão e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">desenvolvimento</span> de parceiros.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Estrutura, suporte e estratégia para potencializar resultados em operações de consórcio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="contact" smooth={true} offset={-80}>
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all duration-300 w-full sm:w-auto">
                  QUERO SER PARCEIRO DA F3
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} offset={-80}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary/50 w-full sm:w-auto">
                  Conhecer modelo
                </Button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Business Strategy"
                className="rounded-2xl shadow-2xl object-cover w-full h-full z-10 relative border-8 border-white"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Crescimento</p>
                    <p className="text-lg font-bold text-primary">+127% YoY</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Parceiros</p>
                    <p className="text-lg font-bold text-primary">Alta Performance</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
