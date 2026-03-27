"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponível para projetos
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-slate-100 mb-2">Willian Poerari</span>
          <span className="block gradient-text">Full-Stack Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-4 font-light"
        >
          AI-First
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Construo sistemas que pessoas reais usam todos os dias — não protótipos que morrem no GitHub.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 glow-emerald overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-slate-100 font-semibold text-lg rounded-full border border-slate-700 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
          >
            <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Ver projetos
          </a>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-slate-500"
        >
          <div className="h-px w-12 bg-slate-800" />
          <span className="text-sm font-medium tracking-widest uppercase">WP Dev Lab</span>
          <div className="h-px w-12 bg-slate-800" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}