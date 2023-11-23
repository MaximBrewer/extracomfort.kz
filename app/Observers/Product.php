<?php

namespace App\Observers;

use App\Models\Facet;
use App\Models\Product as ModelsProduct;

class Product
{
    public function created(ModelsProduct $model)
    {
        $this->setFacets($model);
        $this->setMinPrice($model);
    }

    public function updated(ModelsProduct $model)
    {
        $this->setFacets($model);
        $this->setMinPrice($model);
    }

    private function setMinPrice(ModelsProduct $model)
    {

        $minPrice = 1000000000;
        foreach ($model->offers as $offer) {
            foreach ($offer->prices as $price) {
                $minPrice = $minPrice > $price->value ? $price->value : $minPrice;
            }
        }
        if ($minPrice < 1000000000) {
            $model->min_price = $minPrice;
            $model->saveQuietly();
        }
    }

    public function deleted(ModelsProduct $model)
    {
        foreach (Facet::where('product_id', $model->id) as $facet)  $facet->delete();
    }

    private function setFacets(ModelsProduct $model)
    {
        Facet::firstOrCreate([
            'path' => $model->path,
            'product_id' => $model->id
        ]);
    }
}
