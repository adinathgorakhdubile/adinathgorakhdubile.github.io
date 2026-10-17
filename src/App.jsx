import { Component } from 'react';
import { DomainThemeProvider } from './context/DomainThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#070B14] text-white p-6">
          <div className="text-center max-w-md p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-bold mb-3 text-sky-400">Oops! Something went wrong.</h2>
            <p className="text-slate-400 mb-6 text-sm">Please refresh the page to reload the interface.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-sky-500 text-slate-950 font-bold rounded-lg hover:bg-sky-400 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <DomainThemeProvider>
        <div className="min-h-screen text-white selection:bg-white/20 selection:text-white transition-colors duration-500">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Experience />
            <Publications />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </DomainThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
