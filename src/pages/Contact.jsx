import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
    const { ref, visible } = useScrollAnimation();

  return (
    <motion.section id="contact"
    ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} 
      className="my-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="text-gray-600 mb-4">
        ¿Quieres trabajar conmigo o tienes alguna consulta? ¡Hablemos!
      </p>
      <div className="space-y-2">
        <a href="mailto:tucorreo@gmail.com" className="block text-blue-600 hover:underline">
          tucorreo@gmail.com
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="block text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          className="block text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}