<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cart extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('withItems', function (Builder $builder) {
            $builder->with('items');
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    protected function sum(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => (int)$value / 100,
            set: fn ($value) => $value * 100,
        );
    }

    public function calc(): void
    {
        $sum = 0;
        $quantity = 0;
        foreach ($this->items as $item) {
            $quantity += $item->quantity;
            $sum += $item->price * $item->quantity;
        }
        $this->sum = $sum;
        $this->quantity = $quantity;
        $this->saveQuietly();
    }
}
