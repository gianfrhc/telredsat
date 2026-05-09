export const metadata = { title: 'Casos de Éxito' };

export default function CasosDeExito() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/casos_exito_banner_ai_1775923996675.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Casos de Éxito</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Instituciones de primera línea que confían en nuestra infraestructura para garantizar sus operaciones críticas bajo cualquier condición.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div style={{marginBottom: '60px'}}>
            <h2 className="section-subtitle">Impacto Demostrado</h2>
            <h3 className="section-title" style={{marginTop: 0}}>Nuestros Principales Clientes Institucionales</h3>
          </div>

          <div className="grid-3" style={{gridTemplateColumns: '1fr', gap: '50px'}}>
            {/* MTC */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>Ministerio de Transportes y Comunicaciones (MTC)</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Red de Telefonía Satelital</h4>
                <p>Al ser la máxima entidad reguladora del país, el MTC requiere coordinar de forma ininterrumpida proyectos de infraestructura y emergencias viales. Telredsat ha provisto y mantiene operativa una extensa flota de terminales de telefonía satelital para la entidad. Esto garantiza que sus funcionarios mantengan comunicación permanente de voz y texto desde cualquier punto remoto del territorio peruano.</p>
              </div>
            </div>

            {/* INDECI */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>INDECI</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Red VSAT Desplegable</h4>
                <p>El Instituto Nacional de Defensa Civil (INDECI) requería una solución robusta para coordinar en zonas devastadas donde las redes terrestres desaparecieron tras los desastres naturales. Implementamos centros de conexión rápida mediante antenas VSAT que habilitaron internet y telemetría de inmediato, operando como centro de comando vital para los rescatistas.</p>
              </div>
            </div>

            {/* PNP */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>Policía Nacional del Perú (PNP)</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Telefonía Satelital Táctica</h4>
                <p>Para dotar a los comandos operativos de la PNP en zonas selváticas y de la región VRAEM, proveímos de teléfonos satelitales ultra robustos bajo grado militar MIL-SPEC. Esta provisión garantizó que las escuadras de intervención nunca perdieran contacto de voz ni capacidad de enviar coordenadas GPS exactas a la base, brindando total cobertura táctica.</p>
              </div>
            </div>

            {/* MARINA DE GUERRA */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>Marina de Guerra del Perú</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Conectividad Satelital Marítima</h4>
                <p>Las embarcaciones de la Marina de Guerra precisaban enlaces de datos seguros en el dominio marítimo ininterrumpibles. Telredsat implementó sistemas satelitales marítimos autoapuntables (antenas estabilizadas), lo que asegura que buques oceánicos mantengan un acceso a datos constante para radares, comunicación estratégica y reportes en tiempo real, indiferentemente a las inclemencias marítimas.</p>
              </div>
            </div>

            {/* MIDAGRI */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>Ministerio de Desarrollo Agrario y Riego (MIDAGRI)</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Sistema de Rastreo y Monitoreo GPS</h4>
                <p>Implementación de una plataforma integral de rastreo y monitoreo satelital GPS (Contrato N° 006-2024) para el seguimiento en tiempo real de activos de la entidad a nivel nacional. Esta solución asegura la visibilidad operativa en zonas rurales y agrarias de alta complejidad donde la cobertura celular es inexistente, garantizando la seguridad del personal técnico y la optimización de las rutas logísticas del ministerio.</p>
              </div>
            </div>
            {/* ELECTROSUR ESTE */}
            <div className="card" style={{display: 'flex', flexDirection: 'row', gap: '30px', textAlign: 'left', padding: '40px', alignItems: 'center'}}>
              <div style={{flex: '1'}}>
                <h3 style={{fontSize: '1.8rem', color: 'var(--primary-color)'}}>Electro Sur Este S.A.A.</h3>
                <h4 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>Solución Implementada: Rastreo Satelital GPS de Flotas</h4>
                <p>Para esta importante empresa de distribución eléctrica, la seguridad y coordinación de sus cuadrillas de mantenimiento en zonas altoandinas y rurales es vital. Implementamos un sistema avanzado de rastreo GPS satelital que permite a su centro de control monitorear la ubicación exacta, rutas y alertas de emergencia de todos sus vehículos en tiempo real, superando por completo las limitaciones de las redes celulares convencionales.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container">
          <h2 className="section-title">Únase a Nuestra Cartera de Aliados</h2>
          <p style={{marginBottom: '30px'}}>Nuestra tecnología satisface los requerimientos técnicos y de seguridad más exigentes a nivel Estado y Fuerzas Armadas.</p>
          <a href="/contacto" className="btn-primary"><span>Coordinar Evaluación</span></a>
        </div>
      </section>
    </div>
  );
}
