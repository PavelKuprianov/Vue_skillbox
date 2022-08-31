<!-- eslint-disable -->
<template>
  <div class="catalog__list">
    <li class="catalog__item" >
      <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
        <img v-bind:src="product.image" v-bind:alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
                {{ product.price | numberFormat }} ₽
              </span>

      <ProductColor :productColors="product.colors" v-model="currentCategoryColor" />
    </li>
  </div>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import ProductColor from './ProductColor.vue';

export default {
  components: { ProductColor },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentCategoryColor: 0,
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
};
</script>

<style scoped>

</style>
