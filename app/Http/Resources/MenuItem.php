<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MenuItem extends JsonResource
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
            'title' => $this->title,
            'link' => $this->link(),
            'target' => $this->target,
            'children' => self::collection($this->children()->with('children')->get()),
        ];
        return $array;
    }
}
