import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  useEffect(() => {
    document.title = "Bahar Al Hamid | FullStack Developer";
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={
          <div className="bg-gray-950 text-white">
            <Cursor />
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Portfolio />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;