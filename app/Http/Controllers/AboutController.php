<?php

namespace App\Http\Controllers;

use App\Http\Resources\Reward as ResourcesReward;
use App\Http\Resources\AboutImage as ResourcesAboutImage;
use App\Models\AboutImage;
use App\Models\Reward;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $youtube = setting('about.video');
        $youtube = explode("/", $youtube);
        $youtube = !empty($youtube) ? $youtube[count($youtube) - 1] : false;
        return Inertia::render('About', [
            'pagetitle' => __('About'),
            'youtube' =>  $youtube,
            'rewards' => ResourcesReward::collection(Reward::all()),
            'aboutImages' => ResourcesAboutImage::collection(AboutImage::all()),
            'breadcrumbs' => [
                [
                    'route' => 'home',
                    'text' => 'О нас'
                ],
                [
                    'text' => 'О нас'
                ]
            ]
        ]);
    }
}
