import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
