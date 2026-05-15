import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-full h-56 overflow-hidden bg-zinc-100 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
          <div className="flex gap-3 text-zinc-400">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="View Source">
                <GithubIcon size={20} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-black transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
