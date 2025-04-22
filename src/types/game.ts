export interface Game {
  id: number;
  name: string;
  slug: string;
  provider: string;
  imageUrl: string;
  description: string;
  category: string;
  rating: number;
  isAvailable: boolean;
  demoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
