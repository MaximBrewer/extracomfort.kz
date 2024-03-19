<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Facility extends Model
{
    use HasFactory;

    protected $perPage = 250;

    /**
     * Default sort by created_at desc.
     *
     * @return void
     */

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

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Facility::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Facility::class, 'parent_id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(FacilityReview::class)->where('published', 1);
    }
}
