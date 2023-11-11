@php
    $rootCategory = \App\Models\Category::whereNull('parent_id')->first();
    $topCategories = \App\Models\Category::where('parent_id', $rootCategory->id)->get();
    $uniqid = uniqid();
    $selected_keys = [];

    if (!is_null($dataTypeContent->getKey())) {
        $selected_keys = $dataTypeContent->belongsToMany($options->model, $options->pivot_table, $options->foreign_pivot_key ?? null, $options->related_pivot_key ?? null, $options->parent_key ?? null, $options->key)->pluck($options->table . '.' . $options->key);
    }
    $selected_keys = old($relationshipField, $selected_keys);
    $products = app($options->model)
        ->whereIn($options->key, $selected_keys)
        ->get();
@endphp
<script>
    window.data{{ $uniqid }} = {!! json_encode(\App\Http\Resources\ProductOption::collection($products), JSON_UNESCAPED_UNICODE) !!};
</script>
<div x-data="fromproducts(data{{ $uniqid }})">
    <div>
        <ul>
            <template x-for="(product,pdx) of added" :key="pdx">
                <li>
                    <span x-text="product.title"></span>
                    <input type="hidden" name="{{ $relationshipField }}[]" x-bind:value="product.id">
                </li>
            </template>
        </ul>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-{{ $uniqid }}">
            Редактировать
        </button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modal-{{ $uniqid }}" tabindex="-1" role="dialog"
        aria-labelledby="modal-{{ $uniqid }}Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4 class="d-flex align-items-center gap-3">
                        <a href="#" x-on:click.prevent="goBack">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </a>
                        <span>Категории</span>
                    </h4>
                    <ul class="mb-4">
                        <template x-for="cat of categories" :key="cat.id">
                            <li>
                                <a href="#" x-on:click.prevent="getCategories(cat.id)">
                                    <span x-text="cat.name"></span>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <template x-if="products && products.data && products.data.length > 0">
                        <div class="mb-4">
                            <h4 class="d-flex align-items-center gap-3">
                                <div>Товары</div>
                                <a href="#" x-on:click.prevent.stop="addAll()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </a>
                                <a href="#" class="d-flex align-items-center justify-content-beetween gap-3"
                                    x-on:click.prevent="rmAll()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </a>
                            </h4>
                            <ul>
                                <template x-for="(product,pdx) of products.data" :key="pdx">
                                    <template x-if="ads.findIndex(function (p) { return p.id === product.id }) < 0">
                                        <li>
                                            <a href="#"
                                                class="d-flex align-items-center justify-content-beetween gap-3"
                                                x-on:click.prevent="addProduct(product)">
                                                <span x-text="product.title"></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </a>
                                        </li>
                                    </template>
                                </template>
                            </ul>
                            <template x-if="products.last_page > 1">
                                <ul class="pagination pagination-sm py-2">
                                    <template x-for="(link, ldx) of products.links" :key="ldx">
                                        <li class="page-item"
                                            x-bind:class="{
                                                'link-next': link.label === 'next',
                                                'link-prev': link.label === 'prev',
                                                active: link.active
                                            }">
                                            <a class="page-link" x-bind:href="link.url"
                                                x-html="link.label === 'prev' ? '&laquo;' :( link.label === 'next' ? '&raquo;' : link.label)"
                                                x-on:click.prevent="followLink(link.url)"></a>
                                        </li>
                                    </template>
                                </ul>
                            </template>
                        </div>
                    </template>
                    <h4>Добавленные</h4>
                    <ul>
                        <template x-for="(product,pdx) of ads" :key="pdx">
                            <li>
                                <a href="#" class="d-flex align-items-center justify-content-beetween gap-3"
                                    x-on:click.prevent="rmProduct(product)">
                                    <span x-text="product.title"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"
                        x-on:click="save">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</div>
