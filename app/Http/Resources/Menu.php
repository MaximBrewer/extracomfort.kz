<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Menu extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $array = [
            'name' => $this->name
        ];
        $array['items'] = MenuItem::collection($this->parent_items()->with('children')->orderBy('order')->get());
        return $array;
    }
}
