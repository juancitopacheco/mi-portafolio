import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
    const { ref, visible } = useScrollAnimation();

	return (
		<motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sobre mí</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Soy estudiante de Ingeniería de Sistemas con pasión por el desarrollo web.
        Me gusta aprender nuevas tecnologías y crear soluciones útiles y elegantes.
        Trabajo con React, Laravel, y bases de datos como PostgreSQL.
      </p>
    </motion.section>
	);
}
