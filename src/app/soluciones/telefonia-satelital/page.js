export default function TelefoniaSatelital() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.8), rgba(27, 39, 60, 0.8)), url('/telefonia_banner_ai_1775921573551.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Telefonía Satelital</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Equipos robustos de grado militar que garantizan comunicación por voz en cualquier cuadrante del planeta, salvando vidas y conectando equipos.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>El Desafío</h2>
            <p>La movilización en áreas sin cobertura celular (selva, océano, alta montaña) genera ceguera operativa y riesgos críticos durante las emergencias.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Suministramos teléfonos satelitales (Iridium, Inmarsat) ligeros pero indestructibles que proporcionan conectividad de voz, PTT (Push-To-Talk) y mensajes SOS integrados.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Aplicaciones Clave</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Exploración y Minería</h3>
              <p>Seguridad para brigadas en zonas de prospección sin infraestructura celular.</p>
            </div>
            <div className="card">
              <h3>Marítimo y Offshore</h3>
              <p>Comunicaciones entre embarcaciones y puerto para flotas pesqueras o buques cargueros.</p>
            </div>
            <div className="card">
              <h3>Defensa y Rescate</h3>
              <p>Canal vital de comunicación in-situ en situaciones de catástrofes naturales y operaciones de rescate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>¿Por qué elegir Telredsat?</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Equipos Homologados</h3>
              <p>Hardware certificado bajo los estándares más altos de resistencia (IP65, MIL-SPEC).</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Planes Corporativos Flexibles</h3>
              <p>Suscripciones adaptadas a requerimientos intermitentes o uso intensivo de bolsas de minutos compartidas.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Cobertura Global 100%</h3>
              <p>Alcance total utilizando las redes LEO (Low Earth Orbit), sin puntos ciegos globales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Mantenga a su equipo a salvo</h2>
          <p style={{marginBottom: '30px'}}>Haga su pedido hoy y equipe a su personal con seguridad máxima.</p>
          <a href="/contacto" className="btn-primary"><span>Solicitar Catálogo de Equipos</span></a>
        </div>
      </section>
    </div>
  );
}
