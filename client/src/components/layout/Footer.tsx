import { Link as ScrollLink } from "react-scroll";
import { Building2, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/images/Logo_negativo.PNG"
                alt="F3 Partners Logo"
                className="h-12 w-auto brightness-0 invert"
                loading="lazy"
              />
              {/* <span className="text-sm font-semibold text-white">
                Gestão de Parceiros
              </span> */}
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Especialistas em estruturar, desenvolver e acelerar redes de vendas no mercado de consórcios.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
            <div className="space-y-4 text-white/70">
              <p className="flex items-center gap-2">
                <Building2 className="w-4 h-4" /> São Paulo - SP
              </p>
              <a
                href="https://wa.me/5511971877717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> +55 (11) 97187-7717
              </a>
              <a
                href="mailto:danieladegrande@f3parceiros.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> danieladegrande@f3parceiros.com.br
              </a>
              <a
                href="mailto:contato@f3parceiros.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> contato@f3parceiros.com.br
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Institucional</h4>
            <ul className="space-y-4 text-white/70">
              <li><ScrollLink to="hero" smooth={true} className="cursor-pointer hover:text-white transition-colors">Início</ScrollLink></li>
              <li><ScrollLink to="quem-e-f3" smooth={true} offset={-80} className="cursor-pointer hover:text-white transition-colors">Quem é a F3</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} offset={-80} className="cursor-pointer hover:text-white transition-colors">Seja Parceiro</ScrollLink></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} F3 Partners. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
