<template>
  <div class="list__price">
    <button
      v-if="num >= 1 && !(money >= billions)"
      @click="
        sell(id);
        --num;
      "
      class="btn btn--sell"
      type="reset"
    >
      Sell
    </button>
    <button v-else class="btn" type="reset">
      Sell
    </button>
    <form action="/">
      <label :for="`prod-'${id}`"></label>
      <input
        type="text"
        v-model.number="num"
        name="qtd"
        placeholder="num"
        disabled
      />
    </form>
    <button v-if="money < price" class="btn" type="reset">
      Buy
    </button>
    <button
      v-else
      @click="
        buy(id);
        ++num;
      "
      class="btn btn--buy"
      type="reset"
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
      billions: this.money,
    };
  },
  methods: {
    ...mapActions(["buy", "sell"]),
  },
};
</script>

<style lang="scss" scoped></style>
