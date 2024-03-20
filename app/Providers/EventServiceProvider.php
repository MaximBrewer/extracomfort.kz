<?php

namespace App\Providers;

use App\Models\CallBack;
use App\Models\Missing;
use App\Models\Offer;
use App\Models\Product;
use App\Models\Termin;
use App\Observers\CallBack as ObserversCallBack;
use App\Observers\Missing as ObserversMissing;
use App\Observers\Offer as ObserversOffer;
use App\Observers\Product as ObserversProduct;
use App\Observers\Termin as ObserversTermin;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        Product::observe(ObserversProduct::class);
        Offer::observe(ObserversOffer::class);
        Termin::observe(ObserversTermin::class);
        CallBack::observe(ObserversCallBack::class);
        Missing::observe(ObserversMissing::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
