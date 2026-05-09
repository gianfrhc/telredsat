export const metadata = { title: 'Transporte y Logística | Telredsat' };

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
            <p>Las pérdidas de mercancía, desvíos de rutas no autorizados y la incapacidad de notificar incidentes en zonas desoladas representan un riesgo crítico. Sin cobertura celular, es imposible enviar comandos de inmovilización vehicular, monitorear la cadena de frío o garantizar la seguridad del conductor y la carga.</p>
          </div>
          <div>
            <h2 style={{color: 'var(--primary-color)'}}>Nuestra Solución</h2>
            <p>Habilitamos sistemas avanzados de telemetría híbrida (Satelital/Celular) y PTT que reportan variables vitales continuamente. A través de nuestros equipos de rastreo, garantizamos visibilidad total de la apertura de puertas, sensores de fatiga, velocidad y ubicación exacta hasta su destino final, sin importar la ruta.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">¿A Quién Atendemos?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Flotas Terrestres y Carga Pesada</h3>
              <p>Transporte interprovincial e internacional que cruza fronteras y zonas geográficas sin cobertura de operadores móviles tradicionales.</p>
            </div>
            <div className="card">
              <h3>Logística Marítima y Fluvial</h3>
              <p>Embarcaciones pesqueras, buques mercantes y transporte fluvial en la Amazonía que requieren monitoreo constante y comunicación de voz.</p>
            </div>
            <div className="card">
              <h3>Transporte de Valores y Cargas Críticas</h3>
              <p>Vehículos blindados y transporte de materiales peligrosos que exigen protocolos de seguridad estrictos y alertas inmediatas ante anomalías.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white text-center">
        <div className="container">
          <h2 style={{color: 'var(--bg-color)', marginBottom: '40px'}}>Beneficios</h2>
          <div className="grid-3">
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Monitoreo en Tiempo Real</h3>
              <p>Visibilidad ininterrumpida de sus activos con actualizaciones precisas de ubicación y estado de la telemetría vehicular.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Prevención y Seguridad</h3>
              <p>Botones de pánico satelitales, inmovilización remota de motores y geocercas activas para combatir el robo en carreteras.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--accent-color)'}}>Optimización de Rutas</h3>
              <p>Análisis de datos para mejorar los tiempos de entrega, reducir el consumo de combustible y aumentar la vida útil de los vehículos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Mejore su Logística Hoy</h2>
          <p style={{marginBottom: '30px'}}>Descubra cómo nuestras soluciones de rastreo satelital pueden transformar la eficiencia y seguridad de su flota.</p>
          <a href="/contacto" className="btn-primary"><span>Solicitar Cotización</span></a>
        </div>
      </section>
    </div>
  );
}
