<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    /**
     * Interact with the user's balance.
     */
    protected function value(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => (int)$value / 100,
            set: fn ($value) => (float)$value * 100,
        );
    }

    /**
     * Interact with the user's balance.
     */
    protected function rate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => (int)$value / 100,
            set: fn ($value) => (float)$value * 100,
        );
    }
}
