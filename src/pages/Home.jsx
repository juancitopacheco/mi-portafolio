import React from "react";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<section id="home" className="text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 my-16">
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hola, soy JC 👋
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Desarrollador de software enfocado en construir aplicaciones web modernas y eficientes.
      </motion.p>

      <motion.a
        href="#projects"
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver mis proyectos
      </motion.a>
    </section>
	);
}
