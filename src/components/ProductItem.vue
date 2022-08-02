<template>
  <div class="catalog__list">
    <li class="catalog__item" >
      <a class="catalog__pic" href="#">
        <img v-bind:src="product.image" v-bind:alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
                {{ product.price }} ₽
              </span>

      <ul class="colors colors--black">
        <ProductColor v-for="(color, index) in product.colors" :color="color" :key="index"/>
      </ul>
    </li>
  </div>
</template>

<script>
import ProductColor from '@/components/ProductColor.vue';

export default {
  components: { ProductColor },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
