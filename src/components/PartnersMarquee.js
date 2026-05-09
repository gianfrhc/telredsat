"use client";

export default function PartnersMarquee({ partners }) {
  // Duplicate twice for seamless infinite loop
  const track = [...partners, ...partners];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {track.map((partner, i) => (
          <div key={i} className="marquee-item">
            <img
              src={`/partners/${partner}`}
              alt={partner.replace(/logo |\.svg|\.png/g, '').trim()}
              className="partner-logo"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
