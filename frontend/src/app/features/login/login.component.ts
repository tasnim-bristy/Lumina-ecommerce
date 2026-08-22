import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly router = inject(Router);

  email = '';
  password = '';

  readonly submitting = signal(false);
  readonly error = signal<string | null>(null);

  submit(): void {
    if (!this.email || !this.password || this.submitting()) return;
    this.submitting.set(true);
    this.error.set(null);

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        // Fold the guest's cart/wishlist into the newly authenticated account
        // before landing on the homepage.
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
      error: () => {
        this.submitting.set(false);
        this.error.set('That email and password combination doesn\'t match an account.');
      },
    });
  }
}
