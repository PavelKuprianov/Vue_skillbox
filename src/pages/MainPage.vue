<!-- eslint-disable -->
<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :category-color.sync="filterCategoryColor"
      />
      <section class="catalog">
        <ProductList
          :products="products"
        />
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>

    </div>
  </main>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  name: 'MainPage',
  components: { BasePagination, ProductList, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterCategoryColor: 0,

      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      /* eslint-disable */
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) => product.categoryId === this.filterCategoryId);
      }

      if (this.filterCategoryColor) {
        filteredProducts = filteredProducts.filter((product) => product.colors.find((el) => el.id === this.filterCategoryColor));
      }
      // }
      return filteredProducts;
    },
    /* eslint-enable */
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>

<style scoped>

</style>
