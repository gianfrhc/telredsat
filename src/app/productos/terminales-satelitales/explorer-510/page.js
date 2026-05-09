import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Explorer 510 BGAN | Telredsat' };
const product = {
  name: "Explorer 510 Terminal BGAN",
  tagline: "El terminal BGAN más portátil del mercado con WiFi integrado",
  image: "https://shop.apollosat.com/cdn/shop/files/Cobham_Explorer_510.jpg?v=1687353974",
  banner: "/mineria_banner_ai_1775921440140.png",
  description: "El Cobham Explorer 510 es el terminal BGAN más compacto y ligero del mercado. Con certificación IP66, WiFi integrado y velocidades de hasta 464 kbps, permite desplegar una oficina remota completa en minutos. Ideal para equipos de trabajo en campamentos, emergencias, expediciones y operaciones mineras donde se necesita Internet y voz satelital simultánea.",
  highlights: ["IP66", "WiFi Integrado", "464 kbps", "BGAN Inmarsat", "1.4 kg", "Voz + Datos"],
  specs: [
    { category: "Físicas", items: [
      { label: "Peso", value: "1.4 kg aprox." },
      { label: "Protección", value: "IP66" },
      { label: "Diseño", value: "Ultracompacto, antena plana integrada" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red Satelital", value: "Inmarsat BGAN" },
      { label: "Velocidad", value: "Hasta 464 kbps" },
      { label: "WiFi", value: "Hotspot integrado (múltiples dispositivos)" },
      { label: "Voz", value: "Llamadas de voz simultáneas con datos" }
    ]}
  ],
  features: [
    { icon: "📶", title: "WiFi Hotspot", text: "Conecte múltiples laptops, tablets y smartphones simultáneamente vía WiFi." },
    { icon: "🏔️", title: "Ultra Portátil", text: "Solo 1.4 kg. Llévelo en su mochila y despliegue conectividad en cualquier lugar." },
    { icon: "💻", title: "Oficina Remota", text: "Internet y voz simultáneos para email, videollamadas, VPN corporativa y más." },
    { icon: "🌧️", title: "IP66 Resistente", text: "Protegido contra polvo y chorros de agua potentes para uso en condiciones adversas." },
    { icon: "⚡", title: "Setup Rápido", text: "Despliegue en minutos: apunte al satélite, conecte y trabaje." },
    { icon: "🌍", title: "Cobertura BGAN", text: "Red Inmarsat con cobertura global excepto polos extremos." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
