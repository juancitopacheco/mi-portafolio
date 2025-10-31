import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Espera 2.5 segundos antes de desaparecer
    const timer = setTimeout(() => setExit(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (exit) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 0], y: [10, 0, -10] }}
        transition={{
          duration: 2.4,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        Juan Carlos Pacheco <motion.span
        transition={{
            repeat: Infinity
        }}
        className="text-xl block mt-2">Desarrollador Web</motion.span>
      </motion.h1>
    </motion.div>
  );
}