import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Explorer 710 BGAN | Telredsat' };
const product = {
  name: "Explorer 710 Terminal BGAN",
  tagline: "Terminal BGAN Clase 1 de ultra alta velocidad para broadcasting y operaciones intensivas",
  image: "https://ts2.store/1482-large_default/cobham-explorer-710.jpg",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Cobham Explorer 710 es un terminal BGAN Clase 1 de alta velocidad diseñado para transmisiones en vivo (broadcasting), despliegues militares y operaciones mineras intensivas. Con velocidades de hasta 492 kbps en streaming y conectividad WiFi/Ethernet, permite video en tiempo real, VPN corporativa y comunicaciones de voz simultáneas desde cualquier ubicación remota.",
  highlights: ["Clase 1 BGAN", "492 kbps Streaming", "WiFi + Ethernet", "IP66", "Broadcasting", "Voz + Datos"],
  specs: [
    { category: "Físicas", items: [
      { label: "Peso", value: "3.5 kg aprox." },
      { label: "Protección", value: "IP66" },
      { label: "Diseño", value: "Antena plana de alto rendimiento con apuntado asistido" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Inmarsat BGAN Clase 1" },
      { label: "Velocidad Estándar", value: "Hasta 492 kbps (streaming)" },
      { label: "WiFi", value: "Hotspot integrado" },
      { label: "Ethernet", value: "Puerto RJ-45" },
      { label: "Voz", value: "Múltiples llamadas de voz simultáneas" }
    ]}
  ],
  features: [
    { icon: "📺", title: "Broadcasting en Vivo", text: "Velocidad de streaming hasta 492 kbps para transmisión de video en tiempo real desde campo." },
    { icon: "🏗️", title: "Operaciones Intensivas", text: "Diseñado para minería, petróleo y despliegues militares con alto volumen de datos." },
    { icon: "🔌", title: "WiFi + Ethernet", text: "Conexión simultánea vía WiFi y Ethernet para múltiples dispositivos y redes LAN." },
    { icon: "🎤", title: "Voz Simultánea", text: "Múltiples llamadas de voz concurrentes mientras se transmiten datos." },
    { icon: "🌧️", title: "IP66 Todo Terreno", text: "Resistente a polvo y chorros de agua para uso en condiciones climáticas severas." },
    { icon: "🎯", title: "Apuntado Asistido", text: "Sistema de apuntado al satélite con indicador visual y sonoro para configuración rápida." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
