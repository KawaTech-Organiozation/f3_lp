interface PartnerLogo {
  name: string;
  src: string;
  alt: string;
}

export function AdministradorasSection() {
  const partners: PartnerLogo[] = [
    {
      name: "Âncora Consórcios",
      src: "/images/ancoraconsorcios.png",
      alt: "Logo Âncora Consórcios",
    },
    {
      name: "Bradesco Consórcios",
      src: "/images/bradesco-consorcio.jpg",
      alt: "Logo Bradesco Consórcios",
    },
    {
      name: "Consórcio Suzuki",
      src: "/images/suzuki-consorcio.webp",
      alt: "Logo Consórcio Suzuki",
    },
  ];

  return (
    <section id="administradoras" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Trabalhamos com as principais administradoras do mercado
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
          A F3 atua em parceria com grandes administradoras do setor de consórcios,
          garantindo produtos sólidos, seguros e competitivos para nossos parceiros.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Essas conexões fortalecem nossa operação e permitem entregar uma experiência
          completa, transparente e com alta credibilidade.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-12 md:h-16 w-auto max-w-[150px] md:max-w-[180px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
