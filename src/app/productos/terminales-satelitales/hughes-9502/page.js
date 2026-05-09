import ProductDetail from '@/components/ProductDetail';
export const metadata = { title: 'Hughes 9502 BGAN M2M | Telredsat' };
const product = {
  name: "Hughes 9502 BGAN M2M",
  tagline: "Terminal especializado para conexiones Machine-to-Machine permanentes vía Inmarsat",
  image: "https://ts2.store/1517-large_default/hughes-9502-bgan-m2m-terminal.jpg",
  banner: "/internet_banner_ai_1775921647345.png",
  description: "El Hughes 9502 es el terminal definitivo para conexiones Inmarsat Machine-to-Machine (M2M) permanentes. Diseñado específicamente para control SCADA, monitoreo de oleoductos, telemetría industrial y backhaul de datos en ubicaciones remotas fijas donde no existe infraestructura terrestre. Ofrece conectividad BGAN always-on con IP estática.",
  highlights: ["BGAN M2M", "Always-On", "IP Estática", "SCADA", "Telemetría Industrial", "Montaje Fijo"],
  specs: [
    { category: "Conectividad", items: [
      { label: "Red", value: "Inmarsat BGAN M2M" },
      { label: "Modo", value: "Always-On (conexión permanente)" },
      { label: "IP", value: "Estática (acceso remoto directo)" },
      { label: "Interfaces", value: "Ethernet RJ-45, RS-232 Serial" }
    ]},
    { category: "Diseño", items: [
      { label: "Instalación", value: "Montaje fijo (outdoor)" },
      { label: "Antena", value: "Separada, direccional de alto rendimiento" },
      { label: "Uso", value: "Aplicaciones industriales M2M sin supervisión" }
    ]}
  ],
  features: [
    { icon: "🏭", title: "SCADA Remoto", text: "Control y monitoreo supervisorio de sistemas industriales en ubicaciones sin infraestructura de telecomunicaciones." },
    { icon: "🛢️", title: "Oleoductos y Pozos", text: "Telemetría continua de presión, flujo, temperatura y alertas desde pozos y ductos remotos." },
    { icon: "🔄", title: "Always-On", text: "Conexión permanente BGAN que no requiere activación manual. Ideal para sistemas autónomos." },
    { icon: "🌐", title: "IP Estática", text: "Dirección IP fija que permite acceso remoto directo al equipo para configuración y diagnóstico." },
    { icon: "⚡", title: "Sin Supervisión", text: "Diseñado para operar de forma completamente autónoma durante meses sin intervención humana." },
    { icon: "📊", title: "Backhaul de Datos", text: "Enlace de datos satelital para estaciones meteorológicas, sensores ambientales y redes de monitoreo." }
  ]
};
export default function Page() { return <ProductDetail product={product} />; }
