import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { BANGLADESH_DIVISIONS } from '../../core/data/bangladesh-geo.data';
import { Order, PaymentMethod, ShippingAddress } from '../../core/models/order.model';
import { PAYMENT_METHODS, PaymentMethodOption } from '../../core/models/payment-method.model';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { PaymentLogoComponent } from '../../shared/components/payment-logo/payment-logo.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';

const BD_MOBILE_NUMBER_PATTERN = /^01\d{9}$/;
const BD_POSTAL_CODE_PATTERN = /^\d{4}$/;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    EmptyStateComponent,
    SkeletonLoaderComponent,
    ScrollRevealDirective,
    PaymentLogoComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutComponent {
  readonly cartService = inject(CartService);
  private readonly orderService = inject(OrderService);
  private readonly authService = inject(AuthService);

  readonly paymentMethods = PAYMENT_METHODS;

  readonly divisions = BANGLADESH_DIVISIONS;

  readonly shippingAddress: ShippingAddress = {
    full_name: '',
    mobile_number: '',
    division: '',
    district: '',
    upazila: '',
    area: '',
    address: '',
    postal_code: '',
    country: 'Bangladesh',
  };

  /** Mirrors shippingAddress.division/district, kept as signals purely so the
   *  district/upazila option lists below can be `computed()` from them —
   *  the rest of shippingAddress stays a plain mutated object like before. */
  private readonly selectedDivisionName = signal('');
  private readonly selectedDistrictName = signal('');

  readonly availableDistricts = computed(
    () => this.divisions.find((d) => d.name === this.selectedDivisionName())?.districts ?? [],
  );
  readonly availableUpazilas = computed(
    () => this.availableDistricts().find((d) => d.name === this.selectedDistrictName())?.upazilas ?? [],
  );

  onDivisionChange(division: string): void {
    this.selectedDivisionName.set(division);
    this.selectedDistrictName.set('');
    this.shippingAddress.division = division;
    this.shippingAddress.district = '';
    this.shippingAddress.upazila = '';
  }

  onDistrictChange(district: string): void {
    this.selectedDistrictName.set(district);
    this.shippingAddress.district = district;
    this.shippingAddress.upazila = '';
  }

  readonly paymentMethod = signal<PaymentMethod>('bkash');

  readonly selectedMethod = computed<PaymentMethodOption>(
    () => this.paymentMethods.find((m) => m.id === this.paymentMethod())!,
  );
  readonly showCardFields = computed(() => this.selectedMethod().category === 'card');
  readonly showWalletField = computed(() => this.selectedMethod().category === 'mobile-wallet');

  /** Brief `.pulse-once` cue on the just-selected payment option — a plain
   *  CSS `:active` state doesn't give enough tactile feedback here. */
  readonly justSelectedPayment = signal<PaymentMethod | null>(null);

  // Purely cosmetic mock fields — not part of the CheckoutPayload sent to the
  // API, which only carries `payment_method`. There is no real payment
  // gateway integration here by design (see PAYMENT_METHODS' doc comment for
  // where a real one would plug in).
  mockCardNumber = '';
  mockCardExpiry = '';
  mockCardCvc = '';
  mockWalletNumber = '';

  readonly submitting = signal(false);
  readonly submitError = signal<string | null>(null);
  readonly confirmedOrder = signal<Order | null>(null);

  readonly pastOrders = signal<Order[]>([]);
  readonly pastOrdersLoading = signal(false);

  get isFormValid(): boolean {
    const address = this.shippingAddress;
    const addressComplete =
      !!address.full_name.trim() &&
      BD_MOBILE_NUMBER_PATTERN.test(address.mobile_number.trim()) &&
      !!address.division &&
      !!address.district &&
      !!address.upazila &&
      !!address.area.trim() &&
      !!address.address.trim() &&
      BD_POSTAL_CODE_PATTERN.test(address.postal_code.trim());
    if (!addressComplete) return false;

    switch (this.selectedMethod().category) {
      case 'card':
        return this.mockCardNumber.trim().length >= 12 && this.mockCardExpiry.trim().length >= 4 && this.mockCardCvc.trim().length >= 3;
      case 'mobile-wallet':
        return BD_MOBILE_NUMBER_PATTERN.test(this.mockWalletNumber.trim());
      default:
        return true;
    }
  }

  setPaymentMethod(method: PaymentMethod): void {
    this.paymentMethod.set(method);
    this.justSelectedPayment.set(method);
    setTimeout(() => this.justSelectedPayment.set(null), 400);
  }

  placeOrder(): void {
    if (!this.isFormValid || this.submitting()) return;
    this.submitting.set(true);
    this.submitError.set(null);

    this.orderService.checkout({ shipping_address: this.shippingAddress, payment_method: this.paymentMethod() }).subscribe({
      next: (order) => {
        this.submitting.set(false);
        this.confirmedOrder.set(order);
        this.cartService.refresh().subscribe();
        if (this.authService.isAuthenticated()) {
          this.loadPastOrders();
        }
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set("We couldn't place your order. Please check your details and try again.");
      },
    });
  }

  paymentLabelFor(method: PaymentMethod): string {
    return this.paymentMethods.find((m) => m.id === method)?.label ?? method;
  }

  private loadPastOrders(): void {
    this.pastOrdersLoading.set(true);
    this.orderService.list().subscribe({
      next: (orders) => {
        this.pastOrders.set(orders);
        this.pastOrdersLoading.set(false);
      },
      error: () => this.pastOrdersLoading.set(false),
    });
  }
}
