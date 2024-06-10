<?php

namespace App\Console\Commands;

use App\Models\Offer;
use App\Observers\Offer as ObserversOffer;
use Illuminate\Console\Command;

class ObserveOffers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:observe-offers';

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
        foreach (Offer::all() as $offer) {
            (new ObserversOffer())->updated($offer);
        }
    }
}
