<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Specification extends Model
{
    use HasFactory;
    /**
     * Interact with the user's balance.
     */
    protected function values(): Attribute
    {
        return Attribute::make(
            get: function () {
                return DB::table('offer_specification')->where('specification_id', $this->id)->groupBy('value')->orderBy('value')->pluck('value');
            },
        );
    }
}
