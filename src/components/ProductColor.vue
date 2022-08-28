<!-- eslint-disable -->
<template>
  <ul class="colors colors--black" >
    <li class="colors__item" v-for="color in colorsObj" :key="color.id" >
      <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color" v-model="computedColor" :value="color.id" />
        <span class="colors__value" :style="{ background: color.code }"></span>
      </label>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'ProductColor',
  props: ['colorsObj', 'currentColor', 'value'],
  computed: {
    computedColor: {
      get() {
        return this.value.id;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped>
.colors__radio:checked~.colors__value::before {
  border-color: var(--border-color);
}
</style>
