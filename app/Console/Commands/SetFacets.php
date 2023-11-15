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
                Facet::firstOrCreate([
                    'path' => $model->path,
                    'product_id' => $model->id,
                    'offer_id' => $offer->id
                ]);
                foreach ($offer->specifications as $specification) {
                    Facet::firstOrCreate([
                        'path' => $model->path,
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
