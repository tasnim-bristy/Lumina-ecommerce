import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

/** Current price, with an optional struck-through compare-at price and a sale badge. */
@Component({
  selector: 'app-price-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-tag.component.html',
  styleUrl: './price-tag.component.scss',
})
export class PriceTagComponent {
  readonly price = input.required<number>();
  readonly compareAtPrice = input<number | null>(null);
  readonly currency = input<string>('BDT');
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  readonly isOnSale = computed(() => {
    const compareAt = this.compareAtPrice();
    return compareAt != null && compareAt > this.price();
  });

  readonly discountPercent = computed(() => {
    const compareAt = this.compareAtPrice();
    if (compareAt == null || compareAt <= this.price()) return 0;
    return Math.round(((compareAt - this.price()) / compareAt) * 100);
  });

  formatted(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: this.currency() || 'BDT',
      // 'symbol' (the default) would render the ISO code ("BDT 6,500") since
      // Intl's wide symbol for BDT is unset — 'narrowSymbol' is what actually
      // resolves to the ৳ glyph. Whole-Taka amounts (no paisa) read more
      // naturally for casual retail pricing than 2 decimal places.
      currencyDisplay: 'narrowSymbol',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
