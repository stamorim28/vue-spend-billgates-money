<template>
  <header class="container">
    <div class="menu">
      <a
        class="menu__link"
        href="https://github.com/stamorim28"
        target="_blank"
        rel="noopener noreferrer"
      >
        /stamorim28
      </a>
    </div>

    <div class="info">
      <img
        class="info__item"
        src="https://neal.fun/spend/billgates.jpg"
        alt="bill_gates"
        loading="lazy"
      />

      <h1 class="info__title">Spend Bill Gates' Money</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors";

.menu {
  width: 100%;
  padding: 2rem 10%;
  background-color: $bg-container;

  &__link {
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    color: $txt-color;
  }
}

.info {
  width: calc(100% - 10% * 2);
  margin: 1.75rem 10% 0;
  padding: 2rem 0;
  background-color: $bg-container;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $txt-color;

  &__item {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 2rem;
    color: $txt-color;
    text-align: center;
  }
}
</style>
