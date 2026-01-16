import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-card hover:bg-white p-8 rounded-2xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
