"use client";
import Link from 'next/link';

export default function TelefoniaSatelitalCatalog() {
  const products = [
    {
      id: "isatphone2",
      name: "IsatPhone 2",
      description: "Teléfono satelital robusto de cobertura global, con botón de emergencia SOS y gran autonomía de batería, ideal para zonas extremas.",
      link: "/productos/telefonia-satelital/isatphone",
      image: "/productos/isatphone2.webp"
    },
    {
      id: "iridium-extreme-ptt",
      name: "Iridium Extreme PTT",
      description: "El estándar de oro en comunicaciones de misión crítica. La potencia de un Iridium con la capacidad de radio global Push-To-Talk.",
      link: "/productos/telefonia-satelital/iridium-extreme-ptt",
      image: "/productos/iridium_ptt.webp"
    },
    {
      id: "iridium-extreme-9575",
      name: "Iridium Extreme 9575",
      description: "Diseño ultrarresistente con rastreo GPS y botón SOS integrado para zonas remotas y hostiles, certificado militar.",
      link: "/productos/telefonia-satelital/iridium-extreme-9575",
      image: "/productos/iridium-9575-ts2.jpg"
    },
    {
      id: "ic-sat-100",
      name: "IC-SAT 100",
      description: "Radio bidireccional satelital Push-To-Talk con la red Iridium. Especial para coordinación de flotas y equipos en movimiento.",
      link: "/productos/telefonia-satelital/ic-sat-100",
      image: "/productos/ic-sat-100.webp"
    }
  ];

  return (
    <div className="internal-page">
      {/* Banner Principal */}
      <section className="internal-hero" style={{ backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.7), rgba(27, 39, 60, 0.9)), url('/telefonia_banner_ai_1775921573551.png')" }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Telefonía Satelital</h1>
          <p className="text-white" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
            Equipos de comunicación por satélite de última generación para mantener a su personal conectado y seguro en cualquier lugar del planeta.
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
                  {/* Fallback en caso de que aún no tengas las fotos locales */}
                  <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: '#c0c0c0' }}>
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
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
