<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OptionValue extends Model
{
    use HasFactory;
    /**
     * Interact with the user's balance.
     */
    public function option(): BelongsTo
    {
        return $this->belongsTo(Option::class);
    }
}