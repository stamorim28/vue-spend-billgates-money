export default ({
  cart: (state) => state.shop.filter((prod) => prod.qtd > 0),
})