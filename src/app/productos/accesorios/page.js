"use client";
import Link from 'next/link';

export default function AccesoriosCatalog() {
  const categories = [
    {
      title: "Accesorios para IsatPhone 2",
      products: [
        {
          id: "isatphone2-battery",
          name: "Batería IsatPhone 2",
          description: "Batería de repuesto original Li-Ion 3.7V / 3300mAh para Inmarsat IsatPhone 2. Hasta 8 horas de conversación y 160 horas en standby.",
          image: "/productos/accesorios/isatphone2-battery.webp"
        },
        {
          id: "isatphone2-charger",
          name: "Cargador de Pared IsatPhone 2",
          description: "Cargador AC de pared original con adaptador universal multirregión (110V-240V) para Inmarsat IsatPhone 2. Incluye cable micro USB.",
          image: "/productos/accesorios/isatphone2-charger.webp"
        },
        {
          id: "isatphone2-car-charger",
          name: "Cargador Vehicular IsatPhone 2",
          description: "Cargador de 12V/24V para encendedor de cigarrillos, ideal para cargar su IsatPhone 2 durante desplazamientos en vehículo o embarcación.",
          image: "/productos/accesorios/isatphone2-car-charger.webp"
        },
        {
          id: "isatphone2-case",
          name: "Funda IsatPhone 2",
          description: "Funda protectora de cuero resistente con clip para cinturón, diseñada a medida para el Inmarsat IsatPhone 2. Protege contra golpes y rayones.",
          image: "/productos/accesorios/isatphone2-case.webp"
        },
        {
          id: "isatphone2-usb-cable",
          name: "Cable USB de Datos IsatPhone 2",
          description: "Cable USB de datos y carga para IsatPhone 2. Permite sincronización de contactos, actualización de firmware y carga desde PC o laptop.",
          image: "/productos/accesorios/isatphone2-usb-cable.webp"
        },
        {
          id: "isatphone2-docking",
          name: "Base Docking Station IsatPhone 2",
          description: "Estación de acoplamiento con antena externa, cargador integrado y conexión para manos libres. Ideal para uso fijo en oficinas, campamentos o embarcaciones.",
          image: "/productos/accesorios/isatphone2-docking.webp"
        }
      ]
    },
    {
      title: "Accesorios para Iridium Extreme / PTT",
      products: [
        {
          id: "iridium-battery",
          name: "Batería Iridium Extreme 9575",
          description: "Batería de repuesto original Li-Ion BAT31001 para Iridium 9575 Extreme y PTT. 3.7V / 2800mAh con hasta 6 horas de conversación.",
          image: "/productos/accesorios/iridium-battery.webp"
        },
        {
          id: "iridium-charger",
          name: "Cargador AC Iridium 9575",
          description: "Cargador de pared original con adaptador internacional (100-240V). Compatible con Iridium Extreme 9575 y Iridium Extreme PTT.",
          image: "/productos/accesorios/iridium-charger.webp"
        },
        {
          id: "iridium-car-charger",
          name: "Cargador Vehicular Iridium 9575",
          description: "Adaptador de carga vehicular 12V/24V para Iridium 9575 Extreme y PTT. Carga rápida durante el trayecto en cualquier vehículo.",
          image: "/productos/accesorios/iridium-car-charger.webp"
        },
        {
          id: "iridium-holster",
          name: "Funda Holster Iridium 9575",
          description: "Funda protectora de nylon balístico con clip giratorio para cinturón. Acceso rápido y protección robusta para uso en campo.",
          image: "/productos/accesorios/iridium-holster.webp"
        },
        {
          id: "iridium-usb-cable",
          name: "Cable USB de Datos Iridium 9575",
          description: "Cable USB para transferencia de datos, actualización de firmware y carga. Compatible con Iridium 9575 Extreme y Extreme PTT.",
          image: "/productos/accesorios/iridium-usb-cable.webp"
        },
        {
          id: "iridium-antenna-adapter",
          name: "Adaptador Antena Externa Iridium",
          description: "Kit adaptador de antena externa con conector SMA para mejorar la señal del Iridium 9575 en interiores de vehículos, embarcaciones o edificaciones.",
          image: "/productos/accesorios/iridium-antenna-adapter.webp"
        }
      ]
    }
  ];

  return (
    <div className="internal-page">
      {/* Banner Principal */}
      <section className="internal-hero" style={{ backgroundImage: "linear-gradient(rgba(27, 39, 60, 0.7), rgba(27, 39, 60, 0.9)), url('/telefonia_banner_ai_1775921573551.png')" }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Accesorios Satelitales</h1>
          <p className="text-white" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
            Baterías, cargadores, fundas, cables y adaptadores originales para sus equipos de telefonía satelital Inmarsat e Iridium.
          </p>
        </div>
      </section>

      {/* Catálogo por Categorías */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`section-padding ${catIndex % 2 === 0 ? 'bg-light' : ''}`}>
          <div className="container" style={{ maxWidth: '1450px' }}>
            <h2 className="section-title">{category.title}</h2>
            <div className="grid-3" style={{ gap: '30px' }}>
              {category.products.map((product) => (
                <div key={product.id} className="card" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Cuadro de la Imagen */}
                  <div style={{ height: '220px', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eaeaea', overflow: 'hidden', padding: '20px' }}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                      onError={(e) => { 
                        e.target.style.display='none'; 
                        e.target.nextSibling.style.display='flex'; 
                      }} 
                    />
                    {/* Fallback */}
                    <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', color: '#c0c0c0' }}>
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                       <p style={{fontSize: '0.8rem', marginTop: '10px'}}>Imagen Pendiente</p>
                    </div>
                  </div>

                  {/* Título y Descripción */}
                  <h3 style={{ fontSize: '1.3rem' }}>{product.name}</h3>
                  <p style={{ flex: 1, marginBottom: '25px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{product.description}</p>
                  
                  {/* Botón */}
                  <Link href="/contacto" className="btn-catalog">
                    <span>Solicitar Cotización</span>
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
