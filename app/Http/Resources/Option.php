<?php

namespace App\Http\Resources;

use App\Models\Facet;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class Option extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $arr['values'] = array_map(function ($item) {
        //     return $item->title;
        // }, iterator_to_array($this->values));

        global $categoryPath;

        $id =  $this->id;

        if ($categoryPath) {
            $values = DB::table('facets')
                ->select(['facets.option_id', 'facets.option_value_id', 'option_values.title', 'option_values.order'])
                ->leftJoin('option_values', 'facets.option_value_id', '=', 'option_values.id')
                ->distinct()
                ->where(function (QueryBuilder $query) use ($categoryPath, $id) {
                    $query->where('path', 'like', $categoryPath . '%');
                })
                ->where('facets.option_id', $id)
                ->orderBy('option_values.order')
                ->pluck('option_values.title');
        } else {
            $values = $this->values;
        }

        $arr = parent::toArray($request);
        $arr['values'] = $values;

        return $arr;
    }
}
