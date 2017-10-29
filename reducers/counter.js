const DEFAULT_STATE = {clicks: 0, loading: false};

function counter(currentState = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'DECREMENT':
            return Object.assign({}, currentState, {clicks: currentState.clicks - 1});
        case 'LOAD_STATUS':
            return Object.assign({}, currentState, {loading: true});
        case 'INC_SYNC':
            return Object.assign({}, currentState, {loading: false, clicks: currentState.clicks + 1});
        default:
            return currentState
    }
}