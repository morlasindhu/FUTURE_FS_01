
function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Name */}
        <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-200 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-200 transition-colors">Skills</a>
          <a href="#achievements" className="hover:text-gray-200 transition-colors">Achievements</a>
          <a href="#projects" className="hover:text-gray-200 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
