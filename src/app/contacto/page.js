"use client";

import { useState } from 'react';

export default function Contacto() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/clientesperu@telredsat.com.pe", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const result = await response.json();
        console.error(result);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="internal-page">
      <section style={{ position: 'relative', padding: '130px 0 60px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.6), rgba(27, 39, 60, 0.9)), url('/internet_banner_ai_1775921647345.png')" }}>
        <div className="container text-center text-white">
          <h1 style={{fontSize: '3rem', marginBottom: '0', color: 'var(--bg-color)'}}>Contacto</h1>
        </div>
      </section>

      <section className="section-padding bg-light" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '-40px auto 0', position: 'relative', zIndex: 10, background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>Contáctanos</h2>
            <p style={{ textAlign: 'center', marginBottom: '10px', color: 'var(--text-muted)' }}>Gracias por su interés. ¡Estamos ansiosos por conocerte!</p>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)' }}>Rellene este formulario de contacto y el equipo de TELREDSAT se pondrá en contacto con usted lo antes posible.</p>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuevo contacto desde la Web TELREDSAT!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div style={{ marginBottom: '15px' }}>
                <input type="text" name="Nombre" required placeholder="Nombres *" />
              </div>
              
              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <input type="email" name="Correo" required placeholder="Correo electrónico *" />
                </div>
                <div>
                  <input type="tel" name="Telefono" placeholder="Teléfono" />
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <textarea name="Comentarios" rows="5" required placeholder="Mensaje *"></textarea>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', opacity: status === 'loading' ? 0.7 : 1 }} disabled={status === 'loading'}>
                  <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </button>
              </div>

              {status === 'success' && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px', textAlign: 'center' }}>
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}
              {status === 'error' && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '5px', textAlign: 'center' }}>
                  Hubo un error al enviar el mensaje. Por favor, intente nuevamente o contáctenos por correo o teléfono.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
