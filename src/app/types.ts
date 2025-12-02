export type DesignStyle = 'modern' | 'boho' | 'minimalist' | 'industrial' | 'scandinavian' | 'traditional';

export type RoomType = 'bedroom' | 'kitchen' | 'living-room' | 'bathroom' | 'office' | 'dining-room';

export type PriceRange = 'budget' | 'mid-range' | 'luxury';

export interface PaintColor {
  name: string;
  brand: string;
  code: string;
  hex: string;
}

export interface FurnitureItem {
  name: string;
  type: string;
  material: string;
  brand: string;
  price?: number;
  purchaseUrl?: string;
}

export interface Design {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  style: DesignStyle;
  roomType: RoomType;
  priceRange: PriceRange;
  paintColors: PaintColor[];
  furniture: FurnitureItem[];
  decor: {
    rugs?: string[];
    lighting?: string[];
    plants?: string[];
    accessories?: string[];
  };
  whyItWorks: string;
  likes: number;
  createdBy?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  savedDesigns: string[];
}