"use client";
import Link from 'next/link';

export default function RastreoSatelitalCatalog() {
  const products = [
    {
      id: "orbcomm-st9100",
      name: "Orbcomm ST9100",
      description: "Dispositivo híbrido satelital/celular de seguimiento dual programable, diseñado para monitoreo remoto avanzado de activos en cualquier entorno.",
      link: "/productos/rastreo-satelital/orbcomm-st9100",
      image: "/productos/orbcomm-st9100.webp"
    },
    {
      id: "teltonika-fmc920",
      name: "Teltonika FMC920",
      description: "Rastreador GPS LTE Cat 1 ultracompacto y básico, ideal para una instalación rápida en la gestión diaria de flotas y vehículos ligeros.",
      link: "/productos/rastreo-satelital/teltonika-fmc920",
      image: "/productos/teltonika-fmc920.webp"
    },
    {
      id: "teltonika-fmc234",
      name: "Teltonika FMC234",
      description: "Rastreador impermeable IP67 resistente al agua con batería de respaldo y Bluetooth, diseñado para soportar condiciones extremas y uso industrial rudo.",
      link: "/productos/rastreo-satelital/teltonika-fmc234",
      image: "/productos/teltonika-fmc234.webp"
    },
    {
      id: "teltonika-fmc130",
      name: "Teltonika FMC130",
      description: "Terminal avanzado LTE Cat 1 con GNSS/Bluetooth y soporte para lectura de datos CAN. Entradas digitales ideales para integraciones complejas en logística.",
      link: "/productos/rastreo-satelital/teltonika-fmc130",
      image: "/productos/teltonika-fmc130.webp"
    },
    {
      id: "teltonika-fmb204",
      name: "Teltonika FMB204",
      description: "Rastreador GPS a prueba de agua con certificación IP67, conectividad Bluetooth y batería interna de larga duración. Perfecto para agricultura y logística.",
      link: "/productos/rastreo-satelital/teltonika-fmb204",
      image: "/productos/teltonika-fmb204.webp"
    }
  ];

  return (
    <div className="internal-page">
      {/* Banner Principal */}
      <section className="internal-hero" style={{ backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.7), rgba(27, 39, 60, 0.9)), url('/mineria_banner_ai_1775921440140.png')" }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Equipos de Rastreo Satelital</h1>
          <p className="text-white" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
            Terminales GPS de alta precisión, híbridos y celulares diseñados para la gestión, control y monitoreo de activos móviles en todo el mundo.
          </p>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <section className="section-padding bg-light">
        <div className="container" style={{ maxWidth: '1450px' }}>
          <h2 className="section-title">Catálogo de Rastreadores</h2>
          <div className="grid-4" style={{ gap: '30px' }}>
            {products.map((product) => (
              <div key={product.id} className="card" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                
                {/* Cuadro de la Imagen */}
                <div style={{ height: '240px', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea', overflow: 'hidden', padding: '20px' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                    onError={(e) => { 
                      e.target.style.display='none'; 
                      e.target.nextSibling.style.display='flex'; 
                    }} 
                  />
                  {/* Fallback en caso de que aún no tengas las fotos locales */}
                  <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: '#c0c0c0' }}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><circle cx="12" cy="18" r="1"></circle></svg>
                     <p style={{fontSize: '0.8rem', marginTop: '10px'}}>Imagen Pendiente</p>
                  </div>
                </div>

                {/* Título y Descripción */}
                <h3 style={{ fontSize: '1.4rem' }}>{product.name}</h3>
                <p style={{ flex: 1, marginBottom: '25px', color: 'var(--text-muted)' }}>{product.description}</p>
                
                {/* Botón */}
                <Link href={product.link} className="btn-catalog">
                  <span>Más Información</span>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
