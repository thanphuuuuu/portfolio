import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { SkillBadge } from "../ui/SkillBadge";

export function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-zinc-600 leading-relaxed text-lg mb-8">
              {portfolioData.about}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
