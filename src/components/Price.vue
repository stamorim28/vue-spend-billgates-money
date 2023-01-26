<template>
  <div class="list__title">
    <h1>{{ name }}</h1>
    <h3>{{ formatAllMoney(price) }}</h3>
  </div>
</template>

<script>
import { formatAllMoney } from "../mixins/formatAllMoney";

export default {
  name: "Price",
  mixins: [formatAllMoney],
  props: {
    price: Number,
    name: String,
  },
};
</script>
