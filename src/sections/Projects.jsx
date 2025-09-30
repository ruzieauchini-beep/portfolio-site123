// src/sections/Projects.jsx
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      image: "/projects/project1.png", // from public/projects/
      link: "#",
    },
    {
      title: "E-commerce Store",
      description: "Full-stack online store with shopping cart and payments.",
      image: "/projects/project2.png",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support.",
      image: "/projects/project3.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
