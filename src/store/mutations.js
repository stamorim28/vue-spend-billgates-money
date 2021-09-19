export default ({

    BUY_SOMTH(state, payload){
        const prods = state.shop.find((prod) => prod.id === payload);
        if (!prods) return;
        prods.qtd++;
        state.money -= prods.price;
    },
    SELL_SOMTH(state, payload){
        const prods = state.shop.find((prod) => prod.id === payload);
        if (!prods) return;
        prods.qtd--;
        state.money += prods.price;
    },
})