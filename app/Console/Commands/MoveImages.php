<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;

class MoveImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:moveimages';

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
        foreach (Product::all() as $product) {
            if (!$product->oldimages) continue;
            $cnt = 100;
            foreach (json_decode($product->oldimages) as $image) {
                $product->images()->create([
                    'link' => $image,
                    'sort' => $cnt,
                ]);
            }
        }
    }
}
