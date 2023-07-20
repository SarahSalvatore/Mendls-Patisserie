<template>
  <div>
    <div class="img-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { products } from "../data/temp-data";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },
};
</script>
