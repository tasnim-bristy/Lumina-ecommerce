export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  parent_id: number | null;
  hero_image?: string;
  children?: Category[];
}
