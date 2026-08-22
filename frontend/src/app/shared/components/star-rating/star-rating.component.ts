import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

/** Read-only star display used on cards, detail pages, and review lists. */
@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StarRatingComponent {
  readonly rating = input<number>(0);
  readonly count = input<number | null>(null);
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  readonly roundedRating = computed(() => Math.round(this.rating() * 2) / 2);
}
