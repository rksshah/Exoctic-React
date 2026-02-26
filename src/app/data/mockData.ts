import { faker } from '@faker-js/faker';

// Import specific Figma assets for the New Arrivals section (Kept for compatibility if used elsewhere)
import imgBeige from "figma:asset/6c437ba02b95d56f0af86376f643884512ac7c4d.png";
import imgCarrot from "figma:asset/735c47d102b464a84961b0308191274e9c7fd308.png";
import imgHunter from "figma:asset/517033f14bb8fa4b50aa586c71cda3f2d931bbd1.png";
import imgApricot from "figma:asset/f91b16ffc7a4e4133006d332933ae862a8443b5b.png";
import imgRed from "figma:asset/d460688583120665d36f0844ccae77f25b983c27.png";
import imgJungle from "figma:asset/065c0a5128ac1ca2efe92608c589f365fe248716.png";

// Import new Color Wool assets from Figma
import imgMerinoWoolBlack from "figma:asset/a81da9669e80d20ac402a8ee66f4e3674669b5b5.png";
import imgMerinoWoolRovingIvory from "figma:asset/ee10c47720329bb68997a69fe66ad9873b7637e7.png";
import imgMerinoWoolRovingFrost from "figma:asset/d81bcb00f4b394915e0aadebca5f17b49ca3b80b.png";
import imgMerinoWoolRovingNickel from "figma:asset/3cc32d63049cb2034cfb6c936b4992504fd15e6b.png";
import imgMerinoWoolRovingChiffon from "figma:asset/d0c7724e55d3d800ed91c627b21ee3c6b4963f4f.png";
import imgMerinoWoolRovingGrey from "figma:asset/64aff51ac4a2ccf01614c3f6b4958289fba702dd.png";
import imgMerinoWoolRovingMink from "figma:asset/39bbf00bec50e6fedf2a0ca865147eef38811617.png";
import imgMerinoWoolRovingCelesthBlue from "figma:asset/d0af81c9f73996e4f787247efa05521ec6d9e174.png";
import imgMerinoWoolRovingBeige from "figma:asset/ab63802168a53001681f6133b972f2ad9257acbf.png";
import imgMerinoWoolRovingGainsboro from "figma:asset/e06c18e6277c19316bca73853ec52b1aadac0ed5.png";
import imgMerinoWoolRovingNevada from "figma:asset/45f64871def322dd34fecb5dc8c0a6d4ef4b6e7a.png";
import imgMerinoWoolRovingCloud from "figma:asset/f9a98f0672782fce5719efd05ffbf6b9a320acd9.png";

// Import new Fibers Roving assets from Figma
import imgColorBlendsMerinoWoolRovingA7Wetland from "figma:asset/27aa69646b78fcbca843e7c6e5700bc714e906af.png";
import imgColorBlendsMerinoWoolRovingFibersA5 from "figma:asset/5caf873562b8dd687a8d76e6c5f4527f54f4d8c0.png";
import imgColorBlendsMerinoWoolRovingFibersA10Haze from "figma:asset/782afaf6c27080b21b9ee2dcac3c00542feade99.png";
import img100ColorsMerinoWoolNeedleFeltingHandspun from "figma:asset/54f82fa89c4fc2c9f948229fcf96a24c6dee9693.png";
import imgColorBlendsMerinoWoolRovingFibersA9Space from "figma:asset/82ed3a64fd763d19b8588a76b924fe69ace998d9.png";
import img121MulberrySilkWhiteRoving from "figma:asset/fc0948927136fe1b6028005c2f8acd996ac0273b.png";
import imgColorBlendsMerinoWoolRovingA25Volcano from "figma:asset/67e5bc35d68659dc95178acb632260cfe469311d.png";
import img120PureAlpacaWhiteRoving from "figma:asset/8d5df37150d513dd43be0b0843eab1833f9e6ede.png";
import imgColorBlendsMerinoWoolRovingFibersA6Boysenberry from "figma:asset/6ebe919197e2147d2292278a483562cd8b2153d1.png";
import img115PureYakDownDarkBrownRoving from "figma:asset/0b4c808ac47a19ffd2d4ea0b06c3f1d4ed8f7119.png";
import imgColorBlendsMerinoWoolRovingFibersA11Mocha from "figma:asset/9396134ae426d6efcf7714103338fb5cd6e0539d.png";
import img116PureAngoraRabbitHairWhiteRovingTops from "figma:asset/06fefa4c4d37681c5147bf21479da23dc7e38a0f.png";
import img117PureDehairedBabyCamelDownGoldenBrownRoving from "figma:asset/03f7e6b63b54443699397b2ec840cacfe035059a.png";
import img122MixedPureCashmereTopsPackRovingForSpinningFeltingWeavingCrafting from "figma:asset/7f725fdb6cba23d57f07cce7402da2684e8ff6fb.png";
import img119PureMohairBrownRoving from "figma:asset/dc366f235a48d3b73ccfde378da7910d7c5f2407.png";
import imgColorBlendsMerinoWoolRovingFibersA8PearGreen from "figma:asset/0bb7e153a3aef1a5212d1b50a516e9fa66fcb795.png";
import img113PureCashmereLGreyRoving from "figma:asset/b31b700bd3a29cb743002a6a7464229c7c795d8a.png";
import img114PureCashmereWhiteRoving from "figma:asset/886afad9aee638977087da719a7eed1f81751764.png";
import img112PureCashmereBrownRoving from "figma:asset/7da025c25b6914bbef059813ed56067a2e337fab.png";
import img118PureMohairWhiteRoving from "figma:asset/233080106bbdb62d2503321a809a9c03c4c1f5c0.png";

// Import Wool Dry Balls asset
import imgWoolDryBalls7cm from "figma:asset/1d7350f560ff821b3f7713e67264b01307d8e820.png";

// --- TYPES ---

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: 'customer' | 'admin' | 'author';
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  shortDescription: string;
  categoryId: string;
  images: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  stock: number;
  details: {
    fiberType: string;
    weight: string;
    yardage: string;
    care: string;
  };
  color?: string;
  colorCode?: string;
  colorVariants?: number;
  colorFamily?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  authorId: string;
  publishedAt: string;
  category: string;
  readTime: string;
}

// --- DATA GENERATION HELPERS ---

// STRICTLY WOOL/YARN IMAGES
const WOOL_TEXTURES = [
  "https://images.unsplash.com/photo-1638724256973-efb31bcac1a6?auto=format&fit=crop&q=80&w=800", // Grey Texture
  "https://images.unsplash.com/photo-1670764732262-331943e5af5e?auto=format&fit=crop&q=80&w=800", // White Roving Texture
  "https://images.unsplash.com/photo-1638135606831-750c8b5d697a?auto=format&fit=crop&q=80&w=800", // Pink Texture
  "https://images.unsplash.com/photo-1608227611229-4f8d1d5339b6?auto=format&fit=crop&q=80&w=800", // Natural Texture
];

// Theme-based Wool Skein Images (Updated with fresh, verified URLs)
const THEMED_WOOL_IMAGES: Record<string, string> = {
  // Blue / Ocean
  'Ocean': "https://images.unsplash.com/photo-1702046508143-eb68172100df?auto=format&fit=crop&q=80&w=800",
  'Midnight': "https://images.unsplash.com/photo-1637517626826-a2e2ac630622?auto=format&fit=crop&q=80&w=800",
  
  // Red / Fire / Orange
  'Fire': "https://images.unsplash.com/photo-1591659302156-23ceae367af3?auto=format&fit=crop&q=80&w=800",
  'Sunset': "https://images.unsplash.com/photo-1639654760507-5f98562dbdcf?auto=format&fit=crop&q=80&w=800",
  'Marigold': "https://images.unsplash.com/photo-1602362475346-81a6683a46ab?auto=format&fit=crop&q=80&w=800", // Mustard/Yellow
  
  // White / Cloud / Grey
  'Cloud': "https://images.unsplash.com/photo-1675596520625-0a72304372bc?auto=format&fit=crop&q=80&w=800",
  'Frost': "https://images.unsplash.com/photo-1560258632-fb994fd2bd44?auto=format&fit=crop&q=80&w=800",
  'Vintage': "https://images.unsplash.com/photo-1672933719458-340d9fd85315?auto=format&fit=crop&q=80&w=800", // Brown/Beige
  'Earth': "https://images.unsplash.com/photo-1667586903287-99ad8fe34941?auto=format&fit=crop&q=80&w=800", // Brown/Beige

  // Green / Teal
  'Forest': "https://images.unsplash.com/photo-1735150898122-6ec2883aca99?auto=format&fit=crop&q=80&w=800",
  
  // Purple / Berry
  'Berry': "https://images.unsplash.com/photo-1603353050474-8e9dac5ff9c0?auto=format&fit=crop&q=80&w=800",
  'Royal': "https://images.unsplash.com/photo-1603353050474-8e9dac5ff9c0?auto=format&fit=crop&q=80&w=800", // Reusing Berry for Royal
};

// --- SEED DATA ---

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Color Wool',
    slug: 'color-wool',
    description: 'Vibrant hand-dyed batches for your next masterpiece.',
    image: THEMED_WOOL_IMAGES['Fire']
  },
  {
    id: 'c2',
    name: 'Fibers Roving',
    slug: 'fibers-roving',
    description: 'Unspun delight for spinners and felters.',
    image: THEMED_WOOL_IMAGES['Cloud']
  },
  {
    id: 'c3',
    name: 'Luxury Yarns',
    slug: 'luxury-yarns',
    description: 'The finest Cashmere, Silk, and Alpaca blends.',
    image: THEMED_WOOL_IMAGES['Ocean']
  },
  {
    id: 'c4',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Premium needles, hooks, and notions.',
    image: "https://images.unsplash.com/photo-1584992236310-6eddd724a4c7?auto=format&fit=crop&q=80&w=800"
  }
];

// --- GENERATION LOGIC ---

// Helper to generate a consistent set of 50 users
const generateUsers = (): User[] => {
  const users: User[] = [];
  const roles: User['role'][] = ['customer', 'customer', 'customer', 'author'];
  
  for (let i = 1; i <= 50; i++) {
    users.push({
      id: `u${i}`,
      firstName: `User${i}`,
      lastName: `Last${i}`,
      email: `user${i}@example.com`,
      avatar: `https://i.pravatar.cc/150?u=${i}`,
      role: i <= 5 ? 'admin' : roles[i % roles.length],
      bio: `This is a bio for user ${i}. Lover of fine fibers and knitting.`
    });
  }
  return users;
};

const generateProducts = (): Product[] => {
  // ALL PRODUCTS DELETED - Store is empty
  return [];
};

const generateReviews = (users: User[], products: Product[]): Review[] => {
  // No products = no reviews
  return [];
};

const generateBlogPosts = (users: User[]): BlogPost[] => {
  const authors = users.filter(u => u.role === 'author' || u.role === 'admin');
  const posts: BlogPost[] = [];
  const titles = [
    "Mastering Colorwork: A Guide for Beginners",
    "The Journey from Fleece to Fiber",
    "Why We Choose Sustainable Alpaca",
    "Autumn Knitting Trends 2026",
    "Care Guide: Keeping Your Knits Forever",
    "Interview with our Lead Dyer",
    "The Magic of Blocking: Before and After",
    "5 Patterns for One Skein Wonders"
  ];
  titles.forEach((title, idx) => {
    posts.push({
      id: `b${idx + 1}`,
      title: title,
      slug: title.toLowerCase().replace(/[:\s]+/g, '-'),
      excerpt: "Discover the secrets behind this essential technique and elevate your crafting game today.",
      content: "Full article content would go here...",
      coverImage: WOOL_TEXTURES[idx % WOOL_TEXTURES.length],
      authorId: authors[idx % authors.length]?.id || 'u1',
      publishedAt: new Date(Date.now() - idx * 86400000 * 5).toISOString(),
      category: idx % 2 === 0 ? "Tutorials" : "Behind the Scenes",
      readTime: `${5 + (idx % 5)} min read`
    });
  });
  return posts;
};

// --- EXPORTS ---

export const users = generateUsers();
export const products = generateProducts();

// Add wool-specific products (From Figma Frame)
export const woolProducts: Product[] = [
  {
    id: 'wool-1',
    name: 'MERINO WOOL BLACK',
    slug: 'merino-wool-black',
    price: 4.99,
    description: 'Premium black merino wool roving, perfect for bold and striking fiber art projects.',
    shortDescription: 'Premium black merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolBlack, imgMerinoWoolBlack, imgMerinoWoolBlack],
    rating: 5,
    reviewCount: 28,
    isNew: false,
    isBestSeller: true,
    stock: 45,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Black',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-2',
    name: 'MERINO WOOL ROVING IVORY',
    slug: 'merino-wool-roving-ivory',
    price: 4.99,
    description: 'Soft ivory merino wool roving with a warm, creamy hue.',
    shortDescription: 'Premium ivory merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingIvory, imgMerinoWoolRovingIvory, imgMerinoWoolRovingIvory],
    rating: 5,
    reviewCount: 34,
    isNew: false,
    isBestSeller: true,
    stock: 52,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Ivory',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-3',
    name: 'MERINO WOOL ROVING FROST',
    slug: 'merino-wool-roving-frost',
    price: 4.99,
    description: 'Cool frost white merino wool roving with pristine clarity.',
    shortDescription: 'Premium frost white merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingFrost, imgMerinoWoolRovingFrost, imgMerinoWoolRovingFrost],
    rating: 5,
    reviewCount: 41,
    isNew: false,
    isBestSeller: true,
    stock: 38,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Frost',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-4',
    name: 'MERINO WOOL ROVING NICKEL',
    slug: 'merino-wool-roving-nickel',
    price: 4.99,
    description: 'Sophisticated nickel grey merino wool roving with metallic undertones.',
    shortDescription: 'Premium nickel grey merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingNickel, imgMerinoWoolRovingNickel, imgMerinoWoolRovingNickel],
    rating: 5,
    reviewCount: 29,
    isNew: false,
    isBestSeller: false,
    stock: 31,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Nickel',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-5',
    name: 'MERINO WOOL ROVING CHIFFON',
    slug: 'merino-wool-roving-chiffon',
    price: 4.99,
    description: 'Delicate chiffon beige merino wool roving with ethereal softness.',
    shortDescription: 'Premium chiffon beige merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingChiffon, imgMerinoWoolRovingChiffon, imgMerinoWoolRovingChiffon],
    rating: 5,
    reviewCount: 36,
    isNew: false,
    isBestSeller: true,
    stock: 44,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Chiffon',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-6',
    name: 'MERINO WOOL ROVING GREY',
    slug: 'merino-wool-roving-grey',
    price: 4.99,
    description: 'Classic grey merino wool roving, versatile and timeless.',
    shortDescription: 'Premium grey merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingGrey, imgMerinoWoolRovingGrey, imgMerinoWoolRovingGrey],
    rating: 5,
    reviewCount: 47,
    isNew: false,
    isBestSeller: true,
    stock: 56,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Grey',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-7',
    name: 'MERINO WOOL ROVING MINK',
    slug: 'merino-wool-roving-mink',
    price: 4.99,
    description: 'Luxurious mink brown merino wool roving with rich depth.',
    shortDescription: 'Premium mink brown merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingMink, imgMerinoWoolRovingMink, imgMerinoWoolRovingMink],
    rating: 5,
    reviewCount: 32,
    isNew: false,
    isBestSeller: false,
    stock: 27,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Mink',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-8',
    name: 'MERINO WOOL ROVING CELESTH BLUE',
    slug: 'merino-wool-roving-celesth-blue',
    price: 4.99,
    description: 'Serene celestial blue merino wool roving with subtle grey tones.',
    shortDescription: 'Premium celestial blue merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingCelesthBlue, imgMerinoWoolRovingCelesthBlue, imgMerinoWoolRovingCelesthBlue],
    rating: 5,
    reviewCount: 25,
    isNew: false,
    isBestSeller: false,
    stock: 33,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Celesth Blue',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-9',
    name: 'MERINO WOOL ROVING BEIGE',
    slug: 'merino-wool-roving-beige',
    price: 4.99,
    description: 'Warm beige merino wool roving with natural, earthy tones.',
    shortDescription: 'Premium beige merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingBeige, imgMerinoWoolRovingBeige, imgMerinoWoolRovingBeige],
    rating: 5,
    reviewCount: 39,
    isNew: false,
    isBestSeller: true,
    stock: 48,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Beige',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-10',
    name: 'MERINO WOOL ROVING GAINSBORO',
    slug: 'merino-wool-roving-gainsboro',
    price: 4.99,
    description: 'Soft gainsboro grey merino wool roving with a subtle pearl finish.',
    shortDescription: 'Premium gainsboro grey merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingGainsboro, imgMerinoWoolRovingGainsboro, imgMerinoWoolRovingGainsboro],
    rating: 5,
    reviewCount: 30,
    isNew: false,
    isBestSeller: false,
    stock: 35,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Gainsboro',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-11',
    name: 'MERINO WOOL ROVING NEVADA',
    slug: 'merino-wool-roving-nevada',
    price: 4.99,
    description: 'Desert-inspired nevada grey merino wool roving with warm undertones.',
    shortDescription: 'Premium nevada grey merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingNevada, imgMerinoWoolRovingNevada, imgMerinoWoolRovingNevada],
    rating: 5,
    reviewCount: 26,
    isNew: false,
    isBestSeller: false,
    stock: 29,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Nevada',
    colorFamily: 'neutral',
    colorVariants: 1
  },
  {
    id: 'wool-12',
    name: 'MERINO WOOL ROVING CLOUD',
    slug: 'merino-wool-roving-cloud',
    price: 4.99,
    description: 'Airy cloud grey merino wool roving with a light, ethereal quality.',
    shortDescription: 'Premium cloud grey merino wool',
    categoryId: 'c1',
    images: [imgMerinoWoolRovingCloud, imgMerinoWoolRovingCloud, imgMerinoWoolRovingCloud],
    rating: 5,
    reviewCount: 37,
    isNew: false,
    isBestSeller: true,
    stock: 42,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Cloud',
    colorFamily: 'neutral',
    colorVariants: 1
  }
];

// Colored wool products for non-neutral color families
export const coloredWoolProducts: Product[] = [];

// New Arrivals products (6 products from Figma)
export const newArrivalsProducts: Product[] = [
  {
    id: 'na-1',
    name: 'MERINO WOOL ROVING BEIGE',
    slug: 'merino-wool-roving-beige-na',
    price: 4.99,
    description: 'Soft beige merino wool roving perfect for natural fiber projects.',
    shortDescription: 'Soft beige merino wool roving',
    categoryId: 'c1',
    images: [imgBeige, imgBeige, imgBeige],
    rating: 5,
    reviewCount: 42,
    isNew: true,
    isBestSeller: false,
    stock: 35,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Beige',
    colorVariants: 1
  },
  {
    id: 'na-2',
    name: 'MERINO WOOL ROVING CARROT',
    slug: 'merino-wool-roving-carrot',
    price: 4.99,
    description: 'Vibrant carrot orange merino wool roving.',
    shortDescription: 'Vibrant carrot orange merino wool',
    categoryId: 'c1',
    images: [imgCarrot, imgCarrot, imgCarrot],
    rating: 5,
    reviewCount: 38,
    isNew: true,
    isBestSeller: false,
    stock: 28,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Carrot',
    colorVariants: 1
  },
  {
    id: 'na-3',
    name: 'MERINO WOOL ROVING HUNTER',
    slug: 'merino-wool-roving-hunter',
    price: 4.99,
    description: 'Deep hunter green merino wool roving.',
    shortDescription: 'Deep hunter green merino wool',
    categoryId: 'c1',
    images: [imgHunter, imgHunter, imgHunter],
    rating: 5,
    reviewCount: 45,
    isNew: true,
    isBestSeller: true,
    stock: 40,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Hunter',
    colorVariants: 1
  },
  {
    id: 'na-4',
    name: 'MERINO WOOL ROVING APRICOT',
    slug: 'merino-wool-roving-apricot',
    price: 4.99,
    description: 'Delicate apricot merino wool roving.',
    shortDescription: 'Delicate apricot merino wool',
    categoryId: 'c1',
    images: [imgApricot, imgApricot, imgApricot],
    rating: 5,
    reviewCount: 33,
    isNew: true,
    isBestSeller: false,
    stock: 32,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Apricot',
    colorVariants: 1
  },
  {
    id: 'na-5',
    name: 'MERINO WOOL ROVING RED',
    slug: 'merino-wool-roving-red',
    price: 4.99,
    description: 'Bold red merino wool roving.',
    shortDescription: 'Bold red merino wool',
    categoryId: 'c1',
    images: [imgRed, imgRed, imgRed],
    rating: 5,
    reviewCount: 50,
    isNew: true,
    isBestSeller: true,
    stock: 25,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Red',
    colorVariants: 1
  },
  {
    id: 'na-6',
    name: 'MERINO WOOL ROVING JUNGLE',
    slug: 'merino-wool-roving-jungle',
    price: 4.99,
    description: 'Lush jungle green merino wool roving.',
    shortDescription: 'Lush jungle green merino wool',
    categoryId: 'c1',
    images: [imgJungle, imgJungle, imgJungle],
    rating: 5,
    reviewCount: 36,
    isNew: true,
    isBestSeller: false,
    stock: 30,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Jungle',
    colorVariants: 1
  }
];

// Fibers Roving products from Figma
export const fibersRovingProducts: Product[] = [
  {
    id: 'roving-1',
    name: 'COLOR BLENDS MERINO WOOL ROVING A7 WETLAND',
    slug: 'color-blends-merino-wool-roving-a7-wetland',
    price: 4.99,
    description: 'Beautiful wetland-inspired color blend merino wool roving with stunning teal and green tones.',
    shortDescription: 'Wetland color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingA7Wetland, imgColorBlendsMerinoWoolRovingA7Wetland, imgColorBlendsMerinoWoolRovingA7Wetland],
    rating: 5,
    reviewCount: 42,
    isNew: false,
    isBestSeller: true,
    stock: 38,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Wetland',
    colorVariants: 1
  },
  {
    id: 'roving-2',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A5',
    slug: 'color-blends-merino-wool-roving-fibers-a5',
    price: 4.99,
    description: 'Sky blue color blend merino wool roving perfect for felting and spinning.',
    shortDescription: 'Blue color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA5, imgColorBlendsMerinoWoolRovingFibersA5, imgColorBlendsMerinoWoolRovingFibersA5],
    rating: 5,
    reviewCount: 35,
    isNew: false,
    isBestSeller: true,
    stock: 45,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Sky Blue',
    colorVariants: 1
  },
  {
    id: 'roving-3',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A10 HAZE',
    slug: 'color-blends-merino-wool-roving-fibers-a10-haze',
    price: 4.99,
    description: 'Multi-color haze blend merino wool roving with pastel rainbow tones.',
    shortDescription: 'Haze color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA10Haze, imgColorBlendsMerinoWoolRovingFibersA10Haze, imgColorBlendsMerinoWoolRovingFibersA10Haze],
    rating: 5,
    reviewCount: 48,
    isNew: false,
    isBestSeller: true,
    stock: 52,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Haze',
    colorVariants: 1
  },
  {
    id: 'roving-4',
    name: '100 COLORS MERINO WOOL NEEDLE FELTING/HANDSPUN',
    slug: '100-colors-merino-wool-needle-felting-handspun',
    price: 28.99,
    description: 'Complete set of 100 vibrant merino wool colors for needle felting and handspinning.',
    shortDescription: '100 color merino wool set',
    categoryId: 'c2',
    images: [img100ColorsMerinoWoolNeedleFeltingHandspun, img100ColorsMerinoWoolNeedleFeltingHandspun, img100ColorsMerinoWoolNeedleFeltingHandspun],
    rating: 5,
    reviewCount: 67,
    isNew: false,
    isBestSeller: true,
    stock: 15,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100 colors pack',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Multi',
    colorVariants: 100
  },
  {
    id: 'roving-5',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A9 SPACE',
    slug: 'color-blends-merino-wool-roving-fibers-a9-space',
    price: 4.99,
    description: 'Space-inspired color blend with blues, greys, and earthy tones.',
    shortDescription: 'Space color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA9Space, imgColorBlendsMerinoWoolRovingFibersA9Space, imgColorBlendsMerinoWoolRovingFibersA9Space],
    rating: 5,
    reviewCount: 31,
    isNew: false,
    isBestSeller: false,
    stock: 40,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Space',
    colorVariants: 1
  },
  {
    id: 'roving-6',
    name: '#121 MULBERRY SILK WHITE ROVING',
    slug: '121-mulberry-silk-white-roving',
    price: 9.99,
    description: 'Pure white mulberry silk roving with luxurious sheen and softness.',
    shortDescription: 'Pure white mulberry silk roving',
    categoryId: 'c2',
    images: [img121MulberrySilkWhiteRoving, img121MulberrySilkWhiteRoving, img121MulberrySilkWhiteRoving],
    rating: 5,
    reviewCount: 54,
    isNew: false,
    isBestSeller: true,
    stock: 28,
    details: {
      fiberType: 'Mulberry Silk',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'White',
    colorVariants: 1
  },
  {
    id: 'roving-7',
    name: 'COLOR BLENDS MERINO WOOL ROVING A25 VOLCANO',
    slug: 'color-blends-merino-wool-roving-a25-volcano',
    price: 4.99,
    description: 'Fiery volcano-inspired color blend with reds and oranges.',
    shortDescription: 'Volcano color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingA25Volcano, imgColorBlendsMerinoWoolRovingA25Volcano, imgColorBlendsMerinoWoolRovingA25Volcano],
    rating: 5,
    reviewCount: 39,
    isNew: false,
    isBestSeller: true,
    stock: 33,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Volcano',
    colorVariants: 1
  },
  {
    id: 'roving-8',
    name: '#120 PURE ALPACA WHITE ROVING',
    slug: '120-pure-alpaca-white-roving',
    price: 8.99,
    description: 'Premium pure white alpaca roving with exceptional softness.',
    shortDescription: 'Pure white alpaca roving',
    categoryId: 'c2',
    images: [img120PureAlpacaWhiteRoving, img120PureAlpacaWhiteRoving, img120PureAlpacaWhiteRoving],
    rating: 5,
    reviewCount: 46,
    isNew: false,
    isBestSeller: true,
    stock: 22,
    details: {
      fiberType: 'Alpaca',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'White',
    colorVariants: 1
  },
  {
    id: 'roving-9',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A6 BOYSENBERRY',
    slug: 'color-blends-merino-wool-roving-fibers-a6-boysenberry',
    price: 4.99,
    description: 'Rich boysenberry color blend with purples and pinks.',
    shortDescription: 'Boysenberry color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA6Boysenberry, imgColorBlendsMerinoWoolRovingFibersA6Boysenberry, imgColorBlendsMerinoWoolRovingFibersA6Boysenberry],
    rating: 5,
    reviewCount: 44,
    isNew: false,
    isBestSeller: true,
    stock: 37,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Boysenberry',
    colorVariants: 1
  },
  {
    id: 'roving-10',
    name: '#115 PURE YAK DOWN DARK BROWN ROVING',
    slug: '115-pure-yak-down-dark-brown-roving',
    price: 8.99,
    description: 'Luxurious dark brown yak down roving with incredible warmth.',
    shortDescription: 'Pure yak down dark brown roving',
    categoryId: 'c2',
    images: [img115PureYakDownDarkBrownRoving, img115PureYakDownDarkBrownRoving, img115PureYakDownDarkBrownRoving],
    rating: 5,
    reviewCount: 29,
    isNew: false,
    isBestSeller: false,
    stock: 18,
    details: {
      fiberType: 'Yak Down',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Dark Brown',
    colorVariants: 1
  },
  {
    id: 'roving-11',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A11 MOCHA',
    slug: 'color-blends-merino-wool-roving-fibers-a11-mocha',
    price: 4.99,
    description: 'Warm mocha color blend with browns and tans.',
    shortDescription: 'Mocha color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA11Mocha, imgColorBlendsMerinoWoolRovingFibersA11Mocha, imgColorBlendsMerinoWoolRovingFibersA11Mocha],
    rating: 5,
    reviewCount: 36,
    isNew: false,
    isBestSeller: true,
    stock: 41,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Mocha',
    colorVariants: 1
  },
  {
    id: 'roving-12',
    name: '#116 PURE ANGORA RABBIT HAIR WHITE ROVING TOPS',
    slug: '116-pure-angora-rabbit-hair-white-roving-tops',
    price: 9.99,
    description: 'Ultra-soft pure white angora rabbit hair roving with cloud-like texture.',
    shortDescription: 'Pure white angora rabbit roving',
    categoryId: 'c2',
    images: [img116PureAngoraRabbitHairWhiteRovingTops, img116PureAngoraRabbitHairWhiteRovingTops, img116PureAngoraRabbitHairWhiteRovingTops],
    rating: 5,
    reviewCount: 51,
    isNew: false,
    isBestSeller: true,
    stock: 24,
    details: {
      fiberType: 'Angora Rabbit',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'White',
    colorVariants: 1
  },
  {
    id: 'roving-13',
    name: '#117 PURE DEHAIRED BABY CAMEL DOWN GOLDEN BROWN ROVING',
    slug: '117-pure-dehaired-baby-camel-down-golden-brown-roving',
    price: 6.99,
    description: 'Rare golden brown baby camel down roving, incredibly soft and warm.',
    shortDescription: 'Pure baby camel down roving',
    categoryId: 'c2',
    images: [img117PureDehairedBabyCamelDownGoldenBrownRoving, img117PureDehairedBabyCamelDownGoldenBrownRoving, img117PureDehairedBabyCamelDownGoldenBrownRoving],
    rating: 5,
    reviewCount: 33,
    isNew: false,
    isBestSeller: false,
    stock: 16,
    details: {
      fiberType: 'Baby Camel Down',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Golden Brown',
    colorVariants: 1
  },
  {
    id: 'roving-14',
    name: '# 122 MIXED PURE CASHMERE TOPS PACK ROVING FOR SPINNING/FELTING/WEAVING/CRAFTING',
    slug: '122-mixed-pure-cashmere-tops-pack-roving',
    price: 26.99,
    description: 'Premium mixed cashmere tops pack in natural shades for all fiber arts.',
    shortDescription: 'Mixed pure cashmere roving pack',
    categoryId: 'c2',
    images: [img122MixedPureCashmereTopsPackRovingForSpinningFeltingWeavingCrafting, img122MixedPureCashmereTopsPackRovingForSpinningFeltingWeavingCrafting, img122MixedPureCashmereTopsPackRovingForSpinningFeltingWeavingCrafting],
    rating: 5,
    reviewCount: 58,
    isNew: false,
    isBestSeller: true,
    stock: 12,
    details: {
      fiberType: 'Pure Cashmere',
      weight: 'Roving',
      yardage: 'Mixed pack',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Mixed Naturals',
    colorVariants: 4
  },
  {
    id: 'roving-15',
    name: '#119 PURE MOHAIR BROWN ROVING',
    slug: '119-pure-mohair-brown-roving',
    price: 5.99,
    description: 'Pure brown mohair roving with natural luster and drape.',
    shortDescription: 'Pure brown mohair roving',
    categoryId: 'c2',
    images: [img119PureMohairBrownRoving, img119PureMohairBrownRoving, img119PureMohairBrownRoving],
    rating: 5,
    reviewCount: 27,
    isNew: false,
    isBestSeller: false,
    stock: 31,
    details: {
      fiberType: 'Pure Mohair',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Brown',
    colorVariants: 1
  },
  {
    id: 'roving-16',
    name: 'COLOR BLENDS MERINO WOOL ROVING FIBERS A8 PEAR GREEN',
    slug: 'color-blends-merino-wool-roving-fibers-a8-pear-green',
    price: 4.99,
    description: 'Fresh pear green color blend merino wool roving with spring vibes.',
    shortDescription: 'Pear green color blend merino wool roving',
    categoryId: 'c2',
    images: [imgColorBlendsMerinoWoolRovingFibersA8PearGreen, imgColorBlendsMerinoWoolRovingFibersA8PearGreen, imgColorBlendsMerinoWoolRovingFibersA8PearGreen],
    rating: 5,
    reviewCount: 40,
    isNew: false,
    isBestSeller: true,
    stock: 36,
    details: {
      fiberType: 'Merino Wool',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Pear Green',
    colorVariants: 1
  },
  {
    id: 'roving-17',
    name: '#113 PURE CASHMERE L.GREY ROVING',
    slug: '113-pure-cashmere-l-grey-roving',
    price: 12.99,
    description: 'Light grey pure cashmere roving with incredible softness.',
    shortDescription: 'Pure light grey cashmere roving',
    categoryId: 'c2',
    images: [img113PureCashmereLGreyRoving, img113PureCashmereLGreyRoving, img113PureCashmereLGreyRoving],
    rating: 5,
    reviewCount: 49,
    isNew: false,
    isBestSeller: true,
    stock: 19,
    details: {
      fiberType: 'Pure Cashmere',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Light Grey',
    colorVariants: 1
  },
  {
    id: 'roving-18',
    name: '#114 PURE CASHMERE WHITE ROVING',
    slug: '114-pure-cashmere-white-roving',
    price: 13.99,
    description: 'Pure white cashmere roving, the ultimate luxury fiber.',
    shortDescription: 'Pure white cashmere roving',
    categoryId: 'c2',
    images: [img114PureCashmereWhiteRoving, img114PureCashmereWhiteRoving, img114PureCashmereWhiteRoving],
    rating: 5,
    reviewCount: 62,
    isNew: false,
    isBestSeller: true,
    stock: 14,
    details: {
      fiberType: 'Pure Cashmere',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'White',
    colorVariants: 1
  },
  {
    id: 'roving-19',
    name: '#112 PURE CASHMERE BROWN ROVING',
    slug: '112-pure-cashmere-brown-roving',
    price: 12.99,
    description: 'Rich brown pure cashmere roving with natural depth.',
    shortDescription: 'Pure brown cashmere roving',
    categoryId: 'c2',
    images: [img112PureCashmereBrownRoving, img112PureCashmereBrownRoving, img112PureCashmereBrownRoving],
    rating: 5,
    reviewCount: 45,
    isNew: false,
    isBestSeller: true,
    stock: 17,
    details: {
      fiberType: 'Pure Cashmere',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Brown',
    colorVariants: 1
  },
  {
    id: 'roving-20',
    name: '#118 PURE MOHAIR WHITE ROVING',
    slug: '118-pure-mohair-white-roving',
    price: 5.99,
    description: 'Pure white mohair roving with beautiful sheen and texture.',
    shortDescription: 'Pure white mohair roving',
    categoryId: 'c2',
    images: [img118PureMohairWhiteRoving, img118PureMohairWhiteRoving, img118PureMohairWhiteRoving],
    rating: 5,
    reviewCount: 38,
    isNew: false,
    isBestSeller: true,
    stock: 26,
    details: {
      fiberType: 'Pure Mohair',
      weight: 'Roving',
      yardage: '100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'White',
    colorVariants: 1
  }
];

// --- ACCESSORIES PRODUCTS (Wool Dry Balls) ---
export const accessoriesProducts: Product[] = [
  {
    id: 'acc-002',
    name: '#111 Wool Dry Balls - 7 cm',
    slug: 'wool-dry-balls-7cm',
    price: 1.20,
    description: 'Premium 7cm wool dryer balls made from 100% natural New Zealand wool. These eco-friendly dryer balls reduce drying time, soften fabrics naturally, and eliminate static without chemicals. Perfect for sensitive skin and all fabric types. Sold individually.',
    shortDescription: '7cm natural wool dryer ball',
    categoryId: 'c4',
    images: [imgWoolDryBalls7cm, imgWoolDryBalls7cm, imgWoolDryBalls7cm],
    rating: 5,
    reviewCount: 84,
    isNew: true,
    isBestSeller: false,
    stock: 350,
    details: {
      fiberType: '100% New Zealand Wool',
      weight: '25g per ball',
      yardage: 'Single 7cm ball',
      care: 'Reusable for 1000+ loads. Simply place in dryer with wet clothes.'
    },
    color: 'Natural',
    colorVariants: 1
  }
];

// --- LUXURY YARN PRODUCTS ---
export const luxuryYarnProducts: Product[] = [
  {
    id: 'yarn-001',
    name: 'Cashmere Silk Blend Lace Weight Yarn',
    slug: 'cashmere-silk-lace-yarn',
    price: 48.00,
    description: 'Luxurious blend of 70% cashmere and 30% mulberry silk in an ultra-fine lace weight. Creates delicate, airy knits with incredible drape and sheen. Perfect for shawls, wraps, and fine garments.',
    shortDescription: 'Premium cashmere silk lace yarn',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Cloud'], THEMED_WOOL_IMAGES['Cloud'], THEMED_WOOL_IMAGES['Cloud']],
    rating: 5,
    reviewCount: 89,
    isNew: true,
    isBestSeller: true,
    stock: 42,
    details: {
      fiberType: '70% Cashmere, 30% Silk',
      weight: 'Lace',
      yardage: '400 yards / 50g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Cloud',
    colorVariants: 8
  },
  {
    id: 'yarn-002',
    name: 'Baby Alpaca DK Weight Yarn',
    slug: 'baby-alpaca-dk-yarn',
    price: 32.00,
    description: '100% baby alpaca in a versatile DK weight. Incredibly soft with excellent stitch definition. Lightweight yet warm, perfect for garments and accessories.',
    shortDescription: 'Soft baby alpaca DK yarn',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Earth'], THEMED_WOOL_IMAGES['Earth'], THEMED_WOOL_IMAGES['Earth']],
    rating: 5,
    reviewCount: 156,
    isNew: false,
    isBestSeller: true,
    stock: 68,
    details: {
      fiberType: '100% Baby Alpaca',
      weight: 'DK',
      yardage: '245 yards / 100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Fawn',
    colorVariants: 12
  },
  {
    id: 'yarn-003',
    name: 'Merino Silk Fingering Yarn',
    slug: 'merino-silk-fingering-yarn',
    price: 28.00,
    description: 'Elegant blend of 80% superwash merino wool and 20% silk. Stunning sheen with excellent elasticity. Ideal for socks, shawls, and lightweight garments.',
    shortDescription: 'Merino silk fingering weight',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Berry'], THEMED_WOOL_IMAGES['Berry'], THEMED_WOOL_IMAGES['Berry']],
    rating: 5,
    reviewCount: 203,
    isNew: false,
    isBestSeller: true,
    stock: 112,
    details: {
      fiberType: '80% Merino Wool, 20% Silk',
      weight: 'Fingering',
      yardage: '437 yards / 100g',
      care: 'Machine washable gentle cycle or hand wash.'
    },
    color: 'Berry',
    colorVariants: 20
  },
  {
    id: 'yarn-004',
    name: 'Mohair Lace Yarn',
    slug: 'mohair-lace-yarn',
    price: 24.00,
    description: 'Kid mohair and silk blend in a delicate lace weight. Creates an airy halo effect with beautiful drape. Perfect for lightweight wraps and shawls.',
    shortDescription: 'Kid mohair silk lace yarn',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Forest'], THEMED_WOOL_IMAGES['Forest'], THEMED_WOOL_IMAGES['Forest']],
    rating: 4,
    reviewCount: 94,
    isNew: false,
    isBestSeller: false,
    stock: 87,
    details: {
      fiberType: '72% Kid Mohair, 28% Silk',
      weight: 'Lace',
      yardage: '459 yards / 50g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Sage',
    colorVariants: 15
  },
  {
    id: 'yarn-005',
    name: 'Yak Merino Worsted Yarn',
    slug: 'yak-merino-worsted-yarn',
    price: 36.00,
    description: 'Luxurious blend of 50% yak down and 50% merino wool. Exceptionally warm and soft with excellent stitch definition. Perfect for cozy sweaters and accessories.',
    shortDescription: 'Yak merino worsted weight',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Vintage'], THEMED_WOOL_IMAGES['Vintage'], THEMED_WOOL_IMAGES['Vintage']],
    rating: 5,
    reviewCount: 72,
    isNew: true,
    isBestSeller: false,
    stock: 54,
    details: {
      fiberType: '50% Yak Down, 50% Merino Wool',
      weight: 'Worsted',
      yardage: '218 yards / 100g',
      care: 'Hand wash cold, lay flat to dry.'
    },
    color: 'Charcoal',
    colorVariants: 6
  },
  {
    id: 'yarn-006',
    name: 'Pure Cashmere Sport Weight Yarn',
    slug: 'pure-cashmere-sport-yarn',
    price: 68.00,
    description: '100% pure cashmere in a versatile sport weight. The ultimate luxury fiber with unmatched softness. Creates elegant garments with incredible drape.',
    shortDescription: 'Pure cashmere sport yarn',
    categoryId: 'c3',
    images: [THEMED_WOOL_IMAGES['Frost'], THEMED_WOOL_IMAGES['Frost'], THEMED_WOOL_IMAGES['Frost']],
    rating: 5,
    reviewCount: 134,
    isNew: true,
    isBestSeller: true,
    stock: 29,
    details: {
      fiberType: '100% Cashmere',
      weight: 'Sport',
      yardage: '175 yards / 50g',
      care: 'Hand wash cold, lay flat to dry. Professional dry cleaning recommended.'
    },
    color: 'Pearl',
    colorVariants: 10
  }
];

export const allColorWoolProducts: Product[] = [...woolProducts, ...coloredWoolProducts];

// All products combined
export const allProducts: Product[] = [
  ...products, 
  ...woolProducts, 
  ...coloredWoolProducts, 
  ...newArrivalsProducts, 
  ...fibersRovingProducts, 
  ...accessoriesProducts, 
  ...luxuryYarnProducts
];

export const reviews = generateReviews(users, [...products, ...woolProducts, ...coloredWoolProducts, ...newArrivalsProducts, ...fibersRovingProducts, ...accessoriesProducts, ...luxuryYarnProducts]);
export const blogPosts = generateBlogPosts(users);

// Helper functions to simulate API calls
export const getProductBySlug = (slug: string) => [...products, ...woolProducts, ...coloredWoolProducts, ...newArrivalsProducts, ...fibersRovingProducts, ...accessoriesProducts, ...luxuryYarnProducts].find(p => p.slug === slug);
export const getProductsByCategory = (catId: string) => [...products, ...woolProducts, ...coloredWoolProducts, ...newArrivalsProducts, ...fibersRovingProducts, ...accessoriesProducts, ...luxuryYarnProducts].filter(p => p.categoryId === catId);
export const getReviewsForProduct = (pId: string) => reviews.filter(r => r.productId === pId);
export const getUserById = (id: string) => users.find(u => u.id === id);