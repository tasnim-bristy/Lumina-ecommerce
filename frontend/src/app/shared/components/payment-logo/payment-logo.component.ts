import { Component, input } from '@angular/core';
import { CardNetwork } from '../../../core/models/payment-method.model';

export type PaymentLogoBrand = CardNetwork | 'bkash' | 'nagad' | 'rocket';

/**
 * Small brand-colored mark for a payment method — hand-drawn (colour +
 * wordmark, or Mastercard's interlocking circles) rather than a downloaded
 * logo file, so it stays crisp at any size and matches the site's own type
 * and radius tokens exactly.
 */
@Component({
  selector: 'app-payment-logo',
  standalone: true,
  templateUrl: './payment-logo.component.html',
  styleUrl: './payment-logo.component.scss',
})
export class PaymentLogoComponent {
  readonly brand = input.required<PaymentLogoBrand>();
}
