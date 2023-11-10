window.fromproducts = () => ({
    path: [],
    category: 1,
    page: 1,
    categories: [],
    products: [],
    ads: [],

    goBack() {
        this.path.length && this.getCategories(this.path[this.path.length - 1])
    },

    getCategories(parentId) {
        var that = this;
        that.category = parentId;
        axios.get('/admin/fromproducts/categories?parent_id=' + parentId)
            .then(function (response) {
                console.log(response);
                that.path = response.data.path
                that.categories = response.data.categories
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },

    addProduct(product) { },

    addCategory(category) { },

    followLink(url) {
        var url = url.split('page=');
        this.page = url[1];
        this.getProducts()
    },

    getProducts() {
        var that = this;
        axios.get('/admin/fromproducts/products?category_id=' + that.category + '&page=' + that.page)
            .then(function (response) {
                console.log(response);
                that.products = response.data.products
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },

    init() {
        var that = this;
        this.getCategories(1)
        that.getProducts();
        this.$watch('category', function () {
            that.getProducts();
        })
    }
})