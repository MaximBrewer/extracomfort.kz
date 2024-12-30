<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Storage;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $arr = parent::toArray($request);

        foreach ($this->categories as $category) {
            if ($category->script) {
                $arr['script'] = $category->script;
                break;
            }
        }

        $arr['stock'] = 'Наличие';
        $arr['offers'] = Offer::collection($this->offers);
        $arr['reviewsCount'] = 12 . ' ' . Lang::choice('отзыв|отзыва|отзывов', 12, [], 'ru');
        $arr['reviews'] = $this->reviews ? Review::collection($this->reviews) : [];
        $arr['similars'] = $this->similars ? ProductTizer::collection($this->similars) : [];
        $arr['relateds'] = $this->relateds ? ProductTizer::collection($this->relateds) : [];
        $arr['images'] = $arr['images'] ? ProductImage::collection($arr['images']) : [];

        $arr['sizes'] = [
            'html' => $arr['sizes_html'],
            'image' => $arr['sizes_image'] ? Storage::url($arr['sizes_image']) : null,
        ];
        $arr['url'] = $this->path;
        return $arr;
    }
}
