'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname() || '/';

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
            <img src={scrolled ? "/logo-dark.png" : "/logo.png"} alt="Telredsat Logo" className="logo-img" style={{ height: '50px', width: 'auto', display: 'block' }} />
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
            <li><Link href="/" onClick={closeMobileMenu} className={pathname === '/' ? 'active' : ''}>Inicio</Link></li>
            
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('soluciones')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => toggleDropdown('soluciones')}
            >
              <span className={`dropdown-title ${pathname.startsWith('/soluciones') ? 'active' : ''}`}>Soluciones ▼</span>
              <ul className={`dropdown-menu ${openDropdown === 'soluciones' ? 'is-open' : ''}`}>
                <li><Link href="/soluciones/telefonia-satelital" onClick={closeMobileMenu} className={pathname === '/soluciones/telefonia-satelital' ? 'active' : ''}>Telefonía Satelital</Link></li>
                <li><Link href="/soluciones/internet-satelital" onClick={closeMobileMenu} className={pathname === '/soluciones/internet-satelital' ? 'active' : ''}>Internet Satelital (VSAT)</Link></li>
                <li><Link href="/soluciones/rastreo-gps" onClick={closeMobileMenu} className={pathname === '/soluciones/rastreo-gps' ? 'active' : ''}>Rastreo GPS Satelital</Link></li>
              </ul>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('industrias')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => toggleDropdown('industrias')}
            >
              <span className={`dropdown-title ${pathname.startsWith('/industrias') ? 'active' : ''}`}>Industrias ▼</span>
              <ul className={`dropdown-menu ${openDropdown === 'industrias' ? 'is-open' : ''}`}>
                <li><Link href="/industrias/mineria" onClick={closeMobileMenu} className={pathname === '/industrias/mineria' ? 'active' : ''}>Minería</Link></li>
                <li><Link href="/industrias/energia-petroleo" onClick={closeMobileMenu} className={pathname === '/industrias/energia-petroleo' ? 'active' : ''}>Energía y Petróleo</Link></li>
                <li><Link href="/industrias/transporte-logistica" onClick={closeMobileMenu} className={pathname === '/industrias/transporte-logistica' ? 'active' : ''}>Transporte y Logística</Link></li>
                <li><Link href="/industrias/seguridad-emergencias" onClick={closeMobileMenu} className={pathname === '/industrias/seguridad-emergencias' ? 'active' : ''}>Seguridad y Emergencias</Link></li>
              </ul>
            </li>

            <li><Link href="/casos-de-exito" onClick={closeMobileMenu} className={pathname === '/casos-de-exito' ? 'active' : ''}>Casos de Éxito</Link></li>
            
            <li
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('productos')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => toggleDropdown('productos')}
            >
              <span className={`dropdown-title ${pathname.startsWith('/productos') ? 'active' : ''}`}>Productos ▼</span>
              <ul className={`dropdown-menu ${openDropdown === 'productos' ? 'is-open' : ''}`}>
                <li><Link href="/productos/telefonia-satelital" onClick={closeMobileMenu} className={pathname === '/productos/telefonia-satelital' ? 'active' : ''}>Telefonía Satelital</Link></li>
                <li><Link href="/productos/terminales-satelitales" onClick={closeMobileMenu} className={pathname === '/productos/terminales-satelitales' ? 'active' : ''}>Terminales Satelitales</Link></li>
                <li><Link href="/productos/rastreo-satelital" onClick={closeMobileMenu} className={pathname === '/productos/rastreo-satelital' ? 'active' : ''}>Rastreo Satelital</Link></li>
                <li><Link href="/productos/accesorios" onClick={closeMobileMenu} className={pathname === '/productos/accesorios' ? 'active' : ''}>Accesorios</Link></li>
              </ul>
            </li>

            <li><Link href="/#nosotros" onClick={closeMobileMenu}>Nosotros</Link></li>
            <li className="mobile-only"><Link href="/contacto" onClick={closeMobileMenu} className={pathname === '/contacto' ? 'active' : ''}>Contacto</Link></li>
            <li className="mobile-only" style={{ borderTop: '1px solid #eaeaea', paddingTop: '15px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Plataformas</span>
            </li>
            <li className="mobile-only">
              <a href="https://gps.telredsat.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Plataforma GPS
              </a>
            </li>
            <li className="mobile-only">
              <a href="https://clientes.telredsat.com.pe" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Portal Telefonía
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-action" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            className="platform-dropdown"
            onMouseEnter={() => handleDropdownEnter('plataformas')}
            onMouseLeave={handleDropdownLeave}
            onClick={() => toggleDropdown('plataformas')}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <div className="platform-icon" title="Acceso a Plataformas">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <ul className={`dropdown-menu platform-menu ${openDropdown === 'plataformas' ? 'is-open' : ''}`}>
              <li>
                <a href="https://gps.telredsat.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Plataforma GPS
                </a>
              </li>
              <li>
                <a href="https://clientes.telredsat.com.pe" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Portal Telefonía
                </a>
              </li>
            </ul>
          </div>
          <Link href="/contacto" className="btn-primary" onClick={closeMobileMenu}>
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
