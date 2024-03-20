<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Termin extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'facility_id',
        'message',
    ];


    public function facility(): BelongsTo
    {
        return $this->belongsTo(Facility::class);
    }
}
