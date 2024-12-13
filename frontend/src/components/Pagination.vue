<template>
<nav aria-label="Sayfa Numaralari">
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
      <a class="page-link" aria-label="Geri">
      <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="index in totalPages">
      <a class="page-link" href="#">{{ index }}</a>
    </li>
    <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
      <a class="page-link" @click="goToPage(currentPage + 1)" aria-label="İleri">
      <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      goToPage(page) {
        this.currentPage = page
      }
    }
  }
</script>

<style scoped>

</style>