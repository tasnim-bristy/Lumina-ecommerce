import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Consistent empty/error placeholder for catalog results, cart, wishlist, orders, etc. */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmptyStateComponent {
  readonly icon = input<string>('inbox');
  readonly title = input.required<string>();
  readonly message = input<string>('');
  readonly actionLabel = input<string>('');
  readonly actionRoute = input<string>('');
}
