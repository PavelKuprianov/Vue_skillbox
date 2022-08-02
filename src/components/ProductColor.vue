<template>
  <li class="colors__item">
    <label class="colors__label"> <!-- eslint-disable-line -->
      <input class="colors__radio sr-only" type="radio" value="color" >
      <span class="colors__value" :style="{ background: color }"></span>
    </label>
  </li>
</template>

<script>
// import products from '@/data/products';
export default {
  name: 'ProductColor',
  props: ['color'],
};
</script>

<style scoped>

</style>
