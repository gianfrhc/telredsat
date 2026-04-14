export default function SeguridadEmergencias() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/telefonia_banner_ai_1775921573551.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Seguridad y Emergencias</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>La primera y única línea de comunicación sobreviviente tras desastres naturales.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>El Desafío Operativo</h2>
            <p>Terremotos, aluviones o fallas masivas derriban la infraestructura celular y de fibra óptica, incomunicando a corporaciones y oficinas de emergencia cuando más se necesitan.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Respaldo Estratégico</h2>
            <p>La Telefonía y VSAT de contingencia garantizan que el Estado, ministerios y oficinas corporativas puedan seguir despachando órdenes y coordinando con total independencia de las redes terrenales dañadas.</p>
          </div>
        </div>
      </section>
      
      <section className="section-padding text-center">
        <div className="container">
          <a href="/contacto" className="btn-primary"><span>Implementar Respaldo</span></a>
        </div>
      </section>
    </div>
  );
}
