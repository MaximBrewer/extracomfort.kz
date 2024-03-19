<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacilityReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'rate',
        'facility_id',
        'name',
        'email',
        'text'
    ];
}
