import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
}

export function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="relative"
    >
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="
          p-6 md:p-8
          rounded-2xl
          backdrop-blur-sm
          bg-white/5
          border border-white/10
          shadow-xl shadow-black/10
          text-center
          transition-all duration-500
          hover:bg-white/10
          hover:border-white/20
        "
      >
        <p
          className="
            text-5xl md:text-6xl lg:text-7xl
            font-bold
            bg-gradient-to-br from-white via-white/90 to-accent/80
            bg-clip-text text-transparent
            mb-3
          "
        >
          {value}
        </p>
        <p
          className="
            text-white/60
            text-sm md:text-base
            font-medium
            tracking-wide
          "
        >
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
}
