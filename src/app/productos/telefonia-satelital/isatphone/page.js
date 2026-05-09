import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'IsatPhone 2 | Telredsat' };
const product = {
  name: "IsatPhone 2",
  tagline: "Teléfono satelital robusto de cobertura global Inmarsat",
  image: "/productos/isatphone2.webp",
  banner: "/telefonia_banner_ai_1775921573551.png",
  description: "El Inmarsat IsatPhone 2 es un teléfono satelital de alto rendimiento diseñado para operar en los entornos más hostiles del planeta. Con certificación IP65, resistencia a golpes IK04 y una batería que ofrece hasta 8 horas de conversación, es la elección de empresas mineras, petroleras y de seguridad que necesitan comunicación fiable donde no hay cobertura celular.",
  highlights: ["IP65", "8h Conversación", "160h Standby", "Botón SOS", "Bluetooth 2.0", "GPS Integrado"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "169 × 75 × 36 mm (con antena)" },
      { label: "Peso", value: "318 g (con batería)" },
      { label: "Protección", value: "IP65 (polvo y salpicaduras), IK04 (golpes)" },
      { label: "Temp. Operación", value: "-20°C a +55°C" }
    ]},
    { category: "Batería", items: [
      { label: "Tipo", value: "Li-Ion 3.7V / 3300 mAh" },
      { label: "Conversación", value: "Hasta 8 horas" },
      { label: "Standby", value: "Hasta 160 horas" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Inmarsat-4 (cobertura global excepto polos)" },
      { label: "Bluetooth", value: "2.0" },
      { label: "USB", value: "Micro USB" },
      { label: "Audio", value: "Jack 3.5mm" }
    ]},
    { category: "Funciones", items: [
      { label: "SOS", value: "Botón de emergencia dedicado y protegido" },
      { label: "GPS", value: "Compartir ubicación por SMS o email" },
      { label: "Llamada rápida", value: "Listo para llamar en < 45 segundos" },
      { label: "Pantalla", value: "Transflectiva de alto contraste, legible bajo luz solar" }
    ]}
  ],
  features: [
    { icon: "🛡️", title: "Resistencia Extrema", text: "Certificación IP65 contra polvo y agua, resistencia IK04 a impactos. Rango de operación de -20°C a +55°C." },
    { icon: "📡", title: "Cobertura Global", text: "Opera sobre la red Inmarsat-4 con cobertura en más de 160 países, incluyendo zonas marítimas y remotas." },
    { icon: "🆘", title: "Botón SOS Dedicado", text: "Botón de emergencia protegido que envía su posición GPS automáticamente al centro de control configurado." },
    { icon: "🔋", title: "Gran Autonomía", text: "Hasta 8 horas de conversación continua y 160 horas en standby. Ideal para jornadas extensas sin acceso a carga." },
    { icon: "📍", title: "Rastreo GPS", text: "Comparta su ubicación en tiempo real mediante SMS o correo electrónico directamente desde el teléfono." },
    { icon: "📱", title: "Conectividad Bluetooth", text: "Empárejelo con auriculares y dispositivos manos libres Bluetooth 2.0 para mayor comodidad en campo." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
