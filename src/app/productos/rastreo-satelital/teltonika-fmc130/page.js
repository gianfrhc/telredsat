import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Teltonika FMC130 | Telredsat' };
const product = {
  name: "Teltonika FMC130",
  tagline: "Terminal avanzado LTE Cat 1 con lectura CAN y entradas flexibles",
  image: "/productos/teltonika-fmc130.webp",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Teltonika FMC130 es un terminal compacto de rastreo LTE Cat 1 diseñado para aplicaciones de gestión de flotas avanzada. Con soporte para lectura de datos CAN bus (LVCAN), entrada negativa, entradas de impulso para medidores de combustible y conectividad Bluetooth 4.0 LE, es la solución flexible para flotas automotrices, agrícolas y maquinaria especializada.",
  highlights: ["LTE Cat 1", "CAN Bus", "Entrada Negativa", "Impulse Input", "Bluetooth 4.0", "55g"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "65 × 56.6 × 20.6 mm" },
      { label: "Peso", value: "55 g" },
      { label: "Batería Backup", value: "170 mAh Li-Ion 3.7V" },
      { label: "Memoria", value: "128 MB flash interna" }
    ]},
    { category: "Conectividad", items: [
      { label: "Celular", value: "LTE Cat 1 / 3G (UMTS) / 2G (GSM)" },
      { label: "GNSS", value: "GPS, GLONASS, Galileo, BeiDou, QZSS, AGPS (33 canales)" },
      { label: "Bluetooth", value: "4.0 + LE" },
      { label: "Sensibilidad", value: "-165 dBM tracking" }
    ]},
    { category: "Interfaces", items: [
      { label: "Entradas Digitales/Analógicas", value: "Configurables (digital, analógica, negativa)" },
      { label: "Entradas Impulso", value: "Para medidores de flujo de combustible" },
      { label: "Salidas Digitales", value: "3 (inmovilizador, buzzer, alarma)" },
      { label: "CAN Bus", value: "Lectura LVCAN (combustible, RPM, odómetro)" },
      { label: "1-Wire", value: "Sensores de temperatura, iButton" },
      { label: "USB", value: "Micro-USB 2.0" }
    ]},
    { category: "Alimentación", items: [
      { label: "Voltaje", value: "10 – 30V DC" },
      { label: "Temp. Operación", value: "-20°C a +85°C (sin batería)" }
    ]}
  ],
  features: [
    { icon: "🚌", title: "CAN Bus Integrado", text: "Lectura directa de datos del vehículo: combustible, RPM, odómetro y más vía protocolo LVCAN." },
    { icon: "⛽", title: "Impulse Input", text: "Medición precisa de consumo de combustible mediante sensores de flujo conectados directamente." },
    { icon: "🔌", title: "Entrada Negativa", text: "Simplifica instalación de sensores de puerta, cinturón de seguridad y accesorios sin cables extra." },
    { icon: "📦", title: "Ultra Compacto", text: "Solo 55g y 65mm. Se instala discretamente bajo el tablero de cualquier vehículo." },
    { icon: "🌡️", title: "Rango Amplio", text: "Opera de -20°C a +85°C, soportando condiciones industriales y agrícolas extremas." },
    { icon: "🔄", title: "Triple Fallback", text: "LTE Cat 1 → 3G → 2G automático, garantizando conectividad en áreas con cobertura limitada." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
