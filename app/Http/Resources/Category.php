<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use TCG\Voyager\Facades\Voyager;

class Category extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $arr = parent::toArray($request);
        $arr['url'] = $this->path;
        $arr['children'] = self::collection($this->children);
        $arr['icon'] = $arr['icon'] ? Voyager::image($arr['icon']) : "";
        $arr['icondark'] = $arr['icondark'] ? Voyager::image($arr['icondark']) : "";
        $arr['bg'] = $arr['bg'] ? Voyager::image($arr['bg']) : "";
        return $arr;
    }
}
