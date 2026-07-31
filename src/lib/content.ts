export const site = {
  name: "Il Faro",
  legalName: "Il Faro di Ricci Marco",
  tagline: "Cucina di mare, Romagna nel cuore",
  description:
    "Ristorante a San Giuliano Mare, Rimini, a due passi dallo storico faro del porto canale. Cucina di mare e tradizione romagnola dal 1978.",
  founded: 1978,
  address: {
    line1: "Largo Boscovich 4",
    line2: "47921 San Giuliano Mare, Rimini (RN)",
    maps: "https://www.google.com/maps/search/?api=1&query=Largo+Boscovich+4+Rimini",
  },
  phone: "+39 0541 123 456",
  phoneHref: "+390541123456",
  email: "tavolo@ilfaro-rimini.it",
  social: {
    instagram: "@ilfaro.rimini",
    facebook: "Il Faro Rimini",
  },
  hours: [
    { day: "Martedì – Venerdì", time: "19:00 – 23:30" },
    { day: "Sabato – Domenica", time: "12:30 – 14:30 / 19:00 – 23:30" },
    { day: "Lunedì", time: "Chiuso" },
  ],
} as const;

export function mapEmbedSrc(zoom = 16) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    `${site.address.line1}, ${site.address.line2}`
  )}&z=${zoom}&hl=it&output=embed`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/galleria", label: "Galleria" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const homeSections = [
  { id: "storia", label: "Storia" },
  { id: "numeri", label: "Numeri" },
  { id: "menu", label: "Menu" },
  { id: "piatto-firma", label: "Il Piatto" },
  { id: "galleria", label: "Galleria" },
  { id: "recensioni", label: "Recensioni" },
  { id: "dove-siamo", label: "Dove Siamo" },
] as const;

export type DietTag = "vegetariano" | "senza glutine" | "crudo" | "firma";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tags?: DietTag[];
}

export interface MenuCategory {
  id: string;
  name: string;
  intro: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    intro: "Il mare dell'Adriatico e l'orto di Romagna, per aprire la tavola.",
    items: [
      {
        name: "Crudo dell'Adriatico",
        description:
          "Scampi, ostriche e tonno rosso, olio al limone di Sicilia, croccante di pane nero.",
        price: 24,
        tags: ["crudo"],
      },
      {
        name: "Bruschetta al pomodoro di Romagna",
        description:
          "Pane di grano duro, pomodoro cuore di bue, basilico, olio extravergine del podere.",
        price: 10,
        tags: ["vegetariano"],
      },
      {
        name: "Polpo arrosto e crema di ceci",
        description:
          "Polpo brasato a bassa temperatura, ceci del podere, paprika affumicata.",
        price: 18,
      },
      {
        name: "Piadina croccante e squacquerone",
        description:
          "La tradizione romagnola, rucola selvatica, prosciutto di Parma 24 mesi.",
        price: 14,
      },
      {
        name: "Capesante scottate",
        description:
          "Burro nocciola, purea di topinambur, tartufo nero estivo.",
        price: 22,
      },
      {
        name: "Insalata di mare tiepida",
        description:
          "Cozze, vongole, calamari, sedano croccante, limone e prezzemolo.",
        price: 19,
        tags: ["senza glutine"],
      },
    ],
  },
  {
    id: "primi",
    name: "Primi",
    intro: "Paste tirate ogni mattina, come da quaderno di Nonna Ada.",
    items: [
      {
        name: "Tagliolini al nero di seppia",
        description:
          "Ragù bianco di scampi e zucchine, bottarga di muggine.",
        price: 22,
      },
      {
        name: "Cappelletti in brodo",
        description:
          "La ricetta di Nonna Ada, brodo di cappone chiarificato tre ore.",
        price: 16,
      },
      {
        name: "Risotto Carnaroli al radicchio e Sangiovese",
        description:
          "Riduzione di vino, fonduta di formaggio di fossa.",
        price: 19,
        tags: ["vegetariano"],
      },
      {
        name: "Garganelli al ragù di anatra",
        description: "Pasta tirata a mano, timo, scorza d'arancia.",
        price: 18,
      },
      {
        name: "Strozzapreti allo scoglio",
        description:
          "Cozze, vongole, gamberi rosa, pomodorino datterino.",
        price: 21,
      },
      {
        name: "Passatelli in brodo di pesce",
        description: "Pangrattato, parmigiano 30 mesi, zafferano.",
        price: 17,
      },
    ],
  },
  {
    id: "secondi",
    name: "Secondi",
    intro: "Il pescato del giorno e le carni di Romagna, alla brace e in tegame.",
    items: [
      {
        name: "Brodetto alla riminese",
        description:
          "La zuppa di pesce del porto: sette qualità dell'Adriatico, crostone all'aglio.",
        price: 32,
        tags: ["firma"],
      },
      {
        name: "Rombo al forno con patate al rosmarino",
        description: "Olive taggiasche, pomodorini confit.",
        price: 30,
      },
      {
        name: "Tagliata di manzo Romagnola",
        description:
          "Rucola, grana 30 mesi, riduzione all'aceto balsamico di Modena.",
        price: 28,
        tags: ["senza glutine"],
      },
      {
        name: "Grigliata mista del Faro",
        description: "Pescato del giorno alla brace, salsa verde, limone di Sicilia.",
        price: 34,
        tags: ["senza glutine"],
      },
      {
        name: "Guancia di manzo brasata al Sangiovese",
        description: "Purea di patate al burro, cipolline in agrodolce.",
        price: 26,
      },
      {
        name: "Frittura dell'Adriatico",
        description: "Calamari, gamberi e paranza, maionese al limone.",
        price: 27,
      },
    ],
  },
  {
    id: "contorni",
    name: "Contorni",
    intro: "Per accompagnare, semplici e di stagione.",
    items: [
      {
        name: "Verdure di stagione grigliate",
        description: "Raccolte al mattino, olio extravergine.",
        price: 8,
        tags: ["vegetariano", "senza glutine"],
      },
      {
        name: "Patate al rosmarino arrosto",
        description: "Cotte lentamente al forno a legna.",
        price: 7,
        tags: ["vegetariano"],
      },
      {
        name: "Insalata verde e finocchi croccanti",
        description: "Agrumi e olio del podere.",
        price: 7,
        tags: ["vegetariano", "senza glutine"],
      },
      {
        name: "Radicchio di Treviso scottato al miele",
        description: "Aceto balsamico e noci.",
        price: 8,
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "dolci",
    name: "Dolci",
    intro: "La pasticceria della casa, ogni giorno.",
    items: [
      {
        name: "Tiramisù del Faro",
        description: "Mascarpone, caffè, cacao amaro Criollo.",
        price: 9,
        tags: ["vegetariano"],
      },
      {
        name: "Zuppa inglese romagnola",
        description: "Alchermes, crema pasticcera, savoiardi.",
        price: 9,
        tags: ["vegetariano"],
      },
      {
        name: "Sformatino al cioccolato fondente 70%",
        description: "Cuore caldo, gelato alla vaniglia Bourbon.",
        price: 10,
        tags: ["vegetariano"],
      },
      {
        name: "Sorbetto al limone di Sicilia e basilico",
        description: "Rinfrescante, a fine pasto.",
        price: 7,
        tags: ["vegetariano", "senza glutine"],
      },
      {
        name: "Panna cotta alla vaniglia",
        description: "Coulis di frutti di bosco.",
        price: 8,
        tags: ["vegetariano", "senza glutine"],
      },
    ],
  },
  {
    id: "cantina",
    name: "Vini & Bevande",
    intro: "120 etichette, cuore in Romagna e sguardo sull'Adriatico.",
    items: [
      {
        name: "Calice della casa",
        description: "Sangiovese di Romagna DOC o Trebbiano, al calice.",
        price: 6,
      },
      {
        name: "Sangiovese Superiore Riserva",
        description: "Bottiglia, colline riminesi.",
        price: 32,
      },
      {
        name: "Pignoletto DOCG frizzante",
        description: "Bottiglia, ideale con il crudo.",
        price: 28,
      },
      {
        name: "Albana di Romagna DOCG passito",
        description: "Vino da dessert, bottiglia da 500ml.",
        price: 30,
      },
      {
        name: "Acqua naturale o frizzante",
        description: "1 litro.",
        price: 3,
      },
      {
        name: "Caffè, anche corretto",
        description: "Torrefazione locale.",
        price: 2.5,
      },
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  origin: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Il brodetto è un viaggio nel porto di Rimini, in un piatto solo.",
    name: "Giulia M.",
    origin: "Rimini",
  },
  {
    quote: "Servizio impeccabile, vista sul faro da sogno al tramonto.",
    name: "Marco & Elena",
    origin: "Bologna",
  },
  {
    quote:
      "Abbiamo festeggiato il nostro anniversario: non dimenticheremo la tagliata.",
    name: "Luca R.",
    origin: "Milano",
  },
  {
    quote:
      "Un'oasi di eleganza sul porto canale. Il tiramisù è il migliore che abbia mai provato.",
    name: "Anna K.",
    origin: "Monaco di Baviera",
  },
  {
    quote:
      "Cucina autentica romagnola con un tocco contemporaneo. Torneremo.",
    name: "Paolo & Sara",
    origin: "Rimini",
  },
  {
    quote:
      "La crew ha reso perfetta una serata tra amici. Consigliatissimo il crudo.",
    name: "Davide T.",
    origin: "Forlì",
  },
];

export const logbook = [
  { value: "1978", label: "Anno di fondazione" },
  { value: "3", label: "Generazioni della famiglia Ricci" },
  { value: "41.000+", label: "Ospiti accolti a tavola" },
  { value: "15", label: "Miglia nautiche, la portata del faro accanto a noi" },
] as const;

export const timeline = [
  {
    year: "1754",
    title: "La luce del porto",
    text: "Viene costruito il Faro di Rimini, a guardia dell'ingresso del porto canale: 27 metri verso il cielo, per guidare chi torna a riva.",
  },
  {
    year: "1978",
    title: "Otto tavoli e un forno a legna",
    text: "Ada apre una piccola trattoria a due passi dal faro. Cucina per i pescatori del porto, all'inizio; per tutta la città, poco dopo.",
  },
  {
    year: "1996",
    title: "La sala sul porto",
    text: "Il figlio Giorgio amplia la sala, con le vetrate rivolte al porto canale e alle barche che rientrano al tramonto.",
  },
  {
    year: "2015",
    title: "Il ritorno di Marco",
    text: "Il nipote di Ada rientra da anni di cucine in giro per l'Italia e rinnova la cucina, senza tradire le ricette di famiglia.",
  },
  {
    year: "Oggi",
    title: "La stessa luce",
    text: "Il Faro continua a raccontare il mare di Rimini e la tavola di Romagna, una cena alla volta.",
  },
] as const;

export const team = [
  {
    name: "Marco Ricci",
    role: "Chef, terza generazione",
    bio: "Cresciuto tra i tavoli della trattoria di Nonna Ada, ha lavorato nelle cucine di Modena e delle Marche prima di tornare a Rimini nel 2015 con uno sguardo contemporaneo sulla cucina di famiglia.",
    image: "/images/chef-impiattamento.jpg",
  },
  {
    name: "Sofia Bianchi",
    role: "Sala e cantina",
    bio: "Guida la sala e la carta dei vini: oltre 120 etichette, con un debole dichiarato per il Sangiovese delle colline riminesi.",
    image: "/images/tavolo-apparecchiato-vino.jpg",
  },
] as const;

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  wide?: boolean;
}

export const gallery: GalleryImage[] = [
  { src: "/images/hero-terrazza-sera.jpg", alt: "Terrazza sul porto canale all'imbrunire", width: 2400, height: 1500, wide: true },
  { src: "/images/tagliolini-piatto-scuro.jpg", alt: "Tagliolini al nero di seppia", width: 1600, height: 2000 },
  { src: "/images/chef-cucina-buia.jpg", alt: "Lo chef al lavoro in cucina", width: 2400, height: 1600, wide: true },
  { src: "/images/spiaggia-ombrelloni-adriatico.jpg", alt: "La spiaggia dell'Adriatico a Rimini", width: 2000, height: 1500, wide: true },
  { src: "/images/risotto-piatto.jpg", alt: "Risotto al radicchio e Sangiovese", width: 1600, height: 1600 },
  { src: "/images/sala-interno-atmosfera.jpg", alt: "La sala interna a lume di candela", width: 1800, height: 2200 },
  { src: "/images/bruschetta-pomodoro.jpg", alt: "Bruschetta al pomodoro di Romagna", width: 1600, height: 1600 },
  { src: "/images/porto-veliero-tramonto.jpg", alt: "Barche a vela nel porto al tramonto", width: 2200, height: 1500, wide: true },
  { src: "/images/chef-piatto-gourmet.jpg", alt: "Impiattamento di un piatto gourmet", width: 1800, height: 1800 },
  { src: "/images/pesce-grigliato-verdure.jpg", alt: "Pesce alla griglia con verdure", width: 2400, height: 1500, wide: true },
  { src: "/images/terrazza-luci-serali.jpg", alt: "La terrazza con le luci della sera", width: 2400, height: 1400, wide: true },
  { src: "/images/mani-impiattamento.jpg", alt: "Dettaglio di impiattamento in cucina", width: 1600, height: 1600 },
  { src: "/images/chef-impiattamento.jpg", alt: "Lo chef rifinisce un piatto", width: 1800, height: 2200 },
  { src: "/images/bicchiere-vino-briciole.jpg", alt: "Un calice di Sangiovese in sala", width: 1600, height: 2000 },
  { src: "/images/tavolo-apparecchiato-vino.jpg", alt: "Il tavolo apparecchiato per la cena", width: 2000, height: 1400, wide: true },
  { src: "/images/cucina-brigata.jpg", alt: "La brigata di cucina al lavoro", width: 2200, height: 1400, wide: true },
  { src: "/images/chef-presenta-piatto.jpg", alt: "Lo chef presenta il piatto del giorno", width: 2400, height: 1400, wide: true },
  { src: "/images/tavolo-piatto-vino.jpg", alt: "Un piatto e un calice di vino in terrazza", width: 2000, height: 1400, wide: true },
];

export const faqs = [
  {
    question: "Serve la prenotazione?",
    answer:
      "Consigliata, soprattutto nei weekend e nei mesi estivi: la sala e la terrazza sul porto hanno posti limitati.",
  },
  {
    question: "Avete opzioni vegetariane o senza glutine?",
    answer:
      "Sì. Il menu segnala i piatti vegetariani e senza glutine; la cucina è felice di adattare altri piatti su richiesta.",
  },
  {
    question: "C'è un parcheggio nelle vicinanze?",
    answer:
      "Il parcheggio pubblico di Piazzale Boscovich è a due minuti a piedi, sull'altro lato del porto canale.",
  },
  {
    question: "Organizzate eventi privati o cene aziendali?",
    answer:
      "Sì, la sala superiore può ospitare fino a 24 persone. Scrivete a tavolo@ilfaro-rimini.it per un preventivo.",
  },
  {
    question: "È adatto ai bambini?",
    answer: "Certamente: disponiamo di seggioloni e di un piccolo menu dedicato ai più piccoli.",
  },
] as const;
