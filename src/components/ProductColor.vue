<!-- eslint-disable -->
<template>
  <li class="colors__item" >
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" name="color" @click="selectedColor" :value="color.code">
<!--             v-model.number="currentColor"  >-->
      <span class="colors__value" :style="{ background: color }"></span>
    </label>
  </li>
</template>

<script>
export default {
  name: 'ProductColor',
  props: ['color'],
  methods: {
    selectedColor() {
      this.$emit('selected', this.value);
    },
  },
};
</script>

<style scoped>

</style>
