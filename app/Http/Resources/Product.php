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
        $sizes = [];
        $arrSizeNames = ['sizes_men', 'sizes_women', 'sizes_boyteen', 'sizes_girlteen', 'sizes_boy', 'sizes_girl', 'sizes_boybaby', 'sizes_girlbaby'];
        $arrSizeTitles = ['Мужчины', 'Женщины', 'Юноши', 'Девушки', 'Мальчики', 'Девочки', 'Малыши', 'Малышки'];
        foreach ($arrSizeNames as $tdx => $t) {
            if ($this->category->{$t}) {
                $sizes[] = [
                    'code' => $t,
                    'image' => Storage::url($this->category->{$t}),
                    'title' => $arrSizeTitles[$tdx]
                ];
            } elseif ($this->category->parent && $this->category->parent->{$t}) {
                $sizes[] = [
                    'code' => $t,
                    'image' => Storage::url($this->category->parent->{$t}),
                    'title' => $arrSizeTitles[$tdx]
                ];
            } elseif ($this->category->parent && $this->category->parent->parent && $this->category->parent->parent->{$t}) {
                $sizes[] = [
                    'code' => $t,
                    'image' => Storage::url($this->category->parent->parent->{$t}),
                    'title' => $arrSizeTitles[$tdx]
                ];
            }
        }
        $arr = parent::toArray($request);
        $arr['stock'] = 'Наличие';
        $arr['offers'] = Offer::collection($this->offers);
        $arr['reviewsCount'] = 12 . ' ' . Lang::choice('отзыв|отзыва|отзывов', 12, [], 'ru');
        $arr['reviews'] = Review::collection($this->reviews);
        $arr['similars'] = ProductTizer::collection($this->similars);
        
        $arr['sizes'] = $sizes;
        return $arr;
    }
}
