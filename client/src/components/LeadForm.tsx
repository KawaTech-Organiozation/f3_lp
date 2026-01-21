import { useEffect } from "react";
import { motion } from "framer-motion";

// ID do formulário Tally
const TALLY_FORM_ID = "0Q82VQ";

export function LeadForm() {
  useEffect(() => {
    // Carrega o script do Tally dinamicamente
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove o script ao desmontar
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary">Quero ser parceiro F3</h3>
      </div>

      {/* Embed do formulário Tally */}
      <iframe
        data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="500"
        title="Formulário de Parceiro F3"
        className="min-h-[500px] border-0"
        style={{ margin: 0 }}
      />
    </motion.div>
  );
}
