"use client";
import Link from 'next/link';

export default function TerminalesSatelitalesCatalog() {
  const products = [
    {
      id: "explorer-510",
      name: "Explorer 510 Terminal BGAN",
      description: "El terminal BGAN más portátil del mercado. Carcasa resistente (IP66), tamaño ultracompacto y conectividad wifi global para generar equipos de trabajo remotos en minutos.",
      link: "/productos/terminales-satelitales/explorer-510",
      image: "https://shop.apollosat.com/cdn/shop/files/Cobham_Explorer_510.jpg?v=1687353974" // External reliable image
    },
    {
      id: "iridium-go",
      name: "Iridium GO!",
      description: "Punto de acceso wifi satelital que convierte su propio smartphone Apple o Android en un dispositivo de comunicación global. Permite realizar llamadas, enviar SMS y correos.",
      link: "/productos/terminales-satelitales/iridium-go",
      image: "https://ts2.store/1042-large_default/iridium-go.jpg"
    },
    {
      id: "explorer-710",
      name: "Explorer 710 Terminal BGAN",
      description: "Terminal clase 1 de ultra alta velocidad. Diseñado especialmente para transmisión de datos en vivo (Broadcasting), despliegues militares y operaciones mineras intensivas.",
      link: "/productos/terminales-satelitales/explorer-710",
      image: "https://ts2.store/1482-large_default/cobham-explorer-710.jpg"
    },
    {
      id: "hughes-9502",
      name: "Hughes 9502 BGAN – M2M",
      description: "El terminal definitivo especializado para conexiones Inmarsat Machine-to-Machine (M2M) permanentes, como control SCADA, oleoductos y telemetría industrial en zonas aisladas.",
      link: "/productos/terminales-satelitales/hughes-9502",
      image: "https://ts2.store/1517-large_default/hughes-9502-bgan-m2m-terminal.jpg"
    }
  ];

  return (
    <div className="internal-page">
      {/* Banner Principal */}
      <section className="internal-hero" style={{ backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.7), rgba(27, 39, 60, 0.9)), url('/mineria_banner_ai_1775921440140.png')" }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Terminales Satelitales</h1>
          <p className="text-white" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
            Despliegue oficinas completas en el fin del mundo. Equipos de transferencia de voz, internet y telemetría (M2M) mediante la red BGAN de Inmarsat e Iridium.
          </p>
        </div>
      </section>

      {/* Catálogo de Productos */}
      <section className="section-padding bg-light">
        <div className="container" style={{ maxWidth: '1450px' }}>
          <h2 className="section-title">Catálogo de Equipos</h2>
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
                  {/* Fallback Inteligente */}
                  <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: '#c0c0c0' }}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                     <p style={{fontSize: '0.8rem', marginTop: '10px'}}>Imagen Pendiente</p>
                  </div>
                </div>

                {/* Título y Descripción */}
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)' }}>{product.name}</h3>
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
