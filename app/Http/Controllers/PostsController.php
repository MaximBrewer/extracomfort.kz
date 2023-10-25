<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post as ResourcesPost;
use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Inertia\Inertia;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $posts = new Post();

        if ($request->get('cid')) {
            $posts = $posts->where('category_id', $request->cid);
        }

        return Inertia::render('Articles', [
            'pagetitle' => __('Articles'),
            'posts' => ResourcesPost::collection($posts->paginate(12)->appends($request->only('cid'))),
            'categories' => JsonResource::collection(PostCategory::all()),
            'category' => $request->get('cid') ? new JsonResource(PostCategory::find($request->get('cid'))) : null,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $next = Post::where('created_at', '>', $post->created_at)->orderBy('created_at')->first();
        $prev = Post::where('created_at', '<', $post->created_at)->orderByDesc('created_at')->first();
        return Inertia::render('Post', [
            'pagetitle' => $post->title,
            'post' => new ResourcesPost($post),
            'next' => $next ?  new ResourcesPost($next) : null,
            'prev' => $prev ?  new ResourcesPost($prev) : null
        ]);
    }
}
