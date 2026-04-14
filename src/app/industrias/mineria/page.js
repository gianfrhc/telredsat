export default function IndustriaMineria() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/mineria_banner_ai_1775921440140.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Minería y Extracción</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Integración de las redes satelitales más seguras en yacimientos de tajo abierto, túneles profundos y campamentos aislados.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container grid-2">
          <div>
            <h2 style={{color: 'var(--accent-color)'}}>Desafío en el Terreno</h2>
            <p>La ubicación remota de la mayoría de operaciones mineras presenta una grave limitación para el despliegue de redes convencionales de fibra terrestre y celular. Sin señal de datos, es imposible habilitar el IoT (Internet Industrial de las Cosas), gestionar centros de control integrados y garantizar la bioseguridad del operario minero.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Suministramos enlaces satelitales dedicados en banda Ka/Ku que habilitan anillos de conectividad persistente bajo cualquier factor hidrometeorológico. A través de nuestros equipos VSAT empresariales, aseguramos backbones de conectividad privada (Redes VPN IPsec) desde el tajo hasta la matriz central en la ciudad operativa principal.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">¿A Quién Atendemos?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Minería Subterránea</h3>
              <p>Campamentos y accesos de boca de túneles buscando enviar data geológica masiva al instante.</p>
            </div>
            <div className="card">
              <h3>Minería a Tajo Abierto</h3>
              <p>Operaciones automatizadas con cientos de camiones y monitoreo de fajas transportadoras.</p>
            </div>
            <div className="card">
              <h3>Exploración Temprana</h3>
              <p>Cuadrillas de geólogos trabajando de manera errante que dependen de la telefonía satelital ligera para la transmisión de coordenadas e inventarios desde cualquier punto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>Beneficios</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Seguridad Operacional</h3>
              <p>Intervención y seguimiento inmediato de las brigadas en puntos con alertas y sensores.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Reducción de Costos</h3>
              <p>Visibilidad en vivo del equipo reduciendo ineficiencias logísticas del uso excesivo de maquinaria.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Bienestar y Retención</h3>
              <p>Conexión a Internet potente y constante para los obreros, subiendo los índices de satisfacción laboral y disminuyendo la presión psicológica del aislamiento.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Contáctenos</h2>
          <p style={{marginBottom: '30px'}}>Nuestra experiencia está a su disponibilidad para proveer diseño, provisión, configuración y mesa de mantenimiento satelital exclusiva para el rubro extractivo.</p>
          <a href="/contacto" className="btn-primary"><span>Coordinar Visita Técnica</span></a>
        </div>
      </section>
    </div>
  );
}
