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
  { path: "/pastry", component: ProductDetailPage },
  { path: "/cart", component: ShoppingCartPage },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
