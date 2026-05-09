import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Teltonika FMC920 | Telredsat' };
const product = {
  name: "Teltonika FMC920",
  tagline: "Rastreador GPS 4G LTE Cat 1 ultracompacto para flotas",
  image: "/productos/teltonika-fmc920.webp",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Teltonika FMC920 es el rastreador GPS más vendido de la línea Teltonika. Ultracompacto (79 × 43 × 12 mm) y con conectividad 4G LTE Cat 1 con fallback 2G, es ideal para la gestión básica de flotas de vehículos ligeros. Incluye acelerómetro para detección de conducción agresiva, Bluetooth 4.0 para sensores externos y 128 MB de memoria interna.",
  highlights: ["4G LTE Cat 1", "IP54", "Bluetooth 4.0", "Acelerómetro", "54g", "FOTA"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "79 × 43 × 12 mm" },
      { label: "Peso", value: "54 g" },
      { label: "Protección", value: "IP54" },
      { label: "Memoria", value: "128 MB flash interna" }
    ]},
    { category: "Conectividad", items: [
      { label: "Celular", value: "4G LTE Cat 1 con fallback 2G (GSM)" },
      { label: "GNSS", value: "GPS, GLONASS, Galileo, BeiDou, SBAS, QZSS" },
      { label: "Bluetooth", value: "4.0 + LE" },
      { label: "SIM", value: "Micro-SIM" }
    ]},
    { category: "Interfaces", items: [
      { label: "Entradas Digitales", value: "1" },
      { label: "Salidas Digitales", value: "1 (inmovilizador remoto)" },
      { label: "Entrada Analógica", value: "1" },
      { label: "USB", value: "Micro-USB 2.0" }
    ]},
    { category: "Alimentación", items: [
      { label: "Voltaje", value: "10 – 30V DC" },
      { label: "Batería Backup", value: "Integrada (reporte durante corte de energía)" }
    ]}
  ],
  features: [
    { icon: "📦", title: "Ultra Compacto", text: "Con solo 54g y 12mm de altura, se instala discretamente en cualquier vehículo en minutos." },
    { icon: "🚗", title: "Green Driving", text: "Monitoreo de conducción agresiva: frenado brusco, aceleración y curvas bruscas con acelerómetro integrado." },
    { icon: "📡", title: "4G LTE", text: "Conectividad LTE Cat 1 de alta velocidad con fallback automático a 2G para cobertura máxima." },
    { icon: "🌡️", title: "Sensores BLE", text: "Bluetooth 4.0 LE para conectar sensores de temperatura, humedad, nivel de líquido y más." },
    { icon: "🔄", title: "FOTA", text: "Actualización de firmware Over-The-Air sin necesidad de acceso físico al dispositivo." },
    { icon: "⛽", title: "Fuel Counter", text: "Contador de combustible GNSS, detección de ralentí excesivo y eventos de desconexión." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
