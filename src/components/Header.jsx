import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // íconos bonitos
// Instálalos con: npm install lucide-react

export default function Header() {
    const { dark, toggleTheme } = useTheme();

	return (
		<header className="bg-white dark:bg-gray-900 dark:text-gray-200 shadow-sm sticky top-0 z-10">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">JC Dev</h1>
        <div className="flex items-center space-x-4 text-sm">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Inicio</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contacto</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
