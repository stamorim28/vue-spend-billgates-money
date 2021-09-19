<template>
  <footer class="cart container--padd" v-if="cart.length">
    <h1>Your Receipt</h1>
    <div v-for="(prod, index) in cart" :key="index" class="cart__list">
      <div class="cart__item">
        <h1>{{ prod.name }}</h1>
        <div class="cart__price">
          <h1>{{ `$` + prod.price }}</h1>
          <h1>{{ `x` + prod.qtd }}</h1>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["cart"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors";

.cart {
  width: 80%;
  padding: 2rem 0;
  margin: 0 10% 1.75rem;
  display: grid;
  place-items: center;
  background-color: $bg-container;

  h1 {
    font-size: 1.75rem;
    color: $txt-color;
  }

  &__list {
    width: 70%;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
      width: 95%;
    }
  }

  &__item {
    width: 100%;
    padding: 0 20%;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.125rem;
      font-weight: normal;
    }

    h1:first-child {
      text-transform: capitalize;
    }

    @media screen and (max-width: 768px) {
      padding: 0 !important;
    }
  }

  &__price {
    display: flex;

    h1:first-child {
      font-weight: bold;
      color: $price-color;
    }

    h1:last-child {
      margin-left: 0.75rem;
      color: $cost-color;
      font-weight: bold;
    }
  }
}
</style>
