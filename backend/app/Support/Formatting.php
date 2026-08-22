<?php

namespace App\Support;

use Carbon\CarbonInterface;

class Formatting
{
    /**
     * The contract's timestamps are plain UTC ISO-8601 with a literal "Z" suffix
     * and no fractional seconds (e.g. "2026-05-01T10:00:00Z"), which differs from
     * Carbon's default JSON serialization (microseconds included). Every resource
     * that emits a timestamp should go through this helper so the shape stays
     * identical across the whole API.
     */
    public static function isoDate(?CarbonInterface $date): ?string
    {
        return $date?->clone()->utc()->format('Y-m-d\TH:i:s\Z');
    }
}
