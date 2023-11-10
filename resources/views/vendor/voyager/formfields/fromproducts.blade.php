@php
    $rootCategory = \App\Models\Category::whereNull('parent_id')->first();
    $topCategories = \App\Models\Category::where('parent_id', $rootCategory->id)->get();
    $uniqid = uniqid();
@endphp
<div>

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-{{ $uniqid }}">
        Добавить
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
            <div class="modal-body" x-data="fromproducts">
                <h4 class="d-flex align-items-center gap-3">
                    <a href="#" x-on:click.prevent="goBack">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </a>
                    <span>Категории</span>
                </h4>
                <ul>
                    <template x-for="cat of categories" :key="cat.id">
                        <li>
                            <a href="#" x-on:click.prevent="getCategories(cat.id)">
                                <span x-text="cat.name"></span>
                                <svg x-on:click.prevent.stop="addCategory(cat)" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                        </li>
                    </template>
                </ul>
                <h4>Товары</h4>
                <ul>
                    <template x-for="product of products.data" :key="product.id">
                        <li>
                            <a href="#" class="d-flex align-items-center gap-3"
                                x-on:click.prevent="addProduct(product)">
                                <span x-text="product.title"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                        </li>
                    </template>
                </ul>
                <ul class="pagination pagination-sm py-2">
                    <template x-for="(link, ldx) of products.links" :key="ldx">
                        <li class="page-item" x-bind:class="{ active: link.active }">
                            <a class="page-link" x-bind:href="link.url" x-text="link.label"
                                x-on:click.prevent="followLink(link.url)"></a>
                        </li>
                    </template>
                </ul>
                <h4>Добавленные</h4>
                <ul>
                    <template x-for="ad of ads" :key="ad.id">
                        <li x-text="ad.title"></li>
                    </template>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                <button type="button" class="btn btn-primary">Сохранить</button>
            </div>
        </div>
    </div>
</div>


<script>
    {{-- $("#add-{{ $uniqid }}").on('click', function() {

    }) --}}
</script>
