<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{
    use HasFactory, NodeTrait, SoftDeletes;

    protected $perPage = 250;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Default sort by created_at desc.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('order');
        });
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function accountingIds(): MorphMany
    {
        return $this->morphMany(AccountingId::class, 'entity');
    }

    protected function path(): Attribute
    {
        return Attribute::make(
            get: fn () => str_replace('/tovary', '', "/catalog/" . implode("/", $this->ancestors->map(fn ($c) => $c->slug)->toArray())) . '/' . $this->slug
        );
    }
}
