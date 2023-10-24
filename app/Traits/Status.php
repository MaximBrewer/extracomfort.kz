<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait Status
{
    final static function getStatusesArray()
    {
        if (empty(self::class::$statuses)) {
            throw new \Exception('$statuses must be defined in ' . __CLASS__);
        }
        return self::class::$statuses;
    }

    protected function status(): Attribute
    {
        return Attribute::make(
            get: fn () => self::class::$statuses[(int)$this->status_id]
        );
    }

    public function setStatus($status)
    {
        $this->forceFill(['status_id' => array_search($status, self::class::$statuses)])->save();
    }

    public static function getStatusId($status_id)
    {
        return array_search($status_id, self::class::$statuses);
    }
}
