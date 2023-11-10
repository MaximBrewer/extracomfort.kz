<?php

namespace App\Http\Controllers\Voyager;

use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use TCG\Voyager\Events\BreadDataAdded;
use TCG\Voyager\Events\BreadDataUpdated;
use TCG\Voyager\Facades\Voyager;

use TCG\Voyager\Http\Controllers\VoyagerBaseController as BaseVoyagerBaseController;

class VoyagerFromProductsController extends BaseVoyagerBaseController
{
    public function categories(Request $request)
    {
        $parentId = $request->get('parent_id') ?: 1;
        $categories = Category::where('parent_id', $parentId);
        return [
            'path' => Category::find($parentId)->ancestors()->pluck('id'),
            'categories' => $categories->get(),
        ];
    }

    public function products(Request $request)
    {
        $categoryId = $request->get('category_id');
        $products = Product::whereHas('category', function (Builder $query) use ($categoryId) {
            $query->where('id', $categoryId);
            $query->orWhereHas('ancestors', function (Builder $query) use ($categoryId) {
                $query->where('id', $categoryId);
            });
        });
        return [
            'products' => $products->paginate(24)
        ];
    }
}
