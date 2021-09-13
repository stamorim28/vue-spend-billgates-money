<template>
  <div>
    <Header />
    <Shop />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Shop from "./components/Shop.vue";
export default {
  name: "App",
  components: {
    Header,
    Shop,
  },
};
</script>

<style lang="scss"></style>
