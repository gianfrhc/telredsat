export default function InternetSatelital() {
  return (
    <div className="internal-page">
      {/* Header/Banner */}
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.8), rgba(27, 39, 60, 0.8)), url('/internet_banner_ai_1775921647345.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Internet Satelital (VSAT)</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Conectividad de banda ancha ininterrumpida y de alta velocidad para las operaciones más críticas en zonas donde la infraestructura terrestre no llega.</p>
        </div>
      </section>

      {/* Problema y Solución */}
      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>El Desafío</h2>
            <p>Las locaciones remotas sufren de desconexión constante, afectando la telemetría, seguridad del personal y la continuidad del negocio.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Implementamos terminales VSAT robustos que establecen un enlace directo con constelaciones satelitales, ofreciendo Internet de baja latencia 100% independiente de las redes locales.</p>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Aplicaciones Clave</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Telemetría</h3>
              <p>Transmisión de datos de sensores y maquinaria pesada en tiempo real hacia la sede central.</p>
            </div>
            <div className="card">
              <h3>Campamentos Remotos</h3>
              <p>Internet WiFi de alta calidad para mantener el bienestar y la comunicación del staff operativo.</p>
            </div>
            <div className="card">
              <h3>Backup Corporativo</h3>
              <p>Sistemas de contingencia frente a caídas de fibra óptica en centros productivos urbanos y suburbanos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios & Por qué elegirnos */}
      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>¿Por qué elegir Telredsat?</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Baja Latencia</h3>
              <p>Óptimo para videollamadas corporativas y operaciones sincronizadas.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Sin Límites Geográficos</h3>
              <p>Cobertura Ku y Ka a nivel nacional e internacional para máxima fiabilidad.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Soporte 24/7</h3>
              <p>Monitoreo proactivo de la red (NOC) para resolver incidencias al instante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Cotización */}
      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Enlace su Operación Hoy</h2>
          <p style={{marginBottom: '30px'}}>Obtenga una evaluación técnica y cotización sin compromiso con nuestros ingenieros especializados.</p>
          <a href="/contacto" className="btn-primary"><span>Solicitar Cotización</span></a>
        </div>
      </section>
    </div>
  );
}
