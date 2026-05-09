import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Iridium Extreme PTT | Telredsat' };
const product = {
  name: "Iridium Extreme PTT",
  tagline: "Radio satelital Push-To-Talk de grado militar con cobertura global",
  image: "/productos/iridium_ptt.webp",
  banner: "/telefonia_banner_ai_1775921573551.png",
  description: "El Iridium Extreme PTT es el estándar de oro en comunicaciones de misión crítica. Combina la potencia de un teléfono satelital Iridium con la capacidad de radio global Push-To-Talk, permitiendo comunicación uno-a-muchos instantánea en cualquier lugar del planeta. Con encriptación AES-256 y certificación MIL-STD 810F.",
  highlights: ["MIL-STD 810F", "IP65", "AES-256", "Push-To-Talk Global", "Botón SOS", "GPS"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "140 × 60 × 32 mm" },
      { label: "Peso", value: "268 g" },
      { label: "Protección", value: "IP65, MIL-STD 810F (grado militar)" },
      { label: "Temp. Operación", value: "-10°C a +55°C" }
    ]},
    { category: "Batería", items: [
      { label: "Standby (Teléfono)", value: "Hasta 54 horas" },
      { label: "Conversación (Teléfono)", value: "Hasta 6.5 horas" },
      { label: "Standby (PTT)", value: "Hasta 16.5 horas" },
      { label: "Conversación (PTT)", value: "Hasta 5 horas" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Iridium (66 satélites LEO, cobertura 100% global)" },
      { label: "Modo Dual", value: "Teléfono Satelital + Radio PTT" },
      { label: "USB", value: "Mini-USB" },
      { label: "Audio", value: "Jack 2.5mm" }
    ]},
    { category: "Seguridad", items: [
      { label: "Encriptación", value: "AES-256" },
      { label: "SOS", value: "Botón dedicado programable con GPS" },
      { label: "Talkgroups", value: "Grupos configurables vía Iridium PTT Command Center" }
    ]}
  ],
  features: [
    { icon: "📻", title: "Push-To-Talk Global", text: "Comunicación uno-a-muchos instantánea con talkgroups configurables. Ideal para coordinación de equipos dispersos." },
    { icon: "🔒", title: "Encriptación AES-256", text: "Comunicaciones completamente seguras con encriptación de grado militar para información sensible." },
    { icon: "🌍", title: "Cobertura 100% Global", text: "66 satélites LEO de Iridium proporcionan cobertura en cada punto del planeta, incluyendo ambos polos." },
    { icon: "⚔️", title: "Grado Militar", text: "Certificación MIL-STD 810F: resistente a caídas, vibraciones, temperaturas extremas, polvo y agua." },
    { icon: "🔊", title: "Audio de Alta Potencia", text: "Altavoz integrado de alta potencia diseñado para entornos ruidosos como plataformas petroleras y minas." },
    { icon: "🆘", title: "Emergencia SOS", text: "Botón de emergencia dedicado que transmite posición GPS al centro de control configurado." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
