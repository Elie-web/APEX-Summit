const UNS = (id, w = 500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const EVENT = {
  name: "MERIDIAN",
  year: "2026",
  tagline: "Le Forum Européen des Dirigeants",
  subtitle: "MERIDIAN réunit 1 200 fondateurs, dirigeants et investisseurs à Paris pour deux jours de stratégie, de capital et de rencontres qui comptent vraiment.",
  date: "18–19 Septembre 2026",
  targetDate: new Date("2026-09-18T09:00:00"),
  location: "Palais des Congrès, Paris",
  attendees: "1 200+",
  countries: "40+",
  speakers: 6,
  editions: 3,
  heroImage: UNS("1540575467063-178a50c2df87", 1920),
};

export const SPEAKERS = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Chief AI Strategy Officer",
    company: "Google DeepMind",
    tag: "Keynote",
    bio: "Ex-McKinsey. Auteure du bestseller \"The Intelligence Economy\". Conseillère de 12 gouvernements sur la stratégie IA.",
    topics: ["IA & Business", "Stratégie", "Innovation"],
    color: "#E84924",
    avatar: "SC",
    photo: UNS("1573496359142-b8d87734a5a2"),
  },
  {
    id: 2,
    name: "Marcus Webb",
    title: "Founder & CEO",
    company: "Nexora · €180M levés",
    tag: "Masterclass",
    bio: "3 exits réussis. Forbes 30 Under 30. A fait passer Nexora de 0 à €80M de revenus en 4 ans.",
    topics: ["Scale", "Fundraising", "Exits"],
    color: "#3B82F6",
    avatar: "MW",
    photo: UNS("1560250097-0b93528c311a"),
  },
  {
    id: 3,
    name: "Elena Vasquez",
    title: "Managing Partner",
    company: "Atomico · $4.2B AUM",
    tag: "Panel",
    bio: "A accompagné 23 licornes européennes. Ancienne fondatrice. Elle sait exactement ce que les VCs cherchent vraiment.",
    topics: ["Venture Capital", "Licornes", "Europe Tech"],
    color: "#10B981",
    avatar: "EV",
    photo: UNS("1580489944761-15a19d654956"),
  },
  {
    id: 4,
    name: "James Okafor",
    title: "Former CTO",
    company: "Stripe · conseiller 40+ startups",
    tag: "Fireside",
    bio: "A construit l'infrastructure technique de Stripe à l'échelle mondiale. Angel investor dans 40+ startups.",
    topics: ["Tech Leadership", "Architecture", "Investissement"],
    color: "#F5A500",
    avatar: "JO",
    photo: UNS("1506794778202-cad84cf45f1d"),
  },
  {
    id: 5,
    name: "Laila Benali",
    title: "#1 LinkedIn Top Voice",
    company: "500K+ professionnels touchés",
    tag: "Workshop",
    bio: "Speaker internationale. Son framework de personal branding a généré plus de €50M pour ses clients.",
    topics: ["Personal Brand", "Influence", "Acquisition"],
    color: "#EC4899",
    avatar: "LB",
    photo: UNS("1487412720507-e7ab37603c6f"),
  },
  {
    id: 6,
    name: "David Hartmann",
    title: "2× TED Speaker",
    company: "NY Times Bestseller",
    tag: "Closing",
    bio: "Auteur de \"Systems of Scale\". A aidé 300+ entreprises à passer à l'échelle sans sacrifier leur culture.",
    topics: ["Systèmes", "Leadership", "Culture"],
    color: "#8B5CF6",
    avatar: "DH",
    photo: UNS("1472099645785-5658abf4ff4e"),
  },
];

export const GALLERY = [
  { photo: UNS("1559223607-a43c990c692c", 900), label: "Salle plénière", wide: true },
  { photo: UNS("1505373877841-8d25f7d46678", 700), label: "Speaker sur scène" },
  { photo: UNS("1528605248644-14dd04022da1", 700), label: "Networking" },
  { photo: UNS("1515169067868-5387ec356754", 700), label: "Cocktail VIP" },
  { photo: UNS("1492684223066-81342ee5ff30", 900), label: "Ambiance cocktail", wide: true },
  { photo: UNS("1540575467063-178a50c2df87", 700), label: "Scène principale" },
];

export const AGENDA = [
  {
    day: "Jour 1",
    date: "18 Sept.",
    sessions: [
      { time: "09:00", title: "Keynote : \"The AI-First Business Model\"", speaker: "Sarah Chen", type: "keynote", duration: "75 min" },
      { time: "10:30", title: "Panel : \"Fundraising 2026 · Ce que les VCs veulent vraiment\"", speaker: "Elena Vasquez & James Okafor", type: "panel", duration: "60 min" },
      { time: "12:00", title: "Déjeuner Networking + VIP Roundtables", speaker: null, type: "networking", duration: "90 min" },
      { time: "14:00", title: "Masterclass : \"De €1M à €100M · Le playbook complet\"", speaker: "Marcus Webb", type: "masterclass", duration: "90 min" },
      { time: "16:00", title: "Fireside Chat : \"Le Personal Brand qui convertit\"", speaker: "Laila Benali", type: "fireside", duration: "60 min" },
      { time: "18:00", title: "Cocktail de réception · Networking libre", speaker: null, type: "social", duration: "120 min" },
    ]
  },
  {
    day: "Jour 2",
    date: "19 Sept.",
    sessions: [
      { time: "09:00", title: "Keynote : \"Les Systèmes qui Scalent\"", speaker: "David Hartmann", type: "keynote", duration: "75 min" },
      { time: "10:30", title: "Workshop : \"AI Tools qui vont 10x votre équipe\"", speaker: "Sarah Chen", type: "masterclass", duration: "90 min" },
      { time: "12:00", title: "Investor Speed Networking", speaker: null, type: "networking", duration: "60 min" },
      { time: "14:00", title: "\"The Exit Playbook\" · Session à huis clos", speaker: "Marcus Webb & James Okafor", type: "panel", duration: "90 min" },
      { time: "16:00", title: "Clôture : \"Ce que vous allez faire différemment dès lundi\"", speaker: "Tous les speakers", type: "keynote", duration: "60 min" },
      { time: "17:30", title: "Dîner VIP (tickets VIP & Entreprise uniquement)", speaker: null, type: "social", duration: "180 min" },
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Le meilleur investissement que j'ai fait pour mon business en 2024. J'ai closé un partenariat de €2M la semaine suivante.",
    name: "Théo Marchetti",
    title: "CEO, Lumira",
    photo: UNS("1507003211169-0a1dd7228f2d", 200),
    color: "#E84924",
    rating: 5,
  },
  {
    quote: "Le keynote de Sarah Chen a transformé ma vision de la stratégie IA. On a implémenté son framework en moins d'un mois.",
    name: "Amira Ndiaye",
    title: "COO, Flashpoint",
    photo: UNS("1494790108377-be9c29b29330", 200),
    color: "#3B82F6",
    rating: 5,
  },
  {
    quote: "La session networking investisseurs valait à elle seule 10× le prix du ticket. 3 meetings avec des VCs Tier-1 en une journée.",
    name: "Samuel Reyes",
    title: "Founder, Kravos",
    photo: UNS("1463453091185-61582044d556", 200),
    color: "#10B981",
    rating: 5,
  },
  {
    quote: "Marcus Webb donne des stratégies concrètes, pas du blabla théorique. Mon CA a augmenté de 40% dans les 6 mois suivants.",
    name: "Claire Fontaine",
    title: "Directrice Générale, NovaTech",
    photo: UNS("1573497019940-1c28c88b4f3e", 200),
    color: "#F5A500",
    rating: 5,
  },
  {
    quote: "J'ai trouvé mon futur CTO pendant le cocktail du premier soir. Je suis venu pour les speakers. Je repars avec une association.",
    name: "Romain Leclerc",
    title: "Founder & CEO, Orbis",
    photo: UNS("1519085360753-af0119f7cbe7", 200),
    color: "#8B5CF6",
    rating: 5,
  },
];

export const PRICING = [
  {
    id: "starter",
    name: "Standard",
    price: 497,
    oldPrice: 697,
    badge: null,
    description: "L'accès complet aux deux journées, aux sessions et à la communauté MERIDIAN.",
    features: [
      "Accès 2 jours complets",
      "6 keynotes & panels",
      "3 masterclasses",
      "Ressources digitales exclusives",
      "Application networking",
      "Replay des sessions (30 jours)",
    ],
    cta: "Réserver ma place",
    highlight: false,
  },
  {
    id: "vip",
    name: "VIP",
    price: 997,
    oldPrice: 1497,
    badge: "Le plus populaire",
    description: "Pour ceux qui viennent avec des objectifs de financement ou de partenariats. L'accès au réseau investisseur inclus.",
    features: [
      "Tout du ticket Standard",
      "Accès VIP Roundtables",
      "Session Investor Networking",
      "Dîner VIP le soir du 19 Sept.",
      "Siège prioritaire en salle",
      "Meet & Greet avec 2 speakers",
      "Replay illimité (12 mois)",
    ],
    cta: "Je veux le ticket VIP",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Entreprise",
    price: 2497,
    oldPrice: null,
    badge: "Places limitées",
    description: "Pour les équipes dirigeantes qui viennent en délégation avec des objectifs business précis.",
    features: [
      "Tout du ticket VIP",
      "3 places incluses (équipe)",
      "Session privée 1-on-1 avec un speaker",
      "Accès Early Bird aux replays",
      "Visibilité logo dans le programme",
      "Table dédiée au cocktail",
      "Support prioritaire",
    ],
    cta: "Contacter l'équipe",
    highlight: false,
  },
];

export const FAQS = [
  {
    q: "Pour qui est MERIDIAN ?",
    a: "MERIDIAN s'adresse aux fondateurs, CEO, directeurs et cadres dirigeants qui veulent scaler, accéder au deal flow investisseur, et construire des connexions stratégiques durables. Si votre prochain tour de table, partenariat ou recrutement clé dépend des bonnes rencontres, vous êtes à la bonne place."
  },
  {
    q: "Les sessions seront-elles disponibles en replay ?",
    a: "Oui. Ticket Standard : replay 30 jours. Ticket VIP et Entreprise : replay 12 mois illimité. Certaines sessions à huis clos ne seront pas disponibles en replay."
  },
  {
    q: "La conférence est-elle en français ou en anglais ?",
    a: "Les keynotes et panels sont en anglais avec traduction simultanée disponible (oreillettes incluses). Certains workshops sont animés directement en français."
  },
  {
    q: "Puis-je obtenir un remboursement ?",
    a: "Remboursement intégral jusqu'à 30 jours avant l'événement. Entre 30 et 7 jours : crédit valable sur la prochaine édition. Passé 7 jours : transfert de place possible."
  },
  {
    q: "Comment fonctionne le networking avec les investisseurs ?",
    a: "Les tickets VIP et Entreprise donnent accès à la session \"Investor Speed Networking\" avec des VCs et business angels présents sur invitation. Un matching par secteur et stade de développement est effectué en amont · vous n'arrivez pas les mains vides."
  },
  {
    q: "Y a-t-il des tarifs de groupe ?",
    a: "Oui · à partir de 5 places, contactez-nous pour des tarifs négociés. Le ticket Entreprise inclut déjà 3 places. Pour des groupes de 10+, nous construisons des formules sur-mesure."
  },
];

export const STATS = [
  { value: "1 200+", label: "Leaders présents", raw: 1200 },
  { value: "€120M+", label: "Deals closés", raw: 120 },
  { value: "40+", label: "Pays représentés", raw: 40 },
  { value: "97%", label: "Taux de satisfaction", raw: 97 },
];

export const LOGOS = [
  "LVMH", "Sequoia", "BNP Paribas", "Station F", "TF1", "Accor",
  "OVHcloud", "Criteo", "Doctolib", "Alan", "Contentsquare", "Mirakl"
];
