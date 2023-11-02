<?php

namespace App\Models;

use App\Casts\MultipleImages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $perPage = 250;

    /**
     * Default sort by created_at desc.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('offers', function (Builder $builder) {
            $builder->with('offers');
            $builder->with('category');
            $builder->with('images');
        });
    }

    protected $casts = [
        'images' => MultipleImages::class,
    ];

    public function getRouteKeyName()
    {
        return 'id';
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function offers(): HasMany
    {
        return $this->hasMany(Offer::class);
    }


    public function facets(): HasMany
    {
        return $this->hasMany(Facet::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function similars(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_similar');
    }

    public function relateds(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_related');
    }

    public function images()
    {
        return $this->morphMany(ProductImage::class, 'entity');
    }
}
