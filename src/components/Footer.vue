<template>
  <footer class="cart container--padd" v-if="cart.length">
    <h1>Your Receipt</h1>
    <div v-for="(prod, index) in cart" :key="index" class="cart__list">
      <div class="cart__item">
        <h2>{{ prod.name }}</h2>
        <div class="cart__price">
          <h3>{{ formatAllMoney(prod.price, "compact") }}</h3>
          <h3>{{ `x` + prod.qtd }}</h3>
        </div>
      </div>
    </div>
    <div class="spree-total">
      <div class="spree-total--block">
        <span>TOTAL</span>
        <div class="spree-total--money">
          {{ formatAllMoney(getTotalCart) }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import { formatAllMoney } from "../mixins/formatAllMoney";

export default {
  name: "Footer",
  mixins: [formatAllMoney],
  computed: {
    ...mapGetters(["cart"]),

    getTotalCart() {
      const carts = this.cart;
      let total = 0;

      carts.forEach((item) => {
        total += item.price * item.qtd;
      });
      return total;
    },
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

    @media screen and (max-width: 768px) {
      width: 95%;
    }
  }

  &__item {
    width: 100%;
    padding: 0 20%;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      font-weight: normal;
    }

    h2:first-child {
      text-transform: capitalize;
    }

    @media screen and (max-width: 768px) {
      padding: 0 !important;
    }
  }

  &__price {
    display: flex;

    h3:first-child {
      font-weight: bold;
      color: $price-color;
    }

    h3:last-child {
      margin-left: 0.75rem;
      color: $cost-color;
      font-weight: bold;
    }
  }
}

.spree-total {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 95% !important;
  }

  &--block {
    width: 100%;
    margin: 10px 20%;
    padding: 10px 0;
    font-weight: 700;
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      margin: 10px 0 !important;
    }
  }

  &--money {
    margin-left: 0.75rem;
    color: $price-color;
    font-weight: bold;
  }
}
</style>
