<template>
  <ul class="catalog__list">
    <ProductItem v-bind:products="products" />
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';
import products from '../data/products';

export default {
  props: ['products'],
  components: { ProductItem },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>

</style>
