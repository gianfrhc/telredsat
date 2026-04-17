import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <img src="/logo-light.png" alt="Telredsat Logo" style={{ height: '72px', marginBottom: '20px', display: 'block' }} />
          <p>Conectando lo remoto. Soluciones satelitales de alta tecnología para industrias críticas.</p>
          <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontWeight: '700', color: 'var(--accent-color)', fontSize: '1rem', letterSpacing: '0.5px' }}>Nuestras Redes:</span>
            <a href="https://linkedin.com/company/telredsat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com/telredsat/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com/telredsat" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.26 21.75H1.952l7.712-8.814L1.503 2.25H8.32l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/telredsatperu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Soluciones</h4>
          <ul>
            <li><Link href="#">Telefonía Satelital</Link></li>
            <li><Link href="#">Internet Satelital</Link></li>
            <li><Link href="#">Rastreo GPS</Link></li>
            <li><Link href="#">VSAT Corporativo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Industrias</h4>
          <ul>
            <li><Link href="#">Minería</Link></li>
            <li><Link href="#">Energía y Petróleo</Link></li>
            <li><Link href="#">Transporte</Link></li>
            <li><Link href="#">Seguridad</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <h4>Contacto</h4>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <a href="https://maps.app.goo.gl/6w3HFGtFkTb9d9Kn6" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, width: '20px', height: '20px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Av. Nicolas Ayllon 2014, Ate, Lima</span>
            </a>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="mailto:clientesperu@telredsat.com.pe" className="contact-link align-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, width: '20px', height: '20px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>clientesperu@telredsat.com.pe</span>
            </a>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="https://api.whatsapp.com/send/?phone=51985105907&text=Hola%20Telredsat,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20conectividad%20satelital." target="_blank" rel="noopener noreferrer" className="contact-link align-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, width: '20px', height: '20px' }}>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>+51 985 105 907</span>
            </a>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="tel:+5114166262" className="contact-link align-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, width: '20px', height: '20px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+51 (01) 4166262</span>
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Telredsat S.A.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
