<!-- eslint-disable -->
<template>
  <ul class="colors colors--black" >
    <li class="colors__item" v-for="color in colorsObj" :key="color.id" >
      <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color" @click="selectedColor(color.id)" >
<!--        <input v-for="color in colors" :key="color.id" type="radio" v-model="computedColor" :value="color.id">-->
        <span class="colors__value" :style="{ background: color.code }"></span>
      </label>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'ProductColor',
  props: ['colorsObj'],
  methods: {
    selectedColor(currentColor) {
      this.$emit('current-color', currentColor);
    },
  },
};
</script>

<style scoped>

</style>
