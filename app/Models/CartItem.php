<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('withOffer', function (Builder $builder) {
            $builder->with('offer');
        });
    }

    public function offer(): BelongsTo
    {
        return $this->belongsTo(Offer::class)->with('product');
    }

    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }

    protected function price(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => (int)$value / 100,
            set: fn ($value) => $value * 100,
        );
    }
}
