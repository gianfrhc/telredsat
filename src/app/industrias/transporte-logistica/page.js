export default function TransporteLogistica() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/internet_banner_ai_1775921647345.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Transporte y Logística</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Control total de flotas navieras, terrestres pesadas e interprovinciales por zonas oscuras de la geografía nacional.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>Desafío en el Terreno</h2>
            <p>Perdidas de mercancía, desvío de rutas e incapacidad de notificar incidentes o de enviar comandos de inmovilización vehicular en rutas desoladas.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Habilitamos sistemas de telemetría y PTT satelital que reportan variables vitales (apertura de puertas, sensor de fatiga, velocidad) continuamente hasta su destino final.</p>
          </div>
        </div>
      </section>
      
      <section className="section-padding text-center">
        <div className="container">
          <a href="/contacto" className="btn-primary"><span>Mejorar Logística Ahora</span></a>
        </div>
      </section>
    </div>
  );
}
