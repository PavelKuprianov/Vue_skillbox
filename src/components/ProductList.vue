<template>
  <ul class="catalog__list">
    <ProductItem v-for="(product, index) in products" v-bind:product="product" v-bind:key="index" />
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: ['products'],
  components: { ProductItem },
};
</script>

<style scoped>

</style>
