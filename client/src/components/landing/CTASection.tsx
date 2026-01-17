import { TrendingUp, Handshake, Briefcase } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/50 to-background relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold font-display text-primary mb-4">Vamos crescer juntos?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não perca mais tempo tentando reinventar a roda. Utilize nossa estrutura para alavancar seus resultados no mercado de consórcios.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                <div className="bg-green-100 p-2 rounded-lg text-green-700 mt-1">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Escala previsível</h4>
                  <p className="text-sm text-muted-foreground">Processos que garantem crescimento constante.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mt-1">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Suporte total</h4>
                  <p className="text-sm text-muted-foreground">Você foca em vender, nós cuidamos do resto.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-700 mt-1">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Modelo validado</h4>
                  <p className="text-sm text-muted-foreground">Centenas de parceiros já operando com sucesso.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
