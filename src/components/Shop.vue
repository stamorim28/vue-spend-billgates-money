<template>
  <main class="container--padd">
    <div class="money-bar">
      <h1>{{ formatAllMoney(money) }}</h1>
    </div>

    <ul class="list">
      <li v-for="(prod, index) in shop" :key="index" class="list__item">
        <img :src="prod.img" alt="prod" loading="lazy" />
        <Price :price="prod.price" :prod="prod.name" />
        <Input :price="prod.price" :id="prod.id" :money="this.money" />
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Input from "./Input.vue";
import Price from "./Price.vue";
import { formatAllMoney } from "../mixins/formatAllMoney";

export default {
  name: "Shop",
  mixins: [formatAllMoney],
  components: {
    Input,
    Price,
  },
  computed: {
    ...mapState({
      money: (state) => state.money,
      shop: (state) => state.shop,
    }),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/colors";
@import "@/assets/scss/mixins";

.money-bar {
  @include set-buttons-large($bg-buttons-buy);
  padding: 1.125rem;
  margin: 0.85rem 0;
  text-align: center;
  position: sticky;
  top: 0;
}

.list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &__item {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $bg-container;
    text-align: center;

    img {
      height: 120px;
    }
  }

  &__title {
    color: $txt-color;
    margin: 0.85rem 0;

    h1 {
      font-size: 1.25rem;
      text-transform: capitalize;
    }

    h3 {
      font-size: 1rem;
      color: $price-color;
      text-align: center;
      border: none;
    }
  }

  &__price {
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
      width: 100%;
      margin: 0 0.5rem;
      text-align: center;
      font-weight: bolder;
    }
  }
}
</style>
