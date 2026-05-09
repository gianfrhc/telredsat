import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'IC-SAT 100 | Telredsat' };
const product = {
  name: "Icom IC-SAT 100",
  tagline: "Radio bidireccional satelital Push-To-Talk vía red Iridium",
  image: "/productos/ic-sat-100.webp",
  banner: "/telefonia_banner_ai_1775921573551.png",
  description: "El Icom IC-SAT 100 es una radio satelital PTT profesional que utiliza los 66 satélites LEO de la red Iridium para comunicación uno-a-muchos instantánea en cualquier lugar del mundo. Con certificación IP67, grado militar MIL-STD 810G, encriptación AES-256 y 1500 mW de potencia de audio, es la herramienta definitiva para coordinación de equipos en entornos hostiles.",
  highlights: ["IP67", "MIL-STD 810G", "AES-256", "1500mW Audio", "Bluetooth", "GPS"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "57.8 × 135 × 32.8 mm" },
      { label: "Peso", value: "360 g (con batería BP-300 y antena)" },
      { label: "Protección", value: "IP67, MIL-STD 810G" },
      { label: "Temp. Operación", value: "-30°C a +60°C" }
    ]},
    { category: "Batería y Audio", items: [
      { label: "Autonomía", value: "Aprox. 14.5 horas (ciclo 5:5:90)" },
      { label: "Potencia Audio", value: "1500 mW" },
      { label: "Batería", value: "BP-300 Li-Ion recargable" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Iridium (66 satélites LEO, cobertura global)" },
      { label: "Bluetooth", value: "Integrado para accesorios inalámbricos" },
      { label: "GPS", value: "Receptor integrado con tracking de posición" },
      { label: "Encriptación", value: "AES-256 bits" }
    ]},
    { category: "Funciones", items: [
      { label: "PTT", value: "Comunicación uno-a-muchos con talkgroups" },
      { label: "Emergencia", value: "Botón naranja dedicado en panel superior" },
      { label: "Grabación", value: "Función de grabación de voz integrada" },
      { label: "Interoperabilidad", value: "Compatible con VE-PG4 RoIP (IP, WLAN, LTE, radio convencional)" }
    ]}
  ],
  features: [
    { icon: "📻", title: "PTT Global Instantáneo", text: "Presione un botón y hable con todo su equipo en cualquier parte del mundo simultáneamente." },
    { icon: "🌊", title: "Sumergible IP67", text: "Certificado para inmersión en agua hasta 1 metro por 30 minutos. Ideal para operaciones marítimas y lluvia intensa." },
    { icon: "🔊", title: "Audio 1500 mW", text: "Potencia de audio excepcional para entornos ruidosos como maquinaria pesada, helicópteros y plataformas offshore." },
    { icon: "🔒", title: "Encriptación AES-256", text: "Comunicaciones seguras de grado militar para información sensible y operaciones de seguridad." },
    { icon: "🌡️", title: "Rango Extremo", text: "Opera desde -30°C hasta +60°C. Diseñado para las condiciones climáticas más severas." },
    { icon: "🔗", title: "Interoperable", text: "Con el gateway VE-PG4, se integra con redes IP, WiFi, LTE y radios convencionales analógicas/digitales." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
