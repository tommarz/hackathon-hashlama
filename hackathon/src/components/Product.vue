<template>
  <div>
    <router-link :to="'/products/' + product.id">
      <h3>{{ product.name }}</h3>
    </router-link>
    <p>{{ product.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
}
</script>

<style scoped>
div {
    border: 1px solid black;
    display: inline-block;
    padding: 30px;
}
</style>
