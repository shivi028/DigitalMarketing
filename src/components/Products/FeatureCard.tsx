import { motion } from "framer-motion";
import { ElementType } from "react";

interface FeatureCardProps {
  icon: ElementType;  // ✅ Correct type for icon components
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
      style={{
        boxShadow: "0 4px 24px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="rounded-xl bg-primary p-3 text-white">
          <Icon size={24} /> {/* ✅ Correctly used */}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default FeatureCard;
