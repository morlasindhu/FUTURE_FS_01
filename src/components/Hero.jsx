
function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Hi, I’m <span className="text-blue-600">Morla Sindhu</span> 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
        A passionate <strong>Full Stack Developer</strong> skilled in HTML,CSS,PowerBI,JAVA,PYTHON,SQL.
      </p>
      <a
        href="#contact"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
