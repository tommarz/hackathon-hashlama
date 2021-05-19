<template>
  <div>
      <h3>{{ product.name }}</h3>
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
