<template>
  <div class="main">
      <h1>Welcome to the Main Page!</h1>
      <Products :products="products"/>
  </div>
</template>

<script>

import Products from '../components/Products'

export default {
  name: 'Main',
  components: {
      Products
  },
  data() {
      return {
          products: []
      };
  },
  methods: {
    async fetchProducts() {
      const res = await fetch('api/products');
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.products = await this.fetchProducts()
  },
}
</script>

