import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
      <p className="text-gray-600 mb-10 max-w-md">
        Feel free to connect with me on LinkedIn, check out my GitHub projects, or send me an email 👋
      </p>

      <div className="flex space-x-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/morla-sindhu-00382a277/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
        >
          <Linkedin size={40} />
          <span className="mt-2 text-sm">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/morlasindhu/Sindhu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition"
        >
          <Github size={40} />
          <span className="mt-2 text-sm">GitHub</span>
        </a>

        {/* Email */}
        <a
          href="mailto:morlasindhu9@gmail.com"
          className="flex flex-col items-center text-gray-700 hover:text-red-600 transition"
        >
          <Mail size={40} />
          <span className="mt-2 text-sm">Email</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
