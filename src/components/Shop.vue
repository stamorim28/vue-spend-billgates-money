<template>
  <main class="container--padd">
    <div class="money-bar">
      <h1>{{ `$${billMoney}` }}</h1>
    </div>

    <ul class="list">
      <li v-for="(prod, index) in shop" :key="index" class="list__item">
        <img :src="prod.img" alt="prod" loading="lazy" />
        <div class="list__title">
          <h1>{{ prod.name }}</h1>
          <h3>{{ `$${prod.price}` }}</h3>
        </div>
        <div class="list__price">
          <button @click="sellSomth" class="btn btn--sell">Sell</button>
          <input
            @keyup="buySomth"
            type="number"
            name="qtd"
            id="inputEl"
            placeholder="0"
          />
          <button @click="buySomth" class="btn btn--buy">
            Buy
          </button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Shop",
  data() {
    return {
      pay: "",
    };
  },
  computed: {
    ...mapState({
      money: (state) => state.money,
      shop: (state) => state.shop,
    }),
    ...mapGetters(["billMoney"]),
  },
  mounted() {
    this.buySomth();
  },
  methods: {
    ...mapMutations(["BUY_SOMTH", "SELL_SOMTH", "SEE_HOURS"]),

    buySomth() {
      let inputs = document.querySelectorAll("#inputEl");

      inputs.forEach((e) => {
        this.BUY_SOMTH(e.value);
      });
    },
    sellSomth() {
      let inputs = document.querySelectorAll("#inputEl");

      inputs.forEach((e) => {
        this.SELL_SOMTH(+e.value);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
      font-size: 1.125rem;
      text-transform: capitalize;
    }

    h3 {
      font-size: 1rem;
      color: $price-color;
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
    }
  }
}
</style>
