<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Option extends Model
{
    use HasFactory;
    /**
     * Interact with the user's balance.
     */
    public function values(): HasMany
    {
        return $this->hasMany(OptionValue::class);
    }
}
