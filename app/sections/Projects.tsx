"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CRM Comercial Fênix",
    description: "Sistema completo de gestão comercial para ISP. Gestão de leads, pipeline de vendas, propostas automatizadas e relatórios em tempo real.",
    tech: ["Next.js", "Supabase", "Prisma", "Tailwind"],
    metric: "15 usuários diários",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/30"
  },
  {
    title: "CRM Retenção Fênix",
    description: "CRM especializado em retenção de clientes para provedor de internet. Acompanhamento de churn, campanhas automáticas e tickets de suporte.",
    tech: ["Next.js", "Supabase", "Prisma", "Realtime"],
    metric: "Realtime updates",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/30"
  },
  {
    title: "SolarDados BR",
    description: "Portal de dados do mercado solar brasileiro com SEO programático. Geração automática de landing pages para cada cidade do Brasil.",
    tech: ["Next.js", "Supabase", "SEO"],
    metric: "200+ páginas de cidades",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/30"
  },
  {
    title: "Dashboard Financeiro",
    description: "Painel interativo de métricas financeiras com gráficos dinâmicos, filtros avançados e exportação de relatórios.",
    tech: ["Next.js", "Chart.js", "Tailwind"],
    metric: "Visualização em tempo real",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/30"
  },
  {
    title: "Landing Page Premium",
    description: "Template de alta conversão para negócios locais. Animações suaves, formulários inteligentes e otimização mobile-first.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    metric: "Alta taxa de conversão",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "group-hover:border-rose-500/30"
  },
  {
    title: "Sistema de Agendamento",
    description: "Aplicação completa de agendamento online com calendário interativo, notificações automáticas e gestão de disponibilidade.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    metric: "Agendamentos 24/7",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "group-hover:border-indigo-500/30"
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projetos em <span className="gradient-text">Produção</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sistemas reais entregues para clientes reais. Cada projeto resolve um problema específico de negócio.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <div className={`group relative glass-card overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 ${project.borderColor}`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  {/* Placeholder Image Area */}
                  <div className="h-48 mb-6 rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-slate-700/50 flex items-center justify-center">
                          <span className="text-2xl font-bold text-slate-500">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm">Screenshot</span>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button className="p-3 bg-slate-900/90 rounded-full text-slate-100 hover:text-emerald-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-slate-900/90 rounded-full text-slate-100 hover:text-emerald-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {project.metric}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}