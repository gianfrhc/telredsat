import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Teltonika FMC234 | Telredsat' };
const product = {
  name: "Teltonika FMC234",
  tagline: "Rastreador GPS IP67 resistente al agua con batería de respaldo",
  image: "/productos/teltonika-fmc234.webp",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Teltonika FMC234 es un rastreador 4G LTE Cat 1 con certificación IP67 diseñado para soportar condiciones extremas. Con batería de respaldo de 1000 mAh (hasta 8 días), 3 entradas digitales, 2 analógicas, 3 salidas digitales y soporte Bluetooth 4.0 LE, es ideal para construcción, remolques, seguros telemáticos y recuperación de vehículos robados.",
  highlights: ["IP67", "4G LTE Cat 1", "1000mAh Backup", "8 Días Autónomos", "Bluetooth 4.0", "3 DIN / 3 DOUT"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "70.5 × 67.0 × 25.6 mm (85mm con conector)" },
      { label: "Peso", value: "91.8 g" },
      { label: "Protección", value: "IP67 (sumergible)" },
      { label: "Memoria", value: "128 MB flash interna" }
    ]},
    { category: "Conectividad", items: [
      { label: "Celular", value: "4G LTE Cat 1 con fallback 2G" },
      { label: "GNSS", value: "GPS, GLONASS, Galileo, BeiDou, QZSS, AGPS" },
      { label: "Bluetooth", value: "4.0 + LE" }
    ]},
    { category: "Interfaces", items: [
      { label: "Entradas Digitales", value: "3 (1 negativa)" },
      { label: "Entradas Analógicas", value: "2" },
      { label: "Entradas Impulso", value: "2 (para medidores de flujo de combustible)" },
      { label: "Salidas Digitales", value: "3" },
      { label: "Otros", value: "1-Wire, Micro-USB, soporte adaptador CAN" }
    ]},
    { category: "Alimentación", items: [
      { label: "Voltaje", value: "10 – 30V DC" },
      { label: "Batería Backup", value: "1000 mAh Li-Polymer (hasta 8 días)" }
    ]}
  ],
  features: [
    { icon: "🌊", title: "IP67 Sumergible", text: "Carcasa sellada resistente a polvo total e inmersión en agua. Cierre tipo click de dos fases." },
    { icon: "🔋", title: "8 Días de Backup", text: "Batería de 1000 mAh permite hasta 8 días de operación autónoma sin alimentación externa." },
    { icon: "⛽", title: "Medición de Combustible", text: "Entradas de impulso para medidores de flujo de combustible con alta precisión." },
    { icon: "🚨", title: "Crash Detection", text: "Acelerómetro integrado para detección de choques, remolque no autorizado y conducción agresiva." },
    { icon: "🔧", title: "Uso Industrial", text: "Ideal para maquinaria de construcción, remolques, contenedores y vehículos expuestos a clima severo." },
    { icon: "📡", title: "Sensores BLE", text: "Conectividad Bluetooth para sensores de temperatura, humedad, OBDII y lectores de códigos de barras." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
