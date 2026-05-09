export const metadata = { title: 'Seguridad y Emergencias | Telredsat' };

export default function SeguridadEmergencias() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/telefonia_banner_ai_1775921573551.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Seguridad y Emergencias</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>La primera y única línea de comunicación sobreviviente tras desastres naturales o colapsos de infraestructura.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>El Desafío Operativo</h2>
            <p>Durante eventos críticos como terremotos, aluviones o fallas masivas, la infraestructura celular y de fibra óptica es la primera en colapsar. Esta caída incomunica a las autoridades, corporaciones y equipos de primera respuesta, impidiendo la coordinación de rescates y la toma de decisiones cuando cada segundo cuenta.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Respaldo Estratégico</h2>
            <p>Proveemos sistemas de telefonía satelital portátil, radios PTT globales y terminales VSAT de contingencia de rápido despliegue. Estas soluciones garantizan que el Estado, ministerios, defensa civil y oficinas corporativas puedan seguir despachando órdenes y manteniendo la continuidad operativa con total independencia de las redes terrenales dañadas.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">¿A Quién Atendemos?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Fuerzas Armadas y Policiales</h3>
              <p>Comunicaciones encriptadas y seguras para operaciones tácticas, control fronterizo y patrullaje en zonas remotas de difícil acceso.</p>
            </div>
            <div className="card">
              <h3>Defensa Civil y Bomberos</h3>
              <p>Kits de comunicación de emergencia para brigadas de rescate, permitiendo establecer centros de comando móviles en la zona del desastre.</p>
            </div>
            <div className="card">
              <h3>Gobierno y Corporaciones</h3>
              <p>Enlaces satelitales de backup para asegurar la continuidad de negocio e instituciones gubernamentales, manteniendo la cadena de mando activa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>Beneficios</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Despliegue Rápido</h3>
              <p>Equipos portátiles y antenas autoapuntables que permiten establecer una red de voz y datos en cuestión de minutos desde cualquier lugar.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Resiliencia Total</h3>
              <p>Independencia absoluta de la infraestructura local terrestre, asegurando comunicaciones 100% operativas ante cualquier catástrofe.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Coordinación Eficiente</h3>
              <p>Integración de grupos de trabajo mediante radios PTT satelitales (Push-To-Talk) para interoperabilidad entre diferentes agencias de respuesta.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Prepárese para lo Inesperado</h2>
          <p style={{marginBottom: '30px'}}>Asegure la continuidad de sus operaciones críticas con nuestras soluciones de contingencia satelital.</p>
          <a href="/contacto" className="btn-primary"><span>Implementar Respaldo</span></a>
        </div>
      </section>
    </div>
  );
}
