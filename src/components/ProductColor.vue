<!-- eslint-disable -->
<template>
  <li class="colors__item" >
    <label class="colors__label">
      <input v-for="color in colors" :key="color.id" class="colors__radio sr-only" type="radio"
      name="color" v-model="computedColor" :value="color.id">
<!--             v-model.number="currentColor"  >-->
     <span class="colors__value" :style="{ background: color }"></span>
    </label>
  </li>
</template>

<script>
// import colors from '@/data/colors.js';
export default {
  name: 'ProductColor',
  props: ['colors'],
  methods: {
    selectedColor() {
      this.$emit('selected', this.value);
    },
  },
};
</script>

<style scoped>

</style>
