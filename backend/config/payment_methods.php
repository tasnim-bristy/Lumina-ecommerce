<?php

/**
 * Source of truth for what's offered at checkout — mirrored on the frontend
 * in src/app/core/models/payment-method.model.ts (keep both in sync).
 *
 * To wire a method to a real gateway later: add its credentials/config under
 * that method's 'gateway' key and branch on it in CheckoutController — the
 * key, validation, and frontend selection UI don't need to change.
 */
return [
    'bkash' => [
        'label' => 'bKash',
        'category' => 'mobile-wallet',
        'gateway' => null,
    ],
    'nagad' => [
        'label' => 'Nagad',
        'category' => 'mobile-wallet',
        'gateway' => null,
    ],
    'rocket' => [
        'label' => 'Rocket',
        'category' => 'mobile-wallet',
        'gateway' => null,
    ],
    'card' => [
        'label' => 'Debit / Credit Card',
        'category' => 'card',
        'networks' => ['visa', 'mastercard', 'amex'],
        'gateway' => null,
    ],
    'cash_on_delivery' => [
        'label' => 'Cash on Delivery',
        'category' => 'cod',
        'gateway' => null,
    ],
];
