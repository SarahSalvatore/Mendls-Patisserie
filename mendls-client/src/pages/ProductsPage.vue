<template>
  <div class="products-container">
    <h1>Pastries</h1>
    <div class="grid-wrap">
      <div class="product" v-for="product in products" :key="product.id">
        <img class="product-img" :src="product.imageName" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <p class="product-desc">{{ product.desc }}</p>
        <button>Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../data/temp-data";

export default {
  name: "ProductPage",
  data() {
    return {
      products,
    };
  },
};
</script>
