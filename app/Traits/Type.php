<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait Type
{
    final static function getTypesArray()
    {
        if (empty(self::class::$types)) {
            throw new \Exception('$types must be defined in ' . __CLASS__);
        }
        return self::class::$types;
    }

    protected function type(): Attribute
    {
        return Attribute::make(
            get: fn () => self::class::$types[(int)$this->type_id]
        );
    }

    public function setType($type)
    {
        $this->forceFill(['type_id' => array_search($type, self::class::$types)])->save();
    }

    public static function getTypeId($type_id)
    {
        return array_search($type_id, self::class::$types);
    }
}
