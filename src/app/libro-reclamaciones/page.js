"use client";

import { useState } from 'react';

export default function LibroReclamaciones() {
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
          <h1 style={{fontSize: '3rem', marginBottom: '0', color: 'var(--bg-color)'}}>Libro de Reclamaciones</h1>
        </div>
      </section>

      <section className="section-padding bg-light" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '-40px auto 0', position: 'relative', zIndex: 10, background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>Libro de Reclamaciones Virtual</h2>
            <p style={{ textAlign: 'center', marginBottom: '10px', color: 'var(--text-muted)' }}>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a su disposición.</p>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)' }}>Razón Social: TELREDSAT S.A.C.<br/>RUC: 20608885994<br/>Dirección: Av. Nicolas Ayllon 2014, Ate, Lima</p>
            
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuevo Reclamo/Queja - Libro de Reclamaciones TELREDSAT" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. Datos del Consumidor</h4>
              
              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <input type="text" name="Nombres y Apellidos" required placeholder="Nombres y Apellidos *" />
                </div>
                <div>
                  <select name="Tipo de Documento" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fafafa', color: '#333' }}>
                    <option value="">Tipo de Documento *</option>
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de Extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <input type="text" name="Numero de Documento" required placeholder="Número de Documento *" />
                </div>
                <div>
                  <input type="tel" name="Telefono" required placeholder="Teléfono *" />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <input type="email" name="Correo Electronico" required placeholder="Correo Electrónico *" />
                </div>
                <div>
                  <input type="text" name="Direccion" required placeholder="Dirección Exacta *" />
                </div>
              </div>

              <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>2. Identificación del Bien Contratado</h4>

              <div className="grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
                <div>
                  <select name="Bien Contratado" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fafafa', color: '#333' }}>
                    <option value="">Producto / Servicio *</option>
                    <option value="Producto">Producto (Dispositivo, Terminal, etc.)</option>
                    <option value="Servicio">Servicio (Plan de datos, Software, etc.)</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="Monto Reclamado" placeholder="Monto Reclamado (Opcional - S/ o $)" />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <textarea name="Descripcion Bien" rows="2" required placeholder="Descripción del Producto o Servicio Contratado *"></textarea>
              </div>

              <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '30px' }}>3. Detalle de Reclamo y/o Queja</h4>

              <div style={{ marginBottom: '15px' }}>
                <select name="Tipo de Solicitud" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fafafa', color: '#333' }}>
                  <option value="">Tipo *</option>
                  <option value="Reclamo">RECLAMO: Disconformidad relacionada a los productos o servicios.</option>
                  <option value="Queja">QUEJA: Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <textarea name="Detalle del Reclamo" rows="4" required placeholder="Detalle (Explique su reclamo o queja) *"></textarea>
              </div>
              <div style={{ marginBottom: '25px' }}>
                <textarea name="Pedido del Cliente" rows="3" required placeholder="Pedido (Lo que solicita como resolución) *"></textarea>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', opacity: status === 'loading' ? 0.7 : 1 }} disabled={status === 'loading'}>
                  <span>{status === 'loading' ? 'Enviando Registro...' : 'Enviar Reclamo / Queja'}</span>
                </button>
              </div>

              {status === 'success' && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '5px', textAlign: 'center' }}>
                  ¡Registro enviado con éxito! Se ha ingresado su reclamo/queja. Nos pondremos en contacto con usted dentro del plazo legal establecido.
                </div>
              )}
              {status === 'error' && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '5px', textAlign: 'center' }}>
                  Hubo un error al enviar el registro. Por favor, intente nuevamente o contáctenos por correo a clientesperu@telredsat.com.pe.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
