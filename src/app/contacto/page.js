export default function Contacto() {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/internet_banner_ai_1775921647345.png')"}}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3.5rem', marginBottom: '20px', color: 'var(--bg-color)'}}>Contacto</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Nuestros ingenieros están listos para diseñar una red a la medida de su desafío operativo.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>Contáctenos</h2>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)' }}>Déjenos sus datos y requerimientos. Nuestros ingenieros se comunicarán con usted a la brevedad.</p>
            <form action="https://formsubmit.co/clientesperu@telredsat.com.pe" method="POST">
              <input type="hidden" name="_subject" value="Nuevo contacto desde la Web TELREDSAT!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--primary-color)', textAlign: 'left' }}>Nombre y Apellido *</label>
                <input type="text" name="Nombre" required placeholder="Ej. Juan Pérez" />
              </div>
              
              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--primary-color)', textAlign: 'left' }}>Correo Electrónico *</label>
                  <input type="email" name="Correo" required placeholder="su@empresa.com" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--primary-color)', textAlign: 'left' }}>Número Telefónico *</label>
                  <input type="tel" name="Telefono" required placeholder="+51 987 654 321" />
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--primary-color)', textAlign: 'left' }}>Comentarios y/o Requerimientos *</label>
                <textarea name="Comentarios" rows="5" required placeholder="Detalle aquí las necesidades de conectividad de su proyecto..."></textarea>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}><span>Enviar Mensaje</span></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
