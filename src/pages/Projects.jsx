import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Sistema de Citas Médicas",
    description: "Aplicación para gestionar citas, pacientes y médicos.",
    tech: "React, Laravel, PostgreSQL",
    link: "https://github.com/tuusuario/citas-medicas",
  },
  {
    title: "Carrito de Compras",
    description: "App con Vite y PostgreSQL para compras online.",
    tech: "React, Vite, PostgreSQL",
    link: "https://github.com/tuusuario/carrito",
  },
  {
    title: "Chat de Proximidad",
    description: "Permite chatear con usuarios cercanos en un radio específico.",
    tech: "Laravel, PHP, MySQL",
    link: "https://github.com/tuusuario/chat-proximidad",
  },
];

export default function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <motion.section id="projects" 
    ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} 
      className="my-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </motion.section>
  );
}