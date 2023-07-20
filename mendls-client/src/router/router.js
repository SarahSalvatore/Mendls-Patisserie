import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import ShoppingCartPage from "../pages/ShoppingCartPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/shop", component: ProductsPage },
  { path: "/pastry/:productId", component: ProductDetailPage },
  { path: "/cart", component: ShoppingCartPage },
];

const router = new VueRouter({
  // Modes: hash (localhost:8080/#/route) or history (localhost:8080/route)
  // Hash doesn't make additional requests to the server. Its optimized.
  // History needs to be configured in your server so it has the same optimization.
  mode: "history",
  routes,
});

export default router;
