<?php

namespace App\Http\Resources;

use App\Models\Facet;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class Specification extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        global $categoryPath;

        $id =  $this->id;

        if ($categoryPath) {
            $values = DB::table('facets')
                ->select(['specification_value', 'specification_value_num'])
                ->distinct()
                ->where(function (QueryBuilder $query) use ($categoryPath, $id) {
                    $query->where('path', 'like', $categoryPath . '%');
                })
                ->where('specification_id', $id)
                ->orderBy('specification_value_num')
                ->orderBy('specification_value')
                ->pluck('specification_value');
        } else {
            $values = $this->values;
        }

        $arr = parent::toArray($request);
        $arr['values'] = $values;
        return $arr;
    }
}
