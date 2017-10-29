function combineReducer(currentState, action) {
    var nextState = Object.assign({},currentState);
    console.log("combine reducer");
    nextState = {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    return nextState;
}