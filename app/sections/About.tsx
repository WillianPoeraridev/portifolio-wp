"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { Cpu, Users, Layers, Zap } from "lucide-react";

const stats = [
  {
    icon: Layers,
    value: "2",
    label: "CRMs em produção",
    description: "Sistemas reais operando 24/7"
  },
  {
    icon: Users,
    value: "15+",
    label: "Usuários simultâneos",
    description: "Gestão em tempo real"
  },
  {
    icon: Cpu,
    value: "Stack",
    label: "Moderna",
    description: "Next.js, Supabase, Prisma"
  },
  {
    icon: Zap,
    value: "IA",
    label: "Entrega acelerada",
    description: "Dias, não semanas"
  }
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Desenvolvedor <span className="gradient-text">autodidata</span> com sistemas em produção
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Não construo protótipos para portfólio. Construo ferramentas que resolvem problemas reais de negócios reais.
              </p>
              <p>
                Uso IA como par de programação para entregar em <strong className="text-slate-200">dias</strong> o que outros desenvolvedores levam semanas. 
                Isso significa mais velocidade para você, sem sacrificar qualidade.
              </p>
              <p>
                Especializado em ecossistemas React modernos, arquitetura serverless e bancos de dados PostgreSQL. 
                Cada linha de código é escrita pensando em escalabilidade e manutenibilidade.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="glass-card p-6 h-full hover:bg-slate-800/50 transition-all duration-300 group cursor-default">
                  <stat.icon className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl sm:text-4xl font-bold text-slate-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-emerald-400 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500">
                    {stat.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}