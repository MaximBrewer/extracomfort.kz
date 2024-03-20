<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;

class SetMinPrice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:setminprice';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        foreach (Product::all() as $model) {
            $minPrice = 1000000000;
            foreach ($model->offers as $offer) {
                foreach ($offer->prices as $price) {
                    if ($price->type_id != 1) continue;
                    $minPrice = $minPrice > $price->value ? $price->value : $minPrice;
                }
            }
            if ($minPrice < 1000000000) {
                $model->min_price = $minPrice;
                $model->saveQuietly();
            }
        }
    }
}
