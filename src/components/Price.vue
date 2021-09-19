<template>
  <div class="list__title">
    <h1>{{ prod }}</h1>
    <h3>{{ `$${price}` }}</h3>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: {
    price: Number,
    prod: String,
  },
  data() {
    return {
      num: 0,
    };
  },
};
</script>
