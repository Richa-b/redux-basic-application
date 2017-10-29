var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, thunk));

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count.clicks;
    document.getElementById('value2').innerHTML = state.sum;
    if(state.count.loading){
        document.getElementById('status').innerHTML = "loading ..."
    }else {
        document.getElementById('status').innerHTML = "loaded"
    }

};

store.subscribe(render);
render();

