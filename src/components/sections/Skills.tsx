"use client";

import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiReact, 
  SiAngular,
  SiNextdotjs,
  SiCss3, 
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiNodedotjs
} from 'react-icons/si';
import { Coffee } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Java", icon: Coffee, color: "#007396" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ]
  },
  {
    title: "Base de Datos",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ]
  }
];

const SkillBadge = ({ skill, index }: { skill: typeof skillCategories[0]['skills'][0]; index: number }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      <div
        className="px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 hover:scale-105 flex items-center gap-3"
        style={{
          borderColor: skill.color,
          boxShadow: `0 0 15px ${skill.color}30`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}60, 0 0 40px ${skill.color}30`;
          e.currentTarget.style.backgroundColor = `${skill.color}10`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px ${skill.color}30`;
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }}
      >
        <Icon 
          className="size-6 sm:size-7 flex-shrink-0" 
          style={{ color: skill.color }} 
        />
        <span className="text-sm sm:text-base font-semibold text-white">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
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
            Stack Tecnológico
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que sé utilizar.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span 
                  className="w-2 h-8 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #60a5fa, #a78bfa, #f472b6)',
                  }}
                />
                {category.title}
              </h3>

              {/* Skills in this category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}