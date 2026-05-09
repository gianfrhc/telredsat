import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Iridium Extreme 9575 | Telredsat' };
const product = {
  name: "Iridium Extreme 9575",
  tagline: "Teléfono satelital ultrarresistente con GPS y SOS integrado",
  image: "/productos/iridium-9575-ts2.jpg",
  banner: "/telefonia_banner_ai_1775921573551.png",
  description: "El Iridium Extreme 9575 es el teléfono satelital más resistente del mercado, con certificación militar MIL-STD 810F. Ofrece cobertura global completa a través de los 66 satélites LEO de Iridium, GPS integrado, botón SOS programable y una construcción que soporta las condiciones más extremas del planeta.",
  highlights: ["MIL-STD 810F", "IP65", "GPS Integrado", "Botón SOS", "Cobertura Global 100%"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "140 × 60 × 27 mm" },
      { label: "Peso", value: "247 g" },
      { label: "Protección", value: "IP65, MIL-STD 810F" },
      { label: "Temp. Operación", value: "-10°C a +55°C" }
    ]},
    { category: "Batería Estándar (2300 mAh)", items: [
      { label: "Conversación", value: "Hasta 4 horas" },
      { label: "Standby", value: "Hasta 30 horas" }
    ]},
    { category: "Batería Alta Capacidad (3680 mAh)", items: [
      { label: "Conversación", value: "Hasta 6 horas" },
      { label: "Standby", value: "Hasta 43 horas" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Iridium (66 satélites LEO)" },
      { label: "Datos", value: "2.4 kbps (circuito conmutado)" },
      { label: "USB", value: "Mini-USB" },
      { label: "Audio", value: "Jack 2.5mm" }
    ]}
  ],
  features: [
    { icon: "⚔️", title: "Grado Militar", text: "Certificado MIL-STD 810F: caídas, vibraciones, arena, polvo, lluvia, humedad, inmersión y temperaturas extremas." },
    { icon: "🌍", title: "Cobertura Polo a Polo", text: "Único teléfono satelital con cobertura real en el 100% del globo, incluyendo rutas marítimas y regiones polares." },
    { icon: "🆘", title: "SOS Programable", text: "Botón de emergencia que envía coordenadas GPS a contactos preconfigurados o centros de emergencia GEOS." },
    { icon: "📍", title: "GPS Integrado", text: "Recepción GPS para compartir ubicación exacta vía SMS, email o emergencia SOS." },
    { icon: "🔋", title: "Batería Intercambiable", text: "Opción de batería estándar o de alta capacidad según necesidades de autonomía en campo." },
    { icon: "💧", title: "Diseño Diamond Treaded", text: "Agarre antideslizante patentado para uso con guantes o manos mojadas." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
