"use client";

import { AnimatedSection } from "../components/AnimatedSection";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
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
            href="https://wa.me/5551997529716"
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
                <span>© 2025</span>
              </div>
              <p>Construído com Next.js, Tailwind & Café</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}