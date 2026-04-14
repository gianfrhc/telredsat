export default function RastreoGPS() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.8), rgba(27, 39, 60, 0.8)), url('/telefonia_banner_ai_1775921573551.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Rastreo GPS Satelital</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Monitoreo y seguimiento en tiempo real de sus flotas y activos en cualquier lugar, independientemente de la cobertura celular.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>El Desafío</h2>
            <p>La ceguera operativa durante el transporte de carga valiosa en zonas sin señal de telefonía compromete la seguridad y eficiencia logística.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Sistemas M2M y terminales GPS/Satelitales híbridos que saltan a la red satelital en el preciso momento que se pierde la red celular, asegurando visibilidad ininterrumpida de sus operaciones.</p>
          </div>
        </div>
      </section>
      
      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Contáctenos</h2>
          <a href="/contacto" className="btn-primary"><span>Solicitar Catálogo GPS</span></a>
        </div>
      </section>
    </div>
  );
}
