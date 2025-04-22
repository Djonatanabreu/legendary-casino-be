import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const games = [
  {
    name: "Adventure themed slot with avalanche feature",
    slug: "Adventure themed slot with avalanche feature".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/adventure-themed-slot-with-avalanche-feature.png",
    description: "Adventure themed slot with avalanche feature",
    category: "slots",
    rating: 4.7,
    isAvailable: true,
    demoUrl: "/games/adventure-themed-slot",
  },
  {
    name: "Ancient Egyptian themed slot",
    slug: "Ancient Egyptian themed slot".split(" ").join("-"),
    provider: "BGaming",
    imageUrl: "/assets/ancient-egyptian-themed-slot.png",
    description: "Ancient Egyptian themed slot with expanding symbols",
    category: "slots",
    rating: 4.8,
    isAvailable: true,
    demoUrl: "/games/ancient-egyptian-slot",
  },
  {
    name: "Asian themed slot with progressive jackpot",
    slug: "Asian themed slot with progressive jackpot".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/asian-themed-slot-with-progressive-jackpot.png",
    description: "Asian-themed slot with progressive jackpot features",
    category: "jackpot",
    rating: 4.8,
    isAvailable: true,
    demoUrl: "/games/asian-themed-slot",
  },
  {
    name: "Classic Caribbean style poker game",
    slug: "Classic Caribbean style poker game".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/classic-caribbean-style-poker-game.png",
    description:
      "Classic Caribbean style poker game with multiple betting options",
    category: "table",
    rating: 4.5,
    isAvailable: true,
    demoUrl: "/games/caribbean-poker",
  },
  {
    name: "Classic diamond themed slot with multipliers",
    slug: "Classic diamond themed slot with multipliers".split(" ").join("-"),
    provider: "BGaming",
    imageUrl: "/assets/classic-diamond-themed-slot-with-multipliers.png",
    description: "Classic diamond-themed slot with exciting multipliers",
    category: "slots",
    rating: 4.5,
    isAvailable: true,
    demoUrl: "/games/diamond-slot",
  },
  {
    name: "Classic fruit themed slot with modern features",
    slug: "Classic fruit themed slot with modern features".split(" ").join("-"),
    provider: "BGaming",
    imageUrl: "/assets/classic-fruit-themed-slot-with-modern-features.png",
    description: "Classic fruit-themed slot with modern features and bonuses",
    category: "slots",
    rating: 4.5,
    isAvailable: true,
    demoUrl: "/games/fruit-slot",
  },
  {
    name: "Classic European Roulette",
    slug: "Classic European Roulette".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/classic-european-roulette.png",
    description: "Classic European roulette with immersive gameplay",
    category: "table",
    rating: 4.9,
    isAvailable: true,
    demoUrl: "/games/european-roulette",
  },
  {
    name: "Cosmic Themed Slot",
    slug: "Cosmic Themed Slot".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/cosmic-themed-slot.png",
    description: "Cosmic themed slot with expanding wilds",
    category: "slots",
    rating: 4.6,
    isAvailable: true,
    demoUrl: "/games/cosmic-slot",
  },
  {
    name: "Egyptian themed slot with pyramid bonus",
    slug: "Egyptian themed slot with pyramid bonus".split(" ").join("-"),
    provider: "BGaming",
    imageUrl: "/assets/egyptian-themed-slot-with-pyramid-bonus.png",
    description: "Egyptian-themed slot with exciting pyramid bonus features",
    category: "slots",
    rating: 4.7,
    isAvailable: true,
    demoUrl: "/games/egyptian-pyramid-slot",
  },
  {
    name: "Electrifying Live Roulette",
    slug: "Electrifying Live Roulette".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/electrifying-live-roulette.png",
    description: "Electrifying live roulette with multipliers",
    category: "live",
    rating: 4.8,
    isAvailable: true,
    demoUrl: "/games/live-roulette",
  },
  {
    name: "Fast paced poker variant for skilled players",
    slug: "Fast paced poker variant for skilled players".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/fast-paced-poker-variant-for-skilled-players.png",
    description: "Fast-paced poker variant designed for skilled players",
    category: "table",
    rating: 4.6,
    isAvailable: true,
    demoUrl: "/games/speed-poker",
  },
  {
    name: "Greek mythology progressive jackpot slot",
    slug: "Greek mythology progressive jackpot slot".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/greek-mythology-progressive-jackpot-slot.png",
    description: "Greek mythology-themed progressive jackpot slot",
    category: "jackpot",
    rating: 4.6,
    isAvailable: true,
    demoUrl: "/games/greek-jackpot",
  },
  {
    name: "Live dealer ancient Chinese dice game",
    slug: "Live dealer ancient Chinese dice game".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/live-dealer-ancient-chinese-dice-game.png",
    description:
      "Live dealer ancient Chinese dice game with authentic gameplay",
    category: "live",
    rating: 4.6,
    isAvailable: true,
    demoUrl: "/games/live-sic-bo",
  },
  {
    name: "Live dealer baccarat with multiple camera angles",
    slug: "Live dealer baccarat with multiple camera angles"
      .split(" ")
      .join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/live-dealer-baccarat-with-multiple-camera-angles.png",
    description: "Live dealer baccarat with immersive multiple camera angles",
    category: "live",
    rating: 4.7,
    isAvailable: true,
    demoUrl: "/games/live-baccarat",
  },
  {
    name: "Live dealer craps with multiple betting options",
    slug: "Live dealer craps with multiple betting options"
      .split(" ")
      .join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/live-dealer-craps-with-multiple-betting-options.png",
    description: "Live dealer craps with extensive betting options",
    category: "live",
    rating: 4.7,
    isAvailable: true,
    demoUrl: "/games/live-craps",
  },
  {
    name: "Popular poker variant against the dealer",
    slug: "Popular poker variant against the dealer".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/popular-poker-variant-against-the-dealer.png",
    description: "Popular poker variant played against the dealer",
    category: "table",
    rating: 4.8,
    isAvailable: true,
    demoUrl: "/games/dealer-poker",
  },
  {
    name: "Premium live Dealer Blackjack",
    slug: "Premium live Dealer Blackjack".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/premium-live-dealer-blackjack.png",
    description: "Premium live dealer blackjack experience",
    category: "live",
    rating: 4.9,
    isAvailable: true,
    demoUrl: "/games/live-blackjack",
  },
  {
    name: "Progressive jackpot slot with luxury theme",
    slug: "Progressive jackpot slot with luxury theme".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/progressive-jackpot-slot-with-luxury-theme.png",
    description: "Luxury-themed progressive jackpot slot",
    category: "jackpot",
    rating: 4.7,
    isAvailable: true,
    demoUrl: "/games/luxury-jackpot",
  },
  {
    name: "Simple and fast paced card game",
    slug: "Simple and fast paced card game".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/simple-and-fast-paced-card-game.png",
    description: "Simple and fast-paced card game for quick action",
    category: "table",
    rating: 4.4,
    isAvailable: true,
    demoUrl: "/games/fast-cards",
  },
  {
    name: "Three card poker variant with bonus bets",
    slug: "Three card poker variant with bonus bets".split(" ").join("-"),
    provider: "Evolution Gaming",
    imageUrl: "/assets/three-card-poker-variant-with-bonus-bets.png",
    description: "Three-card poker variant featuring exciting bonus bets",
    category: "table",
    rating: 4.5,
    isAvailable: true,
    demoUrl: "/games/three-card-poker",
  },
  {
    name: "Wildlife themed slot with free spins feature",
    slug: "Wildlife themed slot with free spins feature".split(" ").join("-"),
    provider: "BGaming",
    imageUrl: "/assets/wildlife-themed-slot-with-free-spins-feature.png",
    description: "Wildlife-themed slot with generous free spins feature",
    category: "slots",
    rating: 4.9,
    isAvailable: true,
    demoUrl: "/games/wildlife-slot",
  },
  {
    name: "World famous progressive jackpot slot",
    slug: "World famous progressive jackpot slot".split(" ").join("-"),
    provider: "NetEnt",
    imageUrl: "/assets/world-famous-progressive-jackpot-slot.png",
    description: "World-famous progressive jackpot slot with massive prizes",
    category: "jackpot",
    rating: 4.9,
    isAvailable: true,
    demoUrl: "/games/mega-jackpot",
  },
];

async function main() {
  console.log("Start seeding...");

  for (const game of games) {
    const createdGame = await prisma.game.create({
      data: game,
    });
    console.log(`Created game with id: ${createdGame.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
