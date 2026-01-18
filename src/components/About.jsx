const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>

        {/* Profile Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGWTqEkRPDeOg/profile-displayphoto-crop_800_800/B56Zowgc.WJwAI-/0/1761750407399?e=1763596800&v=beta&t=lej8rY6OMA3bjkCaNQffSfcpH80mHeS6JAnA8L7OKRM"
          alt="Morla Sindhu"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
        />

        {/* About Text */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Hi, I’m <span className="font-semibold text-cyan-600">Morla Sindhu</span>, 
          a passionate Full Stack Developer currently pursuing my studies in 
          Computer Science and Engineering. I enjoy building responsive web
          applications using modern technologies like{" "}
          <span className="font-semibold">React.js, Node.js, and MongoDB</span>.
          I love problem-solving and creating user-friendly applications that solve real-world challenges.
        </p>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Education</h3>
          <p className="text-gray-600">Pursuing BTech in Computer Science and Engineering at Alliance University</p>
          <p className="text-gray-600">Year: 2022-2026</p>
        </div>
      </div>
    </section>
  );
};

export default About;