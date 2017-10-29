function counter(currentState, action){
    var DEFAULT_STATE = {clicks : 0 , loading : false};
    var nextState = Object.assign({},currentState);
    if (currentState === undefined) {

        nextState = DEFAULT_STATE;
        return nextState;
    }
    console.log("counter::",action.type);
    switch (action.type) {
      case 'DECREMENT':
        nextState.clicks = currentState.clicks - 1;
        return nextState;
      case 'LOAD_STATUS':
            nextState.loading = true;
            return nextState;
      case 'INC_SYNC':
        nextState.clicks = currentState.clicks + 1;
        nextState.loading = false;
        return nextState;
      default:
        nextState = currentState;
        return nextState;
    }
}