export function AdministradorasSection() {
  const brands = ["ADM", "ADM", "ADM", "ADM", "ADM"];

  return (
    <section id="administradoras" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Trabalhamos com as principais administradoras do mercado
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
          A F3 atua em parceria com grandes administradoras do setor de consórcios,
          garantindo produtos sólidos, seguros e competitivos para nossos parceiros.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Essas conexões fortalecem nossa operação e permitem entregar uma experiência
          completa, transparente e com alta credibilidade.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-primary cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
