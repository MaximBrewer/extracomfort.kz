<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Offer extends Model
{
    use HasFactory;
    
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('prices', function (Builder $builder) {
            $builder->with('prices');
            $builder->with('specifications');
        });
    }

    public function prices(): BelongsToMany
    {
        return $this->belongsToMany(Price::class, 'offer_price');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function specifications(): BelongsToMany
    {
        return $this->belongsToMany(Specification::class, 'offer_specification')->withPivot('value');
    }
}
