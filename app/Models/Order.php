<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lastname',
        'phone',
        'email',
        'comment',
        'delivery_id',
        'region',
        'city',
        'street',
        'house',
        'appartement',
        'payment_id'
    ];

    protected static $paymentMethods = [
        1 => 'Наличными',
        2 => 'Оплата картой',
        3 => 'Оплата картой онлайн'
    ];

    protected static $deliveryMethods = [
        1 => 'Доставка',
        2 => 'Самовывоз',
    ];


    /**
     * Default sort by created_at desc.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderByDesc('id');
        });
    }
    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeArchive($query)
    {
        return $query->whereHas('status', function (Builder $query) {
            $query->where('order', 1000);
        })->whereHas('cart')->with('cart');
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCurrent($query)
    {
        return $query->whereHas('status', function (Builder $query) {
            $query->where('order', '<', 1000);
        })->whereHas('cart')->with('cart');
    }

    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function histories(): HasMany
    {
        return $this->hasMany(OrderHistory::class, 'order_id');
    }

    protected function paymentMethod(): Attribute
    {
        return Attribute::make(
            get: fn () => isset(self::$paymentMethods[$this->payment_id]) ? self::$paymentMethods[$this->payment_id] : 'Уточнить',
        );
    }

    protected function deliveryMethod(): Attribute
    {
        return Attribute::make(
            get: fn () => isset(self::$deliveryMethods[$this->delivery_id]) ? self::$deliveryMethods[$this->delivery_id] : 'Уточнить',
        );
    }
}
