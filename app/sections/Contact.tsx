"use client";

import { AnimatedSection } from "../components/AnimatedSection";
import { MessageCircle, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-slate-950" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tem um projeto em mente?
          </h2>
          <p className="text-xl sm:text-2xl text-slate-400 mb-12">
            Vamos conversar. <span className="text-emerald-400">Resposta em minutos.</span>
          </p>
        </AnimatedSection>

        {/* Main CTA */}
        <AnimatedSection delay={0.2}>
          <motion.a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-10 py-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xl rounded-2xl transition-all duration-300 glow-emerald overflow-hidden mb-12"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Iniciar conversa no WhatsApp
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </AnimatedSection>

        {/* Secondary Links */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:contato@wpdevlab.com" 
              className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                contato@wpdevlab.com
              </span>
            </a>
            
            <a 
              href="https://github.com/WillianPoeraridev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                GitHub
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/willianpoerari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-emerald-400 transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.4}>
          <div className="mt-24 pt-8 border-t border-slate-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400">WP Dev Lab</span>
                <span>© 2024</span>
              </div>
              <p>Construído com Next.js, Tailwind & Café</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}