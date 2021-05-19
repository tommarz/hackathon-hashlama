import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AutocompleteVue from 'autocomplete-vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false
Vue.component('autocomplete-vue', AutocompleteVue);

var app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default app