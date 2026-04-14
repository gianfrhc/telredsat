export default function IndustriaEnergia() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/internet_banner_ai_1775921647345.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Energía y Petróleo</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Comunicaciones inquebrantables para el sector Oil & Gas. Conectividad offshore y onshore para asegurar la producción energética constante.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>Desafío en el Terreno</h2>
            <p>La exploración petrolera y de gas requiere operar en las plataformas más inhóspitas y solitarias como mar adentro o densas amazonías. La falta de red produce que los oleoductos y válvulas críticas no reporten el estado SCADA, y las comunicaciones en alta mar corren el peligro de cortarse.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Conexiones satelitales seguras orientadas a ambientes corrosivos o de vibración continua. Nuestras antenas marítimas autoapuntables transmiten grandes cantidades de inteligencia (datos sísmicos, telemetría SCADA) directamente a la sala de mando, proporcionando telefonía segura a la tripulación.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">¿A Quién Atendemos?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Plataformas Offshore</h3>
              <p>Para operaciones en mar abierto (Oil & Gas), donde cables físicos son imposibles e inseguros.</p>
            </div>
            <div className="card">
              <h3>Exploración Sísmica Onshore</h3>
              <p>Campamentos temporales nómadas ubicados cerca a reservorios selváticos o áridos, que demandan re-ubicaciones rápidas de la antena.</p>
            </div>
            <div className="card">
              <h3>Parques de Energía Renovable</h3>
              <p>Comunicaciones satelitales de backup para plantas eólicas o solares vastas cuyas matrices requieren un SCADA de latencia precisa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>Beneficios</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Equipos C-Band Adaptables</h3>
              <p>Mayor resistencia frente a clima severo en instalaciones marítimas.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Monitorización Preventiva</h3>
              <p>Transferencia IoT garantizada de las redes SCADA permitiendo control minucioso de oleoductos para prevención de derrames.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Ciberseguridad Avanzada</h3>
              <p>Protección contra intrusión cibernética usando redes privadas aisladas del internet público para los centros vitales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Contáctenos</h2>
          <p style={{marginBottom: '30px'}}>Nuestra experiencia está a su disponibilidad para proveer una solución energética integral a medida.</p>
          <a href="/contacto" className="btn-primary"><span>Solicitar Entrevista</span></a>
        </div>
      </section>
    </div>
  );
}
