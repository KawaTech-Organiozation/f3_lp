import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  Building2,
  BarChart3,
  Users2,
  ShieldCheck,
  TrendingUp,
  Handshake,
  CheckCircle2,
  Briefcase,
  ArrowRight
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { getDailySociaImage } from "@/lib/utils";
import { HeroSection, QuemEF3Section, BenefitsSection } from "@/components/sections";

// Navigation Bar
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="F3 Partners Logo"
            className="h-12 w-auto"
            loading="eager"
          />
          <span className="text-sm font-semibold text-muted-foreground hidden sm:inline-block">
            Gestão de Parceiros
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <ScrollLink to="quem-e-f3" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">A F3</ScrollLink>
          <ScrollLink to="benefits" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Benefícios</ScrollLink>
          <ScrollLink to="por-que-f3" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Por Que F3</ScrollLink>
          <ScrollLink to="resultados" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Resultados</ScrollLink>
          <ScrollLink to="process" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Como Funciona</ScrollLink>
          <ScrollLink to="para-quem" smooth={true} offset={-80} className="hover:text-primary cursor-pointer transition-colors">Para Quem</ScrollLink>
        </div>
        <ScrollLink to="contact" smooth={true} offset={-80}>
          <Button className="font-semibold bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Seja um Parceiro
          </Button>
        </ScrollLink>
      </div>
    </nav>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="F3 Partners Logo"
                className="h-12 w-auto"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-white">
                Gestão de Parceiros
              </span>
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
              <p className="flex items-center gap-2">
                <Users2 className="w-4 h-4" /> Comercial: contato@f3partners.com.br
              </p>
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

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
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
              {/* Abstract Graphic Representation of Growth/Structure */}
              <div className="relative aspect-square">
                 {/* Main Image - Using Unsplash for "Business Strategy Meeting" */}
                 {/* business strategy meeting corporate office */}
                 <img 
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                   alt="Business Strategy" 
                   className="rounded-2xl shadow-2xl object-cover w-full h-full z-10 relative border-8 border-white"
                 />
                 
                 {/* Floating Cards */}
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

      {/* Quem É a F3 Section */}
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
                {/* Container com aspect ratio fixo */}
                <div className="relative aspect-[3/4]">
                  {/* Foto da sócia - rotação diária */}
                  <img
                    src={getDailySociaImage()}
                    alt="Parceira F3"
                    className="rounded-2xl shadow-2xl object-cover w-full h-full relative z-10 bg-white"
                  />
                  {/* Elemento decorativo */}
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
                  Quero saber mais
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables / Benefits */}
      <section id="benefits" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="O que entregamos aos nossos parceiros"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Building2}
              title="Estrutura Comercial"
              description="Onboarding,
treinamentos
contínuos, suporte
consultivo e
acompanhamento
das métricas de
produção."
              delay={0}
            />
            <FeatureCard
              icon={Users2}
              title="Marketing & Captação"
              description="Materiais,
campanhas
estratégicas e
direcionamento
para fortalecer a
comunicação e a
geração de
oportunidades."
              delay={0.1}
            />
            <FeatureCard
              icon={BarChart3}
              title="CRM & Performance"
              description="Organização de funil,
acompanhamento de
indicadores, análise
de conversão e
suporte ao parceiro
para escalar
resultados."
              delay={0.2}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Suporte Administrativo & Compliance"
              description="Diretrizes,
orientações
operacionais e apoio
no processo para
garantir eficiência e
segurança na
atuação."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Por que estar na rede F3 */}
      <section id="por-que-f3" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Por que estar na rede F3"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              "Estrutura pronta para apoiar e impulsionar sua operação",
              "Acompanhamento próximo e orientado a performance",
              "Materiais e campanhas para apoiar suas vendas",
              "Treinamentos frequentes e desenvolvimento contínuo",
              "Suporte estratégico para crescimento",
              "Operação organizada e direcionada a resultado",
              "Acesso a um ecossistema que fortalece sua atuação",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-transparent hover:border-primary/20 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
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
            {/* Logo placeholders */}
            {["ADM", "ADM", "ADM", "ADM", "ADM"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-primary cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados que transformam operações */}
      <section id="resultados" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Resultados que transformam operações"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground text-lg">
              Em breve, adicionaremos depoimentos e cases reais de parceiros da F3.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A Força da Nossa Operação */}
      <section id="nossa-operacao" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="A força da nossa operação"
            light
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              { value: "+X", label: "Parceiros Ativos" },
              { value: "+X%", label: "Crescimento nos últimos meses" },
              { value: "+X", label: "Milhões em volume potencial" },
              { value: "XX", label: "Acompanhamentos individuais por mês" },
              { value: "XX", label: "Treinamentos realizados" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{item.value}</p>
                <p className="text-white/70 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Como você pode se tornar parceiro."
            centered
          />

          <div className="relative mt-16 max-w-6xl mx-auto">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Formulário", desc: "Preencha o formulário" },
                { step: "02", title: "Contato", desc: "Nosso time entra em contato" },
                { step: "03", title: "Reunião", desc: "Reunião de alinhamento" },
                { step: "04", title: "Onboarding", desc: "Onboarding e treinamentos iniciais" },
                { step: "05", title: "Operação", desc: "Início da operação com acompanhamento e suporte total" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-border shadow-sm text-center md:text-left relative group"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto md:mx-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Lead Magnet) */}
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

      {/* Target Audience Section */}
      <section id="para-quem" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Para quem é essa parceria?"
            subtitle="Nosso modelo de negócio é focado em profissionais e empresas que já possuem tração comercial e buscam profissionalização."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              { title: "Corretores de Seguros", desc: "Que desejam diversificar portfólio e aumentar ticket médio com consórcio." },
              { title: "Escritórios Comerciais", desc: "Empresas que buscam estrutura robusta para escalar operações de vendas." },
              { title: "Profissionais de Vendas", desc: "Especialistas que operam sozinhos e sentem falta de suporte e método." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-secondary/50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <SectionHeading 
            title="Dúvidas Frequentes" 
            centered
          />
          
          <div className="space-y-4 mt-8">
            {[
              { q: "Preciso ter experiência prévia com consórcio?", a: "Não necessariamente. Nosso programa de formação é completo e vai do básico ao avançado, capacitando você e sua equipe." },
              { q: "Existe custo para se tornar um parceiro?", a: "A F3 trabalha com um modelo de parceria. Analisamos cada perfil para entender o melhor formato de negócio. Preencha o formulário para detalhes." },
              { q: "A F3 fornece leads?", a: "Nós fornecemos a estratégia e os materiais para captação. Para parceiros de alta performance, existem programas de incentivo que podem incluir distribuição de oportunidades." },
              { q: "Como funciona o comissionamento?", a: "Trabalhamos com tabelas agressivas e competitivas, acima da média de mercado para quem opera isoladamente, devido ao nosso volume consolidado." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h4 className="font-bold text-lg mb-2 text-primary">{item.q}</h4>
                <p className="text-muted-foreground">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
