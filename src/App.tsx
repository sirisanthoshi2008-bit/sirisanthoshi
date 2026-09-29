import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
