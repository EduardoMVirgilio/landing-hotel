import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          isScrolled
            ? 'bg-primary shadow-md py-3'
            : 'bg-secondary/50 backdrop-blur-md py-5'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className="text-white font-heading font-bold text-2xl"
            >
              Villa Serena
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'home' ? 'active' : ''
              }`}
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'about' ? 'active' : ''
              }`}
            >
              Nosotros
            </a>
            <a
              href="#rooms"
              onClick={() => handleNavClick('rooms')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'rooms' ? 'active' : ''
              }`}
            >
              Habitaciones
            </a>
            <a
              href="#services"
              onClick={() => handleNavClick('services')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'services' ? 'active' : ''
              }`}
            >
              Servicios
            </a>
            <a
              href="#location"
              onClick={() => handleNavClick('location')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'location' ? 'active' : ''
              }`}
            >
              Ubicación
            </a>
            <a
              href="#gallery"
              onClick={() => handleNavClick('gallery')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'gallery' ? 'active' : ''
              }`}
            >
              Galería
            </a>
            <a
              href="#faq"
              onClick={() => handleNavClick('faq')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'faq' ? 'active' : ''
              }`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`nav-link text-white hover:text-accent ${
                activeSection === 'contact' ? 'active' : ''
              }`}
            >
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              Reservar Ahora
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-primary shadow-md transition-all duration-300 
          ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              onClick={() => handleNavClick('home')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'home' ? 'active' : ''
              }`}
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('about')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'about' ? 'active' : ''
              }`}
            >
              Nosotros
            </a>
            <a
              href="#rooms"
              onClick={() => handleNavClick('rooms')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'rooms' ? 'active' : ''
              }`}
            >
              Habitaciones
            </a>
            <a
              href="#services"
              onClick={() => handleNavClick('services')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'services' ? 'active' : ''
              }`}
            >
              Servicios
            </a>
            <a
              href="#location"
              onClick={() => handleNavClick('location')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'location' ? 'active' : ''
              }`}
            >
              Ubicación
            </a>
            <a
              href="#gallery"
              onClick={() => handleNavClick('gallery')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'gallery' ? 'active' : ''
              }`}
            >
              Galería
            </a>
            <a
              href="#faq"
              onClick={() => handleNavClick('faq')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'faq' ? 'active' : ''
              }`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`text-white hover:text-accent text-lg ${
                activeSection === 'contact' ? 'active' : ''
              }`}
            >
              Contacto
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn bg-accent hover:bg-accent-dark text-white w-full text-center"
            >
              Reservar Ahora
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
