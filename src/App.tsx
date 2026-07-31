import { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const isActive = (path: string) => location.pathname === path;

  const linkStyle = (path: string) => `text-sm font-medium transition-colors pb-1 ${isActive(path)
    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`;

  const mobileLinkStyle = (path: string) => `block text-base font-medium py-2 px-3 rounded-lg transition-colors ${isActive(path)
    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800'
    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-6 px-8 md:px-16 flex justify-between items-center shadow-xs relative transition-colors duration-200">
      <Link
        to="/"
        className="text-slate-900 dark:text-white font-bold text-lg tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        Andy Ung
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className={linkStyle('/')}>About</Link>
        <Link to="/skills" className={linkStyle('/skills')}>Skills</Link>
        <Link to="/experience" className={linkStyle('/experience')}>Experience</Link>
        <Link to="/education" className={linkStyle('/education')}>Education</Link>
        <Link to="/projects" className={linkStyle('/projects')}>Projects</Link>
        <Link to="/contact" className={linkStyle('/contact')}>Contact</Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none p-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-2 md:hidden z-50">
          <Link to="/" onClick={closeMenu} className={mobileLinkStyle('/')}>About</Link>
          <Link to="/skills" onClick={closeMenu} className={mobileLinkStyle('/skills')}>Skills</Link>
          <Link to="/experience" onClick={closeMenu} className={mobileLinkStyle('/experience')}>Experience</Link>
          <Link to="/education" onClick={closeMenu} className={mobileLinkStyle('/education')}>Education</Link>
          <Link to="/projects" onClick={closeMenu} className={mobileLinkStyle('/projects')}>Projects</Link>
          <Link to="/contact" onClick={closeMenu} className={mobileLinkStyle('/contact')}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between transition-colors duration-200">
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