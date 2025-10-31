"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiPhp, 
  SiMysql, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiJavascript 
} from 'react-icons/si';

// Tech icons y colores
const techConfig: Record<string, { color: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null }> = {  "Next.js": { color: "#000000", icon: SiNextdotjs },
  "React": { color: "#61DAFB", icon: SiReact },
  "TypeScript": { color: "#3178C6", icon: SiTypescript },
  "PHP": { color: "#777BB4", icon: SiPhp },
  "MySQL": { color: "#4479A1", icon: SiMysql },
  "Tailwind": { color: "#06B6D4", icon: SiTailwindcss },
  "HTML": { color: "#E34F26", icon: SiHtml5 },
  "CSS": { color: "#1572B6", icon: SiCss3 },
  "JavaScript": { color: "#F7DF1E", icon: SiJavascript },
};

const projects = [
  {
    id: 1,
    title: "CurrencyFlow",
    description: "Aplicación web moderna para conversión de divisas en tiempo real con gráficos históricos de 30 días. Incluye autenticación completa (Google, email o modo invitado), sistema de pares favoritos con sincronización automática y diseño responsive. Stack completo con Next.js, TypeScript, Firebase y Genkit para gestión de APIs.",
    technologies: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/drodriguezf-dev/CurrencyFlow",
    demo: "https://currencyflow.dferretedev.com/",
    image: "/projects/currencyflow.png",
    featured: true,
  },
  {
    id: 2,
    title: "Plan&Go",
    description: "Aplicación que permite a los usuarios crear eventos y apuntarse a otros. Sistema completo de gestión de eventos con autenticación de usuarios.",
    technologies: ["PHP", "MySQL", "Tailwind", "HTML"],
    github: "https://github.com/drodriguezf-dev/Plan-Go",
    demo: "https://dferretedev.com/proyectos/PlanGo/",
    image: "/projects/plango.png",
    featured: false,
  },
  {
    id: 3,
    title: "Mayor o Menor",
    description: "Juego de navegador en el que deberás decidir si el valor de la siguiente carta es mayor o menor al actual. Diseño limpio y jugabilidad adictiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/drodriguezf-dev/Mayor-o-Menor",
    demo: "https://dferretedev.com/proyectos/MayorOMenor/",
    image: "/projects/mayoromenor.png",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 aspect-video">
        {/* Placeholder gradient - reemplaza con tu imagen */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Ver código en GitHub"
          >
            <Github className="size-6 text-white" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Ver demo en vivo"
          >
            <ExternalLink className="size-6 text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${project.featured ? 'md:p-8' : ''}`}>
        <h3 className={`font-bold text-white mb-3 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        
        <p className={`text-gray-300 mb-6 leading-relaxed ${project.featured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => {
            const config = techConfig[tech] || { color: "#6B7280", icon: null };
            const Icon = config.icon;
            return (
              <span
                key={tech}
                className="group/tech px-4 py-2 text-sm font-medium bg-white/5 text-gray-300 rounded-full border transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{
                  borderColor: config.color,
                  boxShadow: `0 0 10px ${config.color}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${config.color}80, 0 0 30px ${config.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 10px ${config.color}40`;
                }}
              >
                {Icon && <Icon className="size-4" style={{ color: config.color }} />}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Featured project extra info */}
        {project.featured && (
          <div className="space-y-3 mb-6 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">▪</span>
              <span>Conversión en tiempo real con gráficos históricos de 30 días</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-0.5">▪</span>
              <span>Autenticación con Google, email y modo invitado</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-400 mt-0.5">▪</span>
              <span>Sistema de favoritos con sincronización automática</span>
            </div>
          </div>
        )}

        {/* Links for mobile */}
        <div className="flex gap-3 md:hidden">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Github className="size-4" />
            Código
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="size-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes, desde juegos interactivos hasta aplicaciones web full-stack
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}