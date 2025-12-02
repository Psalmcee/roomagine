import type { Design } from '@/app/types';

export const designs: Design[] = [
  {
    id: '1',
    title: 'Scandinavian Serenity',
    description: 'A minimalist living room that combines natural light with organic textures, creating a peaceful retreat perfect for modern living.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    style: 'scandinavian',
    roomType: 'living-room',
    priceRange: 'mid-range',
    paintColors: [
      {
        name: 'Pure White',
        brand: 'Sherwin-Williams',
        code: 'SW 7005',
        hex: '#FFFFFF'
      },
      {
        name: 'Light Gray',
        brand: 'Benjamin Moore',
        code: 'BM 1541',
        hex: '#F0F0F0'
      }
    ],
    furniture: [
      {
        name: 'Bergen Sofa',
        type: 'Sofa',
        material: 'Linen',
        brand: 'West Elm',
        purchaseUrl: 'https://www.westelm.com'
      },
      {
        name: 'Teak Coffee Table',
        type: 'Table',
        material: 'Teak Wood',
        brand: 'Article',
        purchaseUrl: 'https://www.article.com'
      }
    ],
    decor: {
      rugs: ['Ivory Wool Hand-Knotted Rug'],
      lighting: ['Brass Arc Floor Lamp'],
      plants: ['Fiddle Leaf Fig'],
    },
    whyItWorks: 'The combination of clean lines and natural materials creates a calm, inviting space that feels both modern and timeless. The neutral palette is warmed by wooden elements and softened with textural fabrics.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Modern Industrial Kitchen',
    description: 'Bold contrasts meet practical design in this chef-worthy space that combines industrial elements with modern functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7',
    style: 'industrial',
    roomType: 'kitchen',
    priceRange: 'luxury',
    paintColors: [
      {
        name: 'Iron Ore',
        brand: 'Sherwin-Williams',
        code: 'SW 7069',
        hex: '#2F2F2F'
      }
    ],
    furniture: [
      {
        name: 'Industrial Bar Stools',
        type: 'Seating',
        material: 'Metal and Wood',
        brand: 'Restoration Hardware',
        purchaseUrl: 'https://www.restorationhardware.com'
      }
    ],
    decor: {
      lighting: ['Black Pendant Lights'],
      accessories: ['Copper Cookware Set'],
    },
    whyItWorks: 'The mix of matte black finishes with warm wood tones creates a sophisticated yet welcoming atmosphere perfect for both cooking and entertaining.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Bohemian Dream Bedroom',
    description: 'A free-spirited bedroom that blends eclectic patterns with rich textures and warm earth tones.',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    style: 'boho',
    roomType: 'bedroom',
    priceRange: 'mid-range',
    paintColors: [
      {
        name: 'Desert Sand',
        brand: 'Benjamin Moore',
        code: 'BM 964',
        hex: '#DCCDB4'
      }
    ],
    furniture: [
      {
        name: 'Rattan Bed Frame',
        type: 'Bed',
        material: 'Natural Rattan',
        brand: 'Anthropologie',
        purchaseUrl: 'https://www.anthropologie.com'
      }
    ],
    decor: {
      rugs: ['Vintage Persian Rug'],
      lighting: ['Moroccan Pendant Light'],
      accessories: ['Macramé Wall Hanging']
    },
    whyItWorks: 'The layered textiles and mixed patterns create a cozy, personal space while the neutral base keeps it from feeling overwhelming.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Minimalist Home Office',
    description: 'A clean, distraction-free workspace that maximizes productivity through thoughtful design.',
    imageUrl: 'https://images.unsplash.com/photo-1486946255434-2466348c2166',
    style: 'minimalist',
    roomType: 'office',
    priceRange: 'budget',
    paintColors: [
      {
        name: 'Simply White',
        brand: 'Benjamin Moore',
        code: 'OC-117',
        hex: '#F4F4F0'
      }
    ],
    furniture: [
      {
        name: 'Standing Desk',
        type: 'Desk',
        material: 'Bamboo',
        brand: 'Fully',
        purchaseUrl: 'https://www.fully.com'
      }
    ],
    decor: {
      lighting: ['LED Desk Lamp'],
      plants: ['Snake Plant'],
    },
    whyItWorks: 'The minimalist approach reduces visual clutter, while ergonomic furniture and proper lighting create an efficient workspace.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Traditional Dining Elegance',
    description: 'A timeless dining room that combines classic elements with contemporary comfort.',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200',
    style: 'traditional',
    roomType: 'dining-room',
    priceRange: 'luxury',
    paintColors: [
      {
        name: 'Revere Pewter',
        brand: 'Benjamin Moore',
        code: 'HC-172',
        hex: '#C4C1B4'
      }
    ],
    furniture: [
      {
        name: 'Mahogany Dining Table',
        type: 'Table',
        material: 'Mahogany',
        brand: 'Ethan Allen',
        purchaseUrl: 'https://www.ethanallen.com'
      }
    ],
    decor: {
      lighting: ['Crystal Chandelier'],
      rugs: ['Oriental Wool Rug'],
    },
    whyItWorks: 'Traditional architectural details and classic furniture pieces create a sophisticated dining space that honors heritage while embracing modern comfort.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Modern Zen Bathroom',
    description: 'A spa-like retreat that brings Japanese minimalism into the modern home.',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    style: 'minimalist',
    roomType: 'bathroom',
    priceRange: 'luxury',
    paintColors: [
      {
        name: 'Stone Harbor',
        brand: 'Benjamin Moore',
        code: '2111-50',
        hex: '#B0A99F'
      }
    ],
    furniture: [
      {
        name: 'Teak Shower Bench',
        type: 'Bench',
        material: 'Teak',
        brand: 'Crate & Barrel',
        purchaseUrl: 'https://www.crateandbarrel.com'
      }
    ],
    decor: {
      accessories: ['Natural Stone Tray'],
      plants: ['Bamboo Plant'],
    },
    whyItWorks: 'Natural materials and a monochromatic color scheme create a calming atmosphere perfect for relaxation.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '7',
    title: 'Industrial Loft Living',
    description: 'An open-concept living space that celebrates raw materials and architectural elements.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    style: 'industrial',
    roomType: 'living-room',
    priceRange: 'mid-range',
    paintColors: [
      {
        name: 'Metropolitan',
        brand: 'Benjamin Moore',
        code: 'AF-690',
        hex: '#C0C0C0'
      }
    ],
    furniture: [
      {
        name: 'Leather Sectional',
        type: 'Sofa',
        material: 'Leather',
        brand: 'CB2',
        purchaseUrl: 'https://www.cb2.com'
      }
    ],
    decor: {
      lighting: ['Factory Pendant Lights'],
      rugs: ['Vintage Overdyed Rug'],
    },
    whyItWorks: 'The combination of exposed brick, metal fixtures, and comfortable modern furniture creates an urban sanctuary that is both stylish and livable.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '8',
    title: 'Scandinavian Kitchen',
    description: 'A bright and functional kitchen that embodies Nordic design principles.',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77',
    style: 'scandinavian',
    roomType: 'kitchen',
    priceRange: 'mid-range',
    paintColors: [
      {
        name: 'Chantilly Lace',
        brand: 'Benjamin Moore',
        code: 'OC-65',
        hex: '#FFFFFF'
      }
    ],
    furniture: [
      {
        name: 'Wishbone Chairs',
        type: 'Chair',
        material: 'Oak and Paper Cord',
        brand: 'Carl Hansen',
        purchaseUrl: 'https://www.carlhansen.com'
      }
    ],
    decor: {
      lighting: ['Glass Globe Pendants'],
      accessories: ['Wooden Serving Boards'],
    },
    whyItWorks: 'Clean lines, natural materials, and abundant light create a welcoming space that is both beautiful and practical.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    title: 'Boho Garden Room',
    description: 'An indoor-outdoor space that brings nature inside with a bohemian twist.',
    imageUrl: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11',
    style: 'boho',
    roomType: 'living-room',
    priceRange: 'budget',
    paintColors: [
      {
        name: 'Swiss Coffee',
        brand: 'Benjamin Moore',
        code: 'OC-45',
        hex: '#E8E3D9'
      }
    ],
    furniture: [
      {
        name: 'Hanging Rattan Chair',
        type: 'Chair',
        material: 'Rattan',
        brand: 'Serena & Lily',
        purchaseUrl: 'https://www.serenaandlily.com'
      }
    ],
    decor: {
      plants: ['Monstera', 'String of Pearls'],
      accessories: ['Vintage Planters'],
    },
    whyItWorks: 'The mix of textures, abundant plants, and natural materials creates a relaxed, organic space that feels like a personal oasis.',
    likes: 0,
    createdAt: new Date().toISOString()
  },
  /* {
    id: '10',
    title: 'Modern Glamour Bedroom',
    description: 'A sophisticated bedroom that balances modern clean lines with luxurious details.',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    style: 'modern',
    roomType: 'bedroom',
    priceRange: 'luxury',
    paintColors: [
      {
        name: 'Kendall Charcoal',
        brand: 'Benjamin Moore',
        code: 'HC-166',
        hex: '#4A4843'
      }
    ],
    furniture: [
      {
        name: 'Upholstered Platform Bed',
        type: 'Bed',
        material: 'Velvet',
        brand: 'RH Modern',
        purchaseUrl: 'https://www.rhmodern.com'
      }
    ],
    decor: {
      lighting: ['Modern Brass Sconces'],
      accessories: ['Mirror Gallery Wall'],
    },
    whyItWorks: 'The dark walls create drama while metallic accents and plush textures add warmth and luxury to the contemporary foundation.',
    likes: 0,
    createdAt: new Date().toISOString()
  } */
];