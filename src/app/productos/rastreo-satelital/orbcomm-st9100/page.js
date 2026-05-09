import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Orbcomm ST9100 | Telredsat' };
const product = {
  name: "Orbcomm ST9100",
  tagline: "Terminal IoT híbrido satelital/celular para monitoreo avanzado de activos",
  image: "/productos/orbcomm-st9100.webp",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Orbcomm ST9100 es un terminal de rastreo dual-mode que conmuta automáticamente entre redes celulares (4G LTE/3G/2G) y satelitales (IsatData Pro/OGx) para garantizar conectividad ininterrumpida. Programable en Lua, con batería de respaldo de 48+ horas y múltiples interfaces industriales (CAN bus, RS-232/485, I/O), es la solución preferida para transporte, energía, minería y operaciones marítimas.",
  highlights: ["Dual-Mode Sat/Cell", "4G LTE", "Bluetooth 5.0", "CAN Bus", "Lua Programable", "48h+ Backup"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "148 × 113 × 47 mm (181 mm con pies de montaje)" },
      { label: "Batería Backup", value: "Li-Ion 2000 mAh (48+ horas de reporte)" },
      { label: "Voltaje Entrada", value: "9 – 32V DC con protección de carga" }
    ]},
    { category: "Conectividad", items: [
      { label: "Celular", value: "4G LTE / 3G / 2G (conmutación automática)" },
      { label: "Satelital", value: "IsatData Pro / OGx (cobertura global bidireccional)" },
      { label: "GNSS", value: "GPS, GLONASS, BeiDou, Galileo" },
      { label: "Bluetooth", value: "5.0 (sensores inalámbricos y app técnica)" }
    ]},
    { category: "Interfaces", items: [
      { label: "Serial", value: "2× RS-232, 1× RS-485/J1708, 1-Wire" },
      { label: "CAN Bus", value: "2× CAN bus" },
      { label: "I/O", value: "4 entradas/salidas configurables (analógica/digital, 4-20mA)" },
      { label: "Sensores", value: "Acelerómetro 3 ejes integrado" }
    ]}
  ],
  features: [
    { icon: "🛰️", title: "Dual-Mode Inteligente", text: "Conmuta entre celular y satélite automáticamente según cobertura disponible, optimizando costos." },
    { icon: "⚙️", title: "Programable en Lua", text: "Framework Lua flexible para aplicaciones personalizadas y soporte de apps configurables de Orbcomm." },
    { icon: "🔌", title: "Interfaces Industriales", text: "CAN bus dual, RS-232/485, J1708 y 1-Wire para integración con cualquier sistema SCADA o telemático." },
    { icon: "🔋", title: "48+ Horas de Backup", text: "Batería Li-Ion de 2000 mAh que mantiene el reporte activo durante cortes prolongados de energía." },
    { icon: "📡", title: "Cobertura Sin Límites", text: "Comunicación bidireccional global vía satélite cuando las redes celulares no están disponibles." },
    { icon: "📊", title: "Kit de Desarrollo", text: "SDK disponible para desarrollo, prueba y despliegue rápido de soluciones IoT personalizadas." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
