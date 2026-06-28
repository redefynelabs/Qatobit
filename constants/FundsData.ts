export interface Fund {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  shortDesc: string;
  assetsImg: string;
  assetCounts: string;
  cagr: number; // annual %
  allocation: { label: string; color: string; pct: number }[];
}

export const funds: Fund[] = [
  {
    id: "qsi-growth",
    title: "QSI Growth",
    badge: "Flagship",
    badgeColor: "orange",
    desc: "Five assets, four jobs. Core, upside, buffer, and a reserve earning inside the index",
    shortDesc: "Crypto upside. Managed downside.",
    assetsImg: "/assets/Home/Coverage/bitcoin.png",
    assetCounts: "4 assets",
    cagr: 53.3,
    allocation: [
      { label: "Equity", color: "#F59E0B", pct: 40 },
      { label: "Bonds", color: "#6366F1", pct: 30 },
      { label: "Gold", color: "#10B981", pct: 20 },
      { label: "Cash", color: "#38BDF8", pct: 10 },
    ],
  },
  {
    id: "qsi-core",
    title: "QSI Core",
    badge: "Conservative",
    badgeColor: "blue",
    desc: "Meaningful crypto exposure without full crypto volatility. The Gold buffer is the mechanism",
    shortDesc: "Stable crypto exposure with downside buffer.",
    assetsImg: "/assets/Home/Coverage/bitcoin.png",
    assetCounts: "4 assets",
    cagr: 37.5,
    allocation: [
      { label: "Equity", color: "#F59E0B", pct: 30 },
      { label: "Bonds", color: "#6366F1", pct: 40 },
      { label: "Gold", color: "#10B981", pct: 20 },
      { label: "Cash", color: "#38BDF8", pct: 10 },
    ],
  },
  {
    id: "qsi-vrion",
    title: "QSI VRION",
    badge: "Full conviction",
    badgeColor: "blue",
    desc: "Pure crypto, by deliberate decision. No buffer. For conviction with a five-year horizon",
    shortDesc: "Full crypto, no compromise.",
    assetsImg: "/assets/Home/Coverage/bitcoin.png",
    assetCounts: "4 assets",
    cagr: 68.8,
    allocation: [
      { label: "Equity", color: "#F59E0B", pct: 70 },
      { label: "Bonds", color: "#6366F1", pct: 10 },
      { label: "Gold", color: "#10B981", pct: 10 },
      { label: "Cash", color: "#38BDF8", pct: 10 },
    ],
  },
  {
    id: "qsi-geq8",
    title: "QSI GEQ8",
    badge: "Balanced",
    badgeColor: "blue",
    desc: "Apple to Coinbase, in one tokenized index. The digital economy, held on crypto rails",
    shortDesc: "Digital economy in one index.",
    assetsImg: "/assets/Home/Coverage/apple.png",
    assetCounts: "4 assets",
    cagr: 29.7,
    allocation: [
      { label: "Equity", color: "#F59E0B", pct: 35 },
      { label: "Bonds", color: "#6366F1", pct: 25 },
      { label: "Gold", color: "#10B981", pct: 25 },
      { label: "Cash", color: "#38BDF8", pct: 15 },
    ],
  },
];

export const compareOptions = [
  { id: "qsi-core", label: "QSI CORE", color: "#FF6100" },
  { id: "bitcoin", label: "Bitcoin", color: "#F7931A", icon: "₿" },
  { id: "nifty50", label: "Nifty 50", color: "#6366F1", icon: "N" },
  { id: "nasdaq", label: "NASDAQ 100", color: "#10B981", icon: "N" },
  { id: "gold", label: "GOLD", color: "#F59E0B", icon: "G" },
];
