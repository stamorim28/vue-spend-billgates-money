<template>
  <div class="list__price">
    <button
      v-if="num >= 1"
      @click="
        sell(id);
        --num;
      "
      class="btn btn--sell"
    >
      Sell
    </button>
    <button v-else class="btn">
      Sell
    </button>
    <input type="number" v-model.number="num" name="qtd" id="inputEl" />
    <button v-if="money < price" class="btn">
      Buy
    </button>
    <button
      v-else
      @click="
        buy(id);
        ++num;
      "
      class="btn btn--buy"
    >
      Buy
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Input",
  props: {
    price: Number,
    id: Number,
    money: Number,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    ...mapActions(["buy", "sell"]),
  },
};
</script>

<style lang="scss" scoped></style>
