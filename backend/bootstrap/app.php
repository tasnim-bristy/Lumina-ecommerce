<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Auth here is Sanctum personal access tokens (Authorization: Bearer
        // <token>) plus a client-generated X-Guest-Token header for guests —
        // never cookies (see config/cors.php: supports_credentials is false).
        // statefulApi() enables Sanctum's cookie/CSRF-based SPA mode, which
        // this app never opts into on the frontend (no /sanctum/csrf-cookie
        // call, no credentials on requests) — with it enabled, the browser's
        // Origin header alone was enough for Sanctum to demand a CSRF token
        // that never arrives, so every state-changing request (add to cart,
        // etc.) failed with 419. Omitted entirely rather than added and
        // worked around, since this API doesn't use cookie-based sessions.

        $middleware->api(prepend: [
            \App\Http\Middleware\ForceJsonResponse::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
