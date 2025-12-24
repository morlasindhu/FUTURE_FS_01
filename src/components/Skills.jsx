
function Skills() {
  const skills = ["HTML", "CSS", "PowerBI", "JAVA", "PYTHON","SQL"];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium shadow-sm hover:bg-blue-200 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
