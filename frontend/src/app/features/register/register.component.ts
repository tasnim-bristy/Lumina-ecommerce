import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly router = inject(Router);

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  readonly submitting = signal(false);
  readonly error = signal<string | null>(null);

  readonly passwordsMatch = computed(() => this.password === this.confirmPassword);
  readonly canSubmit = computed(
    () =>
      !!this.name &&
      !!this.email &&
      this.password.length >= 8 &&
      this.passwordsMatch() &&
      !this.submitting(),
  );

  submit(): void {
    if (!this.canSubmit()) return;
    this.submitting.set(true);
    this.error.set(null);

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: () => {
        forkJoin([this.cartService.mergeGuestCart(), this.wishlistService.mergeGuestWishlist()]).subscribe({
          next: () => {
            this.submitting.set(false);
            this.router.navigate(['/']);
          },
          error: () => {
            this.submitting.set(false);
            this.router.navigate(['/']);
          },
        });
      },
      error: (err) => {
        this.submitting.set(false);
        const message = err?.error?.message ?? 'We could not create your account. Please check your details and try again.';
        this.error.set(message);
      },
    });
  }
}
