<?php

namespace App\Http\Resources;

use App\Http\Resources\City;
use App\Models\City as ModelsCity;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class User extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = 'user';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $array = parent::toArray($request);
        $array['fio'] = $this->fio ?: 'Имя не указано';
        $array['phone'] = $this->name;
        $array['rating'] = 4.5;
        $array['reviewsCount'] = 124;
        $array['title'] = $this->title ?: 'Наименование компании не указано';
        $array['avatar'] = $this->avatar ? Storage::url($this->avatar) : null;
        $array['logotip'] = $this->logotip ? Storage::url($this->logotip) : null;
        $array['city'] = new City($this->city ?: ModelsCity::default());
        $array['shop'] = $this->shop ? new Shop($this->shop) : null;
        $array['shops'] = $this->shops ? Shop::collection($this->shops) : [];
        return $array;
    }
}
