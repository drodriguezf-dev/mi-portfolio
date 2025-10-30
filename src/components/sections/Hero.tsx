"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileUser } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 size-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 size-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" 
           style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 110%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-12">
        {/* Photo and Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-14 mb-6"
        >
          {/* Profile Photo */}
          <div className="relative">
            {/* Animated gradient border */}
            <div 
              className="absolute -inset-1 rounded-full animate-[spin_3s_linear_infinite]"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)',
                padding: '4px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }}
            />
            {/* Photo */}
            <Image
              src="https://dferretedev.com/images/fotoPortfolio.webp"
              alt="David Rodríguez Ferrete"
              width={128}
              height={128}
              className="relative size-28 sm:size-32 rounded-full object-cover border-4 border-slate-900"
            />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
            </span>
            Disponible para proyectos 2
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          David Rodríguez Ferrete
        </motion.h1>

        {/* Subtitle with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent animate-[gradientFlow_8s_linear_infinite]"
            style={{
              backgroundImage: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa, #a78bfa)',
              backgroundSize: '200% auto'
            }}
          >
            Desarrollador Full-Stack
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          ¡Hola! Soy desarrollador full stack con pasión por construir aplicaciones web completas, escalables y eficientes. 
          Disfruto enfrentar retos técnicos y mantenerme al día con las últimas tecnologías para ofrecer soluciones modernas y funcionales.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-6 mb-16"
        >
          {/* Email with copy button */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg max-w-md w-full">
            <Mail className="size-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value="drodriguezfdev@gmail.com"
              readOnly
              className="flex-1 bg-transparent text-white text-sm sm:text-base outline-none cursor-text select-all"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText('drodriguezfdev@gmail.com');
              }}
              className="px-4 py-2 bg-white text-slate-900 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Copiar email"
            >
              Copiar
            </button>
          </div>

          {/* Buttons row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Ver CV button */}
            <a
              href="https://dferretedev.com/CV_DavidRodriguezFerrete.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <FileUser className="size-5 text-gray-400 flex-shrink-0" />
              Ver CV
            </a>

            {/* Ver Proyectos button */}
            <a
              href="#projects"
              className="group px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Ver Proyectos
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 -mt-12"
        >
          <a
            href="https://github.com/drodriguezf-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github className="size-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-rodriguez-ferrete-b97a1034a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-8" />
          </a>
          <a
            href="mailto:drodriguezfdev@gmail.com"
            className="text-gray-400 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
            aria-label="Email"
          >
            <Mail className="size-8" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown className="size-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}