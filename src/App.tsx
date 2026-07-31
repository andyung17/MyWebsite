import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) => `text-sm font-medium transition-colors pb-1 ${isActive(path)
    ? 'text-blue-600 border-b-2 border-blue-600'
    : 'text-slate-600 hover:text-blue-600'
    }`;

  return (
    <header className="w-full bg-white border-b border-slate-100 py-6 px-8 md:px-16 flex justify-between items-center shadow-xs">
      <Link
        to="/"
        className="text-slate-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors cursor-pointer"
      >
        Andy Ung
      </Link>

      <nav className="flex items-center gap-6 md:gap-8 overflow-x-auto">
        <Link to="/" className={linkStyle('/')}>About</Link>
        <Link to="/skills" className={linkStyle('/skills')}>Skills</Link>
        <Link to="/experience" className={linkStyle('/experience')}>Experience</Link>
        <Link to="/education" className={linkStyle('/education')}>Education</Link>
        <Link to="/projects" className={linkStyle('/projects')}>Projects</Link>
        <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white text-slate-900 flex flex-col justify-between">
        <div>
          <Navbar />
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}