<?php

namespace App\Console\Commands;

use App\Models\Facet;
use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

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
        DB::table('facets')->truncate();
        foreach (Product::all() as $model) {
            foreach ($model->pathes as $path) {
                Facet::firstOrCreate([
                    'path' => $path,
                    'product_id' => $model->id
                ]);
                foreach ($model->optionValues as $value) {
                    Facet::firstOrCreate([
                        'path' => $path,
                        'product_id' => $model->id,
                        'option_id' => $value->option_id,
                        'option_value_id' => $value->id,
                        'option_value' => $value->title,
                    ]);
                }
                foreach ($model->offers as $offer) {
                    foreach ($offer->specifications as $specification) {
                        Facet::firstOrCreate([
                            'path' => $path,
                            'product_id' => $model->id,
                            'offer_id' => $offer->id,
                            'specification_id' => $specification->id,
                            'specification_accounting_id' => $specification->accounting_id,
                            'specification_value' => $specification->pivot->value,
                        ], [
                            'specification_value_num' => (float)$specification->pivot->value * 10000,
                        ]);
                    }
                }
            }
        }
    }
}
