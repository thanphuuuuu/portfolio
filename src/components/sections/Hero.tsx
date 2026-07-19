import { motion } from "framer-motion";
import { InfiniteGrid } from "../ui/InfiniteGrid";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
    >
      <InfiniteGrid />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-zinc-900">
          Thanh Phu
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium">
          Web Developer
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-colors w-full sm:w-auto"
          >
            Contact me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
