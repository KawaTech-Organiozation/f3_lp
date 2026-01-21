import { motion } from "framer-motion";

interface PartnerLogo {
  name: string;
  src: string;
  alt: string;
}

export function AdministradorasSection() {
  const partners: PartnerLogo[] = [
    {
      name: "Âncora Consórcios",
      src: "/images/Logo_Ancora_Original_CMYK_03.png",
      alt: "Logo Âncora Consórcios",
    },
    {
      name: "Bradesco Consórcios",
      src: "/images/Logo_Bradesco.PNG",
      alt: "Logo Bradesco Consórcios",
    },
    {
      name: "Consórcio Suzuki",
      src: "/images/Logo_Suzuki.PNG",
      alt: "Logo Consórcio Suzuki",
    },
  ];

  return (
    <section id="administradoras" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Trabalhamos com as principais administradoras do mercado
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-3xl mx-auto mb-4"
        >
          A F3 atua em parceria com grandes administradoras do setor de consórcios,
          garantindo produtos sólidos, seguros e competitivos para nossos parceiros.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Essas conexões fortalecem nossa operação e permitem entregar uma experiência
          completa, transparente e com alta credibilidade.
        </motion.p>

        {/* Grid de logos - cards laranja com logos brancos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-primary p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-56 md:h-80 w-auto max-w-[250px] object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {/* Nome da administradora */}
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
