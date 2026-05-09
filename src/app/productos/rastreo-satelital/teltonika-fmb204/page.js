import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Teltonika FMB204 | Telredsat' };
const product = {
  name: "Teltonika FMB204",
  tagline: "Rastreador GPS IP67 con batería de larga duración para uso rudo",
  image: "/productos/teltonika-fmb204.webp",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Teltonika FMB204 es un rastreador GNSS profesional con certificación IP67, batería interna de 1800 mAh y conectividad 2G/Bluetooth 4.0 LE. Diseñado para aplicaciones exigentes como agricultura, transporte refrigerado, remolques, motos y embarcaciones donde la resistencia al agua y la autonomía son críticas.",
  highlights: ["IP67", "2G/GSM", "1800mAh Batería", "Bluetooth 4.0", "205g", "-40°C a +85°C"],
  specs: [
    { category: "Físicas", items: [
      { label: "Dimensiones", value: "72.5 × 73 × 27.3 mm" },
      { label: "Peso", value: "205 g" },
      { label: "Protección", value: "IP67 (polvo y sumersión)" },
      { label: "Temp. Operación", value: "-40°C a +85°C (sin batería)" },
      { label: "Memoria", value: "128 MB flash interna" }
    ]},
    { category: "Conectividad", items: [
      { label: "Celular", value: "2G (GSM/GPRS)" },
      { label: "GNSS", value: "GPS, GLONASS, Galileo, BeiDou, SBAS, QZSS (33 canales)" },
      { label: "Bluetooth", value: "4.0 + LE" },
      { label: "SIM", value: "Micro-SIM o eSIM" }
    ]},
    { category: "Interfaces", items: [
      { label: "Entradas Digitales", value: "3" },
      { label: "Salidas Digitales", value: "2" },
      { label: "Entrada Analógica", value: "1" },
      { label: "1-Wire", value: "Datos y alimentación" },
      { label: "USB", value: "Micro-USB 2.0" }
    ]},
    { category: "Alimentación", items: [
      { label: "Voltaje", value: "6 – 30V DC" },
      { label: "Batería Interna", value: "1800 mAh Li-Ion" }
    ]}
  ],
  features: [
    { icon: "🌊", title: "IP67 Profesional", text: "Totalmente sellado contra polvo y agua. Resiste inmersión y condiciones climáticas severas." },
    { icon: "🔋", title: "Batería 1800 mAh", text: "Batería interna de larga duración para operación autónoma prolongada durante cortes de energía." },
    { icon: "🌡️", title: "-40°C a +85°C", text: "Rango de temperatura operativa extremo. Ideal para agricultura, logística refrigerada y climas severos." },
    { icon: "🚜", title: "Uso Agrícola", text: "Perfecto para tractores, cosechadoras y maquinaria agrícola expuesta a polvo, agua y vibraciones." },
    { icon: "🛥️", title: "Transporte Acuático", text: "Diseñado también para embarcaciones y transporte marítimo gracias a su sellado IP67." },
    { icon: "🔗", title: "Sensores BLE", text: "Bluetooth LE para sensores de temperatura, humedad, OBDII, headsets y beacons." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
