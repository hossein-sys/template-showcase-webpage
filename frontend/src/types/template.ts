export type SortOption = 'popular' | 'rating' | 'newest';

export type TemplateCategory =
  | 'All Templates'
  | 'E-commerce'
  | 'Corporate & Agency'
  | 'SaaS & Tech'
  | 'Restaurant & Food'
  | 'Services';

export interface Template {
  id: string;
  title: string;
  titleFa?: string;
  category: string;
  categoryFa?: string;
  description: string;
  descriptionFa?: string;
  previewImage: string;
  liveDemoUrl: string;
  tags: string[];
  tagsFa?: string[];
  rating: number;
  reviewsCount?: number;
  isPopular: boolean;
  price: number | 'Free';
  createdAt?: string; // ISO date format for chronological sorting
}
