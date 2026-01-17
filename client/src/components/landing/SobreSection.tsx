import { SectionHeading } from "@/components/SectionHeading";

export function SobreSection() {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              light
              badge="Sobre a F3"
              title="Transformamos potencial em performance."
              subtitle="Operar sozinho no mercado de consórcios limita seu crescimento. A falta de processos, treinamentos e acesso a boas condições comerciais são barreiras invisíveis."
            />
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              A F3 é uma operação especializada em <strong className="text-white">estruturar, desenvolver e acelerar</strong> redes de vendas. Não somos apenas uma plataforma, somos seu braço estratégico.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-2xl mb-1">Expertise</h4>
                <p className="text-white/60 text-sm">Anos de mercado</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-2xl mb-1">Governança</h4>
                <p className="text-white/60 text-sm">Processos validados</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="Team working together"
              className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
