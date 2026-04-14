'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        // We only want to close the mobile menu if they click outside the whole header
        // However, the toggle button is outside navRef. We need a way to not close if clicking toggle.
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownEnter = (name) => {
    if (window.innerWidth > 768) {
      setOpenDropdown(name);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (name) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Link href="/" onClick={closeMobileMenu}>
            <img src={scrolled ? "/logo-dark.png" : "/logo.png"} alt="Telredsat Logo" className="logo-img" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>
        </div>
        
        <div 
          className={`mobile-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} ref={navRef}>
          <ul>
            <li><Link href="/" onClick={closeMobileMenu}>Inicio</Link></li>
            
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('soluciones')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => toggleDropdown('soluciones')}
            >
              <span className="dropdown-title">Soluciones ▼</span>
              <ul className={`dropdown-menu ${openDropdown === 'soluciones' ? 'is-open' : ''}`}>
                <li><Link href="/soluciones/telefonia-satelital" onClick={closeMobileMenu}>Telefonía Satelital</Link></li>
                <li><Link href="/soluciones/internet-satelital" onClick={closeMobileMenu}>Internet Satelital (VSAT)</Link></li>
                <li><Link href="/soluciones/rastreo-gps" onClick={closeMobileMenu}>Rastreo GPS Satelital</Link></li>
              </ul>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('industrias')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => toggleDropdown('industrias')}
            >
              <span className="dropdown-title">Industrias ▼</span>
              <ul className={`dropdown-menu ${openDropdown === 'industrias' ? 'is-open' : ''}`}>
                <li><Link href="/industrias/mineria" onClick={closeMobileMenu}>Minería</Link></li>
                <li><Link href="/industrias/energia-petroleo" onClick={closeMobileMenu}>Energía y Petróleo</Link></li>
                <li><Link href="/industrias/transporte-logistica" onClick={closeMobileMenu}>Transporte y Logística</Link></li>
                <li><Link href="/industrias/seguridad-emergencias" onClick={closeMobileMenu}>Seguridad y Emergencias</Link></li>
              </ul>
            </li>

            <li><Link href="/casos-de-exito" onClick={closeMobileMenu}>Casos de Éxito</Link></li>
            <li><Link href="/#nosotros" onClick={closeMobileMenu}>Nosotros</Link></li>
            <li className="mobile-only"><Link href="/contacto" onClick={closeMobileMenu}>Contacto</Link></li>
          </ul>
        </nav>
        <div className="header-action">
          <Link href="/contacto" className="btn-primary" onClick={closeMobileMenu}>
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
