import { CartItem } from './cart.model';

/** Bangladesh-specific shipping address — the storefront only ships within
 *  Bangladesh, so `country` is fixed rather than a free-text field. */
export interface ShippingAddress {
  full_name: string;
  mobile_number: string;
  division: string;
  district: string;
  upazila: string;
  area: string;
  address: string;
  postal_code: string;
  country: 'Bangladesh';
}

/** Mirrors backend/config/payment_methods.php's keys exactly — keep both in sync. */
export type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'card' | 'cash_on_delivery';

export interface CheckoutPayload {
  shipping_address: ShippingAddress;
  payment_method: PaymentMethod;
}

export interface Order {
  id: number;
  status: string;
  total: number;
  payment_method: PaymentMethod;
  created_at: string;
  items?: CartItem[];
  shipping_address?: ShippingAddress;
}
