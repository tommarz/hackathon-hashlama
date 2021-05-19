<template>
  <div class="main">
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
          products: [{id: 1, name: 'AAA', desc: 'BBB'}, {id: 50, name: 'WWWWWW', desc: 'prod 2'}]
      };
  }
}
</script>

