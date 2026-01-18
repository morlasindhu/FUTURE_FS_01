import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
