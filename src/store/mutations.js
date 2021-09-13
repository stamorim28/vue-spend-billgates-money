export default ({
    BUY_SOMTH(state, payload){
        state.money = state.money - payload;
    },
    SELL_SOMTH(state, payload){
        state.money = state.money + payload;
    },
})