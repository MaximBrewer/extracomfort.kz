<?php

namespace App\Http\Controllers;

use App\Http\Resources\AboutImage as ResourcesAboutImage;
use Illuminate\Http\Request;
use App\Http\Resources\Facility as ResourcesFacility;
use App\Http\Resources\ServiceBanner as ResourcesServiceBanner;
use App\Http\Resources\Statistic as ResourcesStatistic;
use App\Http\Resources\Testimonial as ResourcesTestimonial;
use App\Models\AboutImage;
use App\Models\Facility;
use App\Models\ServiceBanner;
use App\Models\Statistic;
use App\Models\Testimonial;
use Inertia\Inertia;

class ServicesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Services', [
            'pixel' => '<script src="//web.webformscr.com/apps/fc3/build/loader.js" async sp-form-id="b00b150b3fabf57791ef5b45912007bc50fbb450f7c67e00e6f64c3baf1ef8fa"></script>',
            'pagetitle' => __('Услуги'),
            'banners' => ResourcesServiceBanner::collection(ServiceBanner::all()),
            'statistics' => ResourcesStatistic::collection(Statistic::all()),
            'aboutImages' => ResourcesAboutImage::collection(AboutImage::all()),
            'testimonials' => ResourcesTestimonial::collection(Testimonial::all()),
            'stattitle' => setting('services.stattitle'),
            'statsubtitle' => setting('services.statsubtitle'),
            'abouttext1' => setting('services.abouttext1'),
            'abouttext2' => setting('services.abouttext2'),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => __('Главная')
                ],
                [
                    'text' => __('Услуги')
                ],
            ]
        ]);
    }
}
