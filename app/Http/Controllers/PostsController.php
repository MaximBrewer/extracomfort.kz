<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Articles', [
            'pagetitle' => __('Articles'),
            'posts' => Post::paginate(6)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Post', [
            'pagetitle' => $post->title
        ]);
    }
}
