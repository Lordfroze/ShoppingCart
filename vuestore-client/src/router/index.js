import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/product/Index.vue' // import dari folder product
import ProductDetail from '../views/product/Detail.vue' // import dari folder product
import Cart from '../views/cart/Index.vue' // import dari folder cart



Vue.use(VueRouter)
// menyiapkan route
const routes = [
  {
    path: '/',  // url
    name: 'product', //name dipanggil dari App.vue
    component: Product // component yang akan ditampilkan
  },

  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
