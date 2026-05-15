import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { portfolioData } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-zinc-600 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-zinc-900 text-white rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              title="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-4 bg-zinc-900 text-white rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-zinc-900 text-white rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
          
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
