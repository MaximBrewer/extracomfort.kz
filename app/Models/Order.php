<?php

namespace App\Models;

use App\Traits\Status;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory, Status;

    public static $statuses = [
        0 => 'NEW',
        10 => 'PROCESSING',
        // 25 => 'ASSIGNED',
        50 => 'PAYED',
        75 => 'DELIVERING',
        100 => 'DELIVERED',
        500 => 'CANCELED',
    ];

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
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeArchive($query)
    {
        return $query->where('status_id', '>=', 100);
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCurrent($query)
    {
        return $query->where('status_id', '<', 100);
    }

    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class);
    }

    public function histories(): HasMany
    {
        return $this->hasMany(OrderHistory::class, 'order_id');
    }

    protected function paymentMethod(): Attribute
    {
        return Attribute::make(
            get: fn () => self::$paymentMethods[$this->payment_id],
        );
    }

    protected function deliveryMethod(): Attribute
    {
        return Attribute::make(
            get: fn () => self::$deliveryMethods[$this->delivery_id],
        );
    }
}
