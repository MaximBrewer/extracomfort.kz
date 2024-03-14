<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Models\Review;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewRequest $request)
    {
        $data = $request->all();
        $data['published'] = false;
        Review::create($data);
        $message = ['title' => 'Спасибо!', 'text' => 'Ваш отзыв принят <br/>и будет добавлен после модерации.'];
        return redirect()->back()->with(['message' => $message]);;
    }
}
