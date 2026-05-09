import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Iridium GO! | Telredsat' };
const product = {
  name: "Iridium GO!",
  tagline: "Punto de acceso WiFi satelital para su smartphone",
  image: "https://ts2.store/1042-large_default/iridium-go.jpg",
  banner: "/telefonia_banner_ai_1775921573551.png",
  description: "El Iridium GO! convierte su propio smartphone Apple o Android en un dispositivo de comunicación global a través de la red Iridium. Crea un punto de acceso WiFi satelital que permite realizar llamadas, enviar SMS, emails y acceder a datos básicos desde cualquier lugar del planeta con apps dedicadas.",
  highlights: ["WiFi Hotspot Sat", "iOS/Android", "MIL-STD 810F", "IP65", "5 Dispositivos", "SOS GPS"],
  specs: [
    { category: "Físicas", items: [
      { label: "Peso", value: "285 g" },
      { label: "Protección", value: "IP65, MIL-STD 810F" },
      { label: "Temp. Operación", value: "-10°C a +55°C" }
    ]},
    { category: "Conectividad", items: [
      { label: "Red", value: "Iridium (66 satélites LEO, cobertura 100% global)" },
      { label: "WiFi", value: "Hotspot para hasta 5 dispositivos simultáneos" },
      { label: "Compatibilidad", value: "iOS y Android vía Iridium GO! App" },
      { label: "Servicios", value: "Voz, SMS, Email, SOS, datos básicos" }
    ]},
    { category: "Batería", items: [
      { label: "Conversación", value: "Hasta 5.5 horas" },
      { label: "Standby", value: "Hasta 15 horas" }
    ]}
  ],
  features: [
    { icon: "📱", title: "Use Su Propio Teléfono", text: "No necesita un teléfono satelital dedicado. Use su iPhone o Android con la app Iridium GO!" },
    { icon: "📶", title: "WiFi para 5 Dispositivos", text: "Hotspot WiFi que conecta hasta 5 smartphones o tablets simultáneamente." },
    { icon: "🌍", title: "100% Cobertura Global", text: "Red Iridium con cobertura real en todo el planeta, incluyendo océanos y polos." },
    { icon: "⚔️", title: "Grado Militar", text: "MIL-STD 810F e IP65: resistente a golpes, polvo, agua y temperaturas extremas." },
    { icon: "🆘", title: "SOS con GPS", text: "Botón de emergencia que envía posición GPS precisa a contactos de rescate." },
    { icon: "📧", title: "Email y Redes", text: "Envíe emails, publique en redes sociales y comparta ubicación desde zonas sin cobertura." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
