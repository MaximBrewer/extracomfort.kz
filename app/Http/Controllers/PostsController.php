<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post as ResourcesPost;
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
            'posts' => ResourcesPost::collection(Post::paginate(4))
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Post', [
            'pagetitle' => $post->title,
            'post' => new ResourcesPost($post)
        ]);
    }
}
