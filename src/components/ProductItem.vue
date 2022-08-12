<!-- eslint-disable -->
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

      <ul class="colors colors--black" >
<!--        <li class="colors__item" v-for="(color, index) in product.colors" :key="index" :color="color">-->
<!--          <label class="colors__label">-->
<!--            <input class="colors__radio sr-only" type="radio" name="color">-->
<!--            <span class="colors__value" :style="{ background: color }"></span>-->
<!--          </label>-->
<!--        </li>-->
        <ProductColor v-for="(color, index) in product.colors" :key="index" :color="color" />
      </ul>
    </li>
  </div>
</template>

<script>

import ProductColor from './ProductColor.vue';

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
