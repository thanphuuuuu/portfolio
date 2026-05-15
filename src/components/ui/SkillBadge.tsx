import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SkillBadge({ skill, index = 0, className }: { skill: string; index?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={cn(
        "px-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700",
        "hover:border-zinc-300 hover:shadow-sm hover:text-black hover:-translate-y-0.5 transition-all cursor-default",
        className
      )}
    >
      {skill}
    </motion.div>
  );
}
