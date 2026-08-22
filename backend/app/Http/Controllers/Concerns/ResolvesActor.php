<?php

namespace App\Http\Controllers\Concerns;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * Resolves "the current actor" for endpoints that must work for both logged-in
 * users and anonymous guests (cart, wishlist, recommendations, checkout).
 *
 * Per API_CONTRACT.md, every request may carry:
 *   - Authorization: Bearer <token>  (once logged in)
 *   - X-Guest-Token: <uuid>          (always, client-generated on first load)
 *
 * A user, when authenticated, always takes precedence over the guest token —
 * this is what lets `/cart/merge` and `/wishlist/merge` fold guest-owned rows
 * into the now-authenticated account.
 */
trait ResolvesActor
{
    /**
     * Resolve the authenticated user for this request, if any, WITHOUT
     * requiring authentication. Deliberately bypasses the `auth:sanctum`
     * middleware (which would 401 guests) — routes that must work for guests
     * never carry that middleware, they just call this instead.
     */
    protected function actorUser(Request $request): ?User
    {
        return $request->user('sanctum');
    }

    protected function guestToken(Request $request): ?string
    {
        $token = $request->header('X-Guest-Token');

        return is_string($token) && trim($token) !== '' ? trim($token) : null;
    }

    /**
     * The actor's identity as a column => value pair, ready to spread into a
     * where() clause or a model-creation array. Exactly one of the two values
     * is non-null.
     *
     * @throws HttpException 422 when neither an authenticated user nor a guest
     *                        token is present — the contract guarantees one of
     *                        them always is, so this only fires on malformed
     *                        clients/tools (e.g. hand-rolled requests in tests).
     */
    protected function actorIdentity(Request $request, string $userColumn = 'user_id', string $guestColumn = 'guest_token'): array
    {
        if ($user = $this->actorUser($request)) {
            return [$userColumn => $user->id, $guestColumn => null];
        }

        if ($guestToken = $this->guestToken($request)) {
            return [$userColumn => null, $guestColumn => $guestToken];
        }

        abort(422, 'An X-Guest-Token header is required for guest requests.');
    }

    /**
     * Scope an Eloquent query to rows owned by the current actor.
     */
    protected function scopeToActor(Builder $query, Request $request, string $userColumn = 'user_id', string $guestColumn = 'guest_token'): Builder
    {
        $identity = $this->actorIdentity($request, $userColumn, $guestColumn);

        if ($identity[$userColumn] !== null) {
            return $query->where($userColumn, $identity[$userColumn]);
        }

        return $query->whereNull($userColumn)->where($guestColumn, $identity[$guestColumn]);
    }
}
