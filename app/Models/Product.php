<?php

namespace App\Models;

use App\Casts\MultipleImages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $perPage = 50;

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
            $builder->orderBy('viewed', 'desc');
            // $builder->with('similars');
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
        return $this->hasMany(Review::class)->where('published', 1);
    }

    public function similars(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_similar', 'product_id', 'similar_id');
    }

    public function relateds(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_related', 'product_id', 'related_id');
    }

    public function images()
    {
        return $this->morphMany(ProductImage::class, 'entity');
    }

    public function optionValues()
    {
        return $this->belongsToMany(OptionValue::class, 'product_option_value');
    }

    protected function path(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->category ? str_replace('/tovary', '', "/catalog/" . implode("/", $this->category->ancestors->map(fn ($c) => $c->slug)->toArray())) . '/' . $this->category->slug . '/' . $this->slug : '/'
        );
    }
}
