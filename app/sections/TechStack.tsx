"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const technologies = [
  { name: "Next.js", category: "Framework", color: "text-slate-100" },
  { name: "React", category: "Library", color: "text-cyan-400" },
  { name: "TypeScript", category: "Language", color: "text-blue-400" },
  { name: "Tailwind CSS", category: "Styling", color: "text-cyan-300" },
  { name: "Supabase", category: "Backend", color: "text-emerald-400" },
  { name: "Prisma", category: "ORM", color: "text-slate-300" },
  { name: "PostgreSQL", category: "Database", color: "text-blue-300" },
  { name: "Vercel", category: "Deploy", color: "text-slate-100" },
  { name: "Git", category: "Version Control", color: "text-orange-400" },
];

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Stack <span className="gradient-text">Moderna</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tecnologias battle-tested que permitem entregar software robusto em tempo recorde.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" staggerDelay={0.05}>
          {technologies.map((tech, index) => (
            <StaggerItem key={index}>
              <div className="group glass-card p-6 text-center hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 border border-slate-800 hover:border-emerald-500/30">
                <div className={`text-2xl font-bold mb-1 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {tech.category}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Text */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            + outras tecnologias conforme necessidade do projeto
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}