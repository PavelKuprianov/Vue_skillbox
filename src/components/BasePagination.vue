<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <button class="pagination__link pagination__link--arrow "
         :class="{'pagination__link--disabled' : page === 1 }"
         aria-label="Предыдущая страница"
         @click.prevent="paginateMinus()"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </button>
    </li>

    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link"
         :class="{'pagination__link--current' : pageNumber === page}"
         @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>

    <li class="pagination__item">
      <button class="pagination__link pagination__link--arrow"
         :class="{'pagination__link--disabled' : page === pages }"
         href="#"
         aria-label="Следующая страница"
         @click.prevent="paginatePlus()"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  name: 'BasePagination',
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    paginatePlus() {
      if (this.page !== this.pages) {
        this.paginate(this.page + 1);
      }
    },
    paginateMinus() {
      if (this.page !== 1) {
        this.paginate(this.page - 1);
      }
    },
  },
};
</script>

<style scoped>

</style>
