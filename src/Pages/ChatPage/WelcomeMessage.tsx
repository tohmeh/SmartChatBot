import { motion } from "framer-motion";

export function WelcomeMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="text-2xl w-full text-center text-[#091C58] font-bold sm:text-3xl md:text-4xl sm:w-[60%] lg:w-[50%] xl:w-[40%] sm:text-left"
    >
      Hi there, what should we dive into today?
    </motion.div>
  );
}