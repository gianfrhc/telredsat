"use client";
import Link from 'next/link';

export default function ProductDetail({ product }) {
  return (
    <div className="internal-page">
      <section className="internal-hero" style={{ backgroundImage: `linear-gradient(rgba(27,39,60,0.7), rgba(27,39,60,0.9)), url('${product.banner || "/internet_banner_ai_1775921647345.png"}')` }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '3rem', marginBottom: '10px' }}>{product.name}</h1>
          <p className="text-white" style={{ fontSize: '1.1rem', opacity: 0.9 }}>{product.tagline}</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
            {/* Image */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px' }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '320px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display='none'; }}
              />
            </div>
            {/* Info */}
            <div>
              <h2 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>{product.name}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '25px' }}>{product.description}</p>
              {product.highlights && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                  {product.highlights.map((h, i) => (
                    <span key={i} style={{ background: 'var(--primary-color)', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>{h}</span>
                  ))}
                </div>
              )}
              <Link href="/contacto" className="btn-primary" style={{ border: 'none' }}>
                <span>Solicitar Cotización</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      {product.specs && (
        <section className="section-padding">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <h2 className="section-title">Especificaciones Técnicas</h2>
            <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              {product.specs.map((group, gi) => (
                <div key={gi}>
                  <div style={{ background: 'var(--primary-color)', color: '#fff', padding: '12px 25px', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' }}>{group.category}</div>
                  {group.items.map((item, ii) => (
                    <div key={ii} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0', padding: '12px 25px', fontSize: '0.95rem' }}>
                      <span style={{ width: '40%', fontWeight: '600', color: 'var(--primary-color)' }}>{item.label}</span>
                      <span style={{ width: '60%', color: 'var(--text-muted)' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {product.features && (
        <section className="section-padding bg-light">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <h2 className="section-title">Características Principales</h2>
            <div className="grid-3" style={{ gap: '25px' }}>
              {product.features.map((f, i) => (
                <div key={i} className="card" style={{ padding: '30px', textAlign: 'left' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{f.icon}</div>
                  <h4 style={{ marginBottom: '10px' }}>{f.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--primary-color)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '15px' }}>¿Interesado en el {product.name}?</h2>
          <p style={{ color: '#a9b5c5', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>Contáctenos para obtener precios, disponibilidad y asesoría técnica personalizada.</p>
          <Link href="/contacto" className="btn-secondary"><span>Solicitar Información</span></Link>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          section.section-padding .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
