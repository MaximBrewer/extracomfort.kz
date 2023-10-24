<?php

namespace App\Http\Controllers;

use App\Http\Resources\Facility as ResourcesFacility;
use App\Models\Facility;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilitiesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $facility, $subfacility = false)
    {
        global $facilityId;

        $facility = Facility::where('slug', $facility)->firstOrFail();

        if ($subfacility) $subfacility = $facility->children()->where('slug', $subfacility)->firstOrFail();

        if ($subfacility) {
            $facilityId = $subfacility->id;
        } else {
            $facilityId = $facility->id;
        }

        $breadcrumbs = [
            [
                'route' => 'home',
                'text' => 'Главная'
            ],
            [
                'route' => 'services',
                'text' => 'Услуги'
            ]
        ];

        $breadcrumbs[] = [
            'text' => $facility->title,
            'route' => 'facility',
            'params' => [
                'facility' => $facility->slug
            ],
        ];

        if ($subfacility) {
            $breadcrumbs[] = [
                'text' => $subfacility->name,
                'route' => 'facility',
                'params' => [
                    'facility' => $facility->slug,
                    'subfacility' => $subfacility->slug
                ],
            ];
        }

        return Inertia::render('Facility', [
            'pagetitle' => $facility->name,
            'current' => new ResourcesFacility($subfacility ? $subfacility : $facility),
            'facility' => new ResourcesFacility($facility),
            'subfacility' => $subfacility ? new ResourcesFacility($subfacility) : null,
            'facilities' => $subfacility ? ['data' => []] : ResourcesFacility::collection($facility->children),
            'breadcrumbs' => $breadcrumbs,
        ]);
    }
}
