export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border rounded-2xl shadow-sm p-4 hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-xs text-gray-500 mt-2">Tecnologías: {tech}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block mt-3 text-blue-600 hover:underline"
      >
        Ver en GitHub →
      </a>
    </div>
  )
}