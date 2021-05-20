<template>
  <div class="products">
    <div :key="product.id" v-for="product in products">
        <Product :product="product"/>
    </div>
  </div>
</template>

<script>
import Product from './Product'
export default {
  name: 'Products',
  props: {
    products: Array
  },
  components: {
      Product
  }
}
</script>
