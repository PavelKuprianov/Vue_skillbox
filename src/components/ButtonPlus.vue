<template>
  <button type="button" aria-label="Добавить один товар">
    <svg width="10" height="10" fill="currentColor">
      <use xlink:href="#icon-plus"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ButtonPlus',
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
