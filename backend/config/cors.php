<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | The Angular + UI5 frontend is served from a completely different origin
    | (a separate dev server / deployment), so every /api/* request is
    | cross-origin. Auth is Sanctum PERSONAL ACCESS TOKENS sent as a plain
    | `Authorization: Bearer <token>` header — not cookies — which is exactly
    | why `supports_credentials` is false below: token auth needs no cookies,
    | so there's no CSRF/cookie-domain dance to configure.
    |
    */

    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    // FRONTEND_URL may be a comma-separated list (e.g. local dev + a deployed
    // preview URL). Falls back to the default Angular CLI dev server port.
    'allowed_origins' => array_filter(array_map(
        'trim',
        explode(',', env('FRONTEND_URL', 'http://localhost:4200'))
    )),

    'allowed_origins_patterns' => [],

    // Authorization carries the Sanctum bearer token; X-Guest-Token carries
    // the client-generated guest identity (see API_CONTRACT.md's auth model).
    'allowed_headers' => [
        'Authorization',
        'Accept',
        'Content-Type',
        'X-Requested-With',
        'X-Guest-Token',
    ],

    'exposed_headers' => [],

    'max_age' => 0,

    // Token auth, not cookie/session auth — no credentials (cookies) ever
    // cross the wire, so this must stay false.
    'supports_credentials' => false,
];
