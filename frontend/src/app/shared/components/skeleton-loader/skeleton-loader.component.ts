import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

/** Shimmering placeholder blocks shown while a section is still loading. */
@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.scss',
})
export class SkeletonLoaderComponent {
  readonly variant = input<'card' | 'line' | 'image' | 'circle'>('line');
  readonly count = input<number>(1);

  get repeats(): number[] {
    return Array.from({ length: Math.max(1, this.count()) }, (_, i) => i);
  }
}
