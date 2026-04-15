const partners = [
  "logo globalstar.svg",
  "logo inmarsat.svg",
  "logo iridium.svg",
  "logo orbcomm.svg",
  "logo satcom.svg",
  "logo spot.svg",
  "logo starlink.svg",
  "logo teltonika.png"
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Conectividad Satelital<br/><span className="text-accent">para Operaciones Críticas</span></h1>
          <p>Potenciamos sus proyectos en las zonas más remotas del mundo. Internet, telefonía y rastreo de activos en tiempo real sin interrupciones.</p>
          <div className="hero-actions">
            <a href="#soluciones" className="btn-primary"><span>Nuestras Soluciones</span></a>
            <a href="/contacto" className="btn-secondary"><span>Conversar con Asesor</span></a>
          </div>
        </div>
      </section>

      {/* Soluciones Section */}
      <section id="soluciones" className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Nuestras Soluciones Centrales</h2>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10a7.31 7.31 0 0 0 10 10Z"></path>
                  <path d="m9 15 3-3"></path>
                  <path d="M17 13a6 6 0 0 0-6-6" stroke="var(--accent-color)"></path>
                  <path d="M21 9a10 10 0 0 0-10-10" stroke="var(--accent-color)"></path>
                </svg>
              </div>
              <h3>Internet Satelital (VSAT)</h3>
              <p style={{marginBottom: '20px'}}>Conectividad de banda ancha confiable en cualquier punto geográfico, asegurando la continuidad de sus operaciones empresariales.</p>
              <a href="/soluciones/internet-satelital" className="link-arrow-dark">Leer Más &rarr;</a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" stroke="var(--accent-color)"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10" stroke="var(--accent-color)"></path>
                </svg>
              </div>
              <h3>Telefonía Satelital</h3>
              <p style={{marginBottom: '20px'}}>Comunicaciones de voz seguras en áreas donde las redes celulares tradicionales fallan, protegiendo a su personal y activos.</p>
              <a href="/soluciones/telefonia-satelital" className="link-arrow-dark">Leer Más &rarr;</a>
            </div>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3" fill="var(--accent-color)" stroke="none"></circle>
                </svg>
              </div>
              <h3>Rastreo GPS de Activos</h3>
              <p style={{marginBottom: '20px'}}>Monitoreo continuo de flotas y carga valiosa a través de plataformas avanzadas con reportes en tiempo real y geocercas.</p>
              <a href="/soluciones/rastreo-gps" className="link-arrow-dark">Leer Más &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--bg-color)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>¿Su operación no puede permitirse estar desconectada?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#a9b5c5', maxWidth: '800px', margin: '0 auto 30px' }}>
            Nuestros ingenieros en TELREDSAT están listos para analizar su escenario operativo y diseñar la plataforma de comunicación más resistente para su equipo.
          </p>
          <a href="/contacto" className="btn-secondary"><span>Solicitar Asesoría Técnica</span></a>
        </div>
      </section>

      {/* Industrias Section */}
      <section id="industrias" className="section-padding">
        <div className="container">
          <h2 className="section-title">Soluciones Especializadas por Industria</h2>
          <div className="grid-2">
            <div className="industry-card bg-mining">
              <div className="industry-content">
                <h3>Minería</h3>
                <p>Desde campamentos remotos hasta operaciones a tajo abierto, brindamos redes estables para telemetría, seguridad de los trabajadores y comunicación matriz.</p>
                <a href="/industrias/mineria" className="link-arrow">Ver Casos de Minería &rarr;</a>
              </div>
            </div>
            <div className="industry-card bg-energy">
              <div className="industry-content">
                <h3>Energía y Petróleo</h3>
                <p>Garantizamos el flujo de datos para plataformas offshore, ductos y plantas de generación eléctrica en lugares de difícil acceso.</p>
                <a href="/industrias/energia-petroleo" className="link-arrow">Descubrir Solución &rarr;</a>
              </div>
            </div>
            <div className="industry-card bg-transport">
              <div className="industry-content">
                <h3>Transporte y Logística</h3>
                <p>Mantenemos su flota, carga marítima y convoyes de alta prioridad digitalmente rastreados desde el punto de origen hasta su destino final.</p>
                <a href="/industrias/transporte-logistica" className="link-arrow">Ver Casos de Transporte &rarr;</a>
              </div>
            </div>
            <div className="industry-card bg-security">
              <div className="industry-content">
                <h3>Seguridad y Emergencias</h3>
                <p>Las fuerzas del orden público y equipos de defensa civil confían en nuestras soluciones cuando todas las demás redes locales colapsan.</p>
                <a href="/industrias/seguridad-emergencias" className="link-arrow">Descubrir Solución &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h3>Principales Partners</h3>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {partners.map((partner, i) => (
              <img key={i} src={`/partners/${partner}`} alt={partner.replace('.svg', '').replace('.png', '').replace('logo ', '').toUpperCase()} className="partner-logo" />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {partners.map((partner, i) => (
              <img key={i + partners.length} src={`/partners/${partner}`} alt={partner.replace('.svg', '').replace('.png', '').replace('logo ', '').toUpperCase()} className="partner-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos Section */}
      <section id="nosotros" className="section-padding bg-dark">
        <div className="container">
          <h2 className="section-title text-white">¿Por qué confiar en Telredsat?</h2>
          <div className="grid-3 stats">
            <div className="stat-box">
              <h3>99.9%</h3>
              <p>Uptime Garantizado</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Soporte Técnico Especializado</p>
            </div>
            <div className="stat-box">
              <h3>+15 Años</h3>
              <p>Experiencia en Telecomunicaciones</p>
            </div>
          </div>

          <div style={{ marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '50px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--bg-color)', marginBottom: '30px', fontSize: '1.3rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }}>Certificaciones Internacionales</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
              <img className="iso-badge" src="/iso/ISO%209001.jpg" alt="ISO 9001" style={{ height: '90px', borderRadius: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
              <img className="iso-badge" src="/iso/ISO%2014001.jpg" alt="ISO 14001" style={{ height: '90px', borderRadius: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
              <img className="iso-badge" src="/iso/ISO%2027001.jpg" alt="ISO 27001" style={{ height: '90px', borderRadius: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
              <img className="iso-badge" src="/iso/ISO%2037001.jpg" alt="ISO 37001" style={{ height: '90px', borderRadius: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
