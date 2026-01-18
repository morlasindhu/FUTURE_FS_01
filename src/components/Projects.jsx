
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React and Tailwind CSS that acts as digital resume.",
    },
    {
      title: "AES Based encrypted online voting system",
      description: "Developed an AES-based encrypted online voting system to securely store and process votes using encryption techniques.",
    },
    {
      title: "Passport Automation system",
      description: "Developed a Passport Automation System to streamline passport application submission and verification processes.",
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
