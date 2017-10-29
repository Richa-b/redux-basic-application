var decrease = function () {
    return {type: 'DECREMENT'};
}

var increase = function () {
    return {type: 'INCREMENT'};
}

var getSum = function (a, b) {
    return {type: 'SUM', a: a, b: b};
};

var asyncIncrement = function (dispatch, state) {
    store.dispatch({type : 'LOAD_STATUS'})
    serverApi.increaseCount(state.count, function () {
        dispatch({type: 'INC_SYNC'})
    })
}