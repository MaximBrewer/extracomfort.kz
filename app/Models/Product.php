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
            $builder->with('categories');
            $builder->with('images');
            $builder->orderByDesc('quantity');
            $builder->orderByDesc('viewed');
            // $builder->with('similars');
        });
    }

    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePromo(Builder $query)
    {
        return $query->where('promo', 1);
    }

    /**
     * Scope a query to only published scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNovelty(Builder $query)
    {
        return $query->where('novelty', 1);
    }



    protected $casts = [
        'images' => MultipleImages::class,
    ];

    public function getRouteKeyName()
    {
        return 'id';
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_category');
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
            get: fn () => !$this->categories->count() ? '' : ($this->categories[0] ? str_replace('/tovary', '', "/catalog/" . implode("/", $this->categories[0]->ancestors->map(fn ($c) => $c->slug)->toArray())) . '/' . $this->categories[0]->slug . '/' . $this->slug : '/')
        );
    }

    protected function pathes(): Attribute
    {
        return Attribute::make(
            get: function () {
                $pathes = [];
                foreach ($this->categories as $category) {
                    $pathes[] = $category ? str_replace('/tovary', '', "/catalog/" . implode("/", $category->ancestors->map(fn ($c) => $c->slug)->toArray())) . '/' . $category->slug . '/' . $this->slug : '/';
                }
                return $pathes;
            }
        );
    }
}
