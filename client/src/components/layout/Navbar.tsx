import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            // src="/images/logo.PNG"
            src="/images/Logo_positivo.PNG"            
            alt="F3 Partners Logo"
            className="h-12 w-auto"
            loading="eager"
          />
          {/* <span className="text-sm font-semibold text-muted-foreground hidden sm:inline-block">
            Gestão de Parceiros
          </span> */}
        </div>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <ScrollLink to="quem-e-f3" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">A F3</ScrollLink>
          <ScrollLink to="benefits" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Benefícios</ScrollLink>
          <ScrollLink to="por-que-f3" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Por Que F3</ScrollLink>
          <ScrollLink to="administradoras" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Parceiros</ScrollLink>
          <ScrollLink to="process" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Como Funciona</ScrollLink>
          <ScrollLink to="about" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Sobre</ScrollLink>
          <ScrollLink to="faq" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">FAQ</ScrollLink>
        </div>
        <ScrollLink to="contact" smooth={true} offset={-80}>
          <Button className="font-semibold bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            SEJA UM PARCEIRO
          </Button>
        </ScrollLink>
      </div>
    </nav>
  );
}
