import { PaymentMethod } from './order.model';

export type CardNetwork = 'visa' | 'mastercard' | 'amex';

export interface PaymentMethodOption {
  readonly id: PaymentMethod;
  readonly label: string;
  readonly description: string;
  readonly category: 'mobile-wallet' | 'card' | 'cod';
  /** Only set for the 'card' option — the networks shown on its tile. */
  readonly networks?: readonly CardNetwork[];
}

/**
 * Single source of truth for what's offered at checkout, mirroring
 * backend/config/payment_methods.php exactly. Connecting any of these to a
 * real gateway later means wiring its case in CheckoutComponent.placeOrder()
 * (e.g. redirecting to bKash's checkout URL, mounting a card SDK) — this
 * list, the selectable-card markup, and the styling don't need to change.
 */
export const PAYMENT_METHODS: readonly PaymentMethodOption[] = [
  {
    id: 'bkash',
    label: 'bKash',
    description: 'Pay instantly from your bKash account',
    category: 'mobile-wallet',
  },
  {
    id: 'nagad',
    label: 'Nagad',
    description: 'Pay instantly from your Nagad account',
    category: 'mobile-wallet',
  },
  {
    id: 'rocket',
    label: 'Rocket',
    description: 'Pay instantly from your Rocket account',
    category: 'mobile-wallet',
  },
  {
    id: 'card',
    label: 'Debit / Credit Card',
    description: 'Visa, Mastercard & American Express',
    category: 'card',
    networks: ['visa', 'mastercard', 'amex'],
  },
  {
    id: 'cash_on_delivery',
    label: 'Cash on Delivery',
    description: 'Pay in cash when your order arrives',
    category: 'cod',
  },
];
