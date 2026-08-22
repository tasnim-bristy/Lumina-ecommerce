import { ProductSummary } from './product.model';

export interface CartItem {
  id: number;
  product: ProductSummary;
  quantity: number;
  line_total: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
  subtotal: number;
  item_count: number;
}

export interface WishlistItem {
  id: number;
  product: ProductSummary;
  added_at: string;
}
