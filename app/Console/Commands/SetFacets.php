<?php

namespace App\Console\Commands;

use App\Models\Facet;
use App\Models\Product;
use Illuminate\Console\Command;

class SetFacets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:set-facets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        foreach (Product::all() as $model) {
            foreach ($model->offers as $offer) {
                foreach ($offer->specifications as $specification) {

                    $category = null;
                    $subcategory = null;
                    $subsubcategory = null;
                    if ($model->category) {
                        if ($model->category->parent && $model->category->parent->parent) {
                            $category = $model->category->parent->parent->id;
                            $subcategory = $model->category->parent->id;
                            $subsubcategory = $model->category->id;
                        } elseif ($model->category->parent) {
                            $category = $model->category->parent->id;
                            $subcategory = $model->category->id;
                        } else {
                            $category = $model->category->id;
                        }
                    }
                    Facet::firstOrCreate([
                        'category_id' => $category,
                        'subcategory_id' => $subcategory,
                        'subsubcategory_id' => $subsubcategory,
                        'product_id' => $model->id,
                        'offer_id' => $offer->id,
                        'specification_id' => $specification->id,
                        'specification_accounting_id' => $specification->accounting_id,
                        'specification_value' => $specification->pivot->value,
                        'specification_value_num' => (float)$specification->pivot->value * 10000,
                    ]);
                }
            }
        }
    }
}


// $table->unsignedBigInteger('specification_id');
// $table->string('specification_value');
// $table->unsignedBigInteger('specification_value_num');