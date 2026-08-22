<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Stateful Domains
    |--------------------------------------------------------------------------
    |
    | NOTE: Lumina uses Sanctum in pure TOKEN mode — the frontend sends
    | `Authorization: Bearer <token>` on every request, never cookies — so
    | this stateful-domain / CSRF-cookie machinery is not actually exercised
    | anywhere in this app. It's left at Laravel's normal default (driven by
    | SANCTUM_STATEFUL_DOMAINS in .env, which bootstrap/app.php's
    | `$middleware->statefulApi()` call wires up) purely for compatibility —
    | e.g. if a future first-party same-origin client wants cookie auth
    | instead. Nothing in app/Http/Controllers relies on it; every
    | `auth:sanctum` route here is authenticated via the bearer-token guard.
    |
    */

    'stateful' => explode(',', (string) env(
        'SANCTUM_STATEFUL_DOMAINS',
        'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000,::1'
    )),

    /*
    |--------------------------------------------------------------------------
    | Sanctum Guards
    |--------------------------------------------------------------------------
    |
    | This array contains the authentication guards that will be checked when
    | Sanctum is trying to authenticate a request. If none of these guards
    | are able to authenticate the request, Sanctum will use the bearer
    | token that's present on an incoming request for authentication.
    |
    */

    'guard' => ['web'],

    /*
    |--------------------------------------------------------------------------
    | Expiration Minutes
    |--------------------------------------------------------------------------
    |
    | This value controls the number of minutes until an issued token will be
    | considered expired. This will override any values set in the token's
    | "expires_at" attribute, but first-party sessions are not affected.
    | `null` here means tokens never expire on their own (they're revoked
    | explicitly via POST /logout instead).
    |
    */

    'expiration' => null,

    /*
    |--------------------------------------------------------------------------
    | Sanctum Middleware
    |--------------------------------------------------------------------------
    |
    | When authenticating your first-party SPA with Sanctum you may need to
    | customize some of the middleware Sanctum uses while processing the
    | request. You may change the middleware listed below as required.
    |
    */

    'middleware' => [
        'authenticate_session' => Laravel\Sanctum\Http\Middleware\AuthenticateSession::class,
        'encrypt_cookies' => Illuminate\Cookie\Middleware\EncryptCookies::class,
        'validate_csrf_token' => Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
    ],
];
