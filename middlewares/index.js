var logger = function (store) {
    return function (next) {
        return function (action) {
            console.group("Logger");
            console.info("current State =", store.getState());
            console.log("action =", action);
            next(action);
            console.info("Updated current State =", store.getState());
            console.groupEnd("Logger");
        }
    }
}

var thunk = function (store) {
    return function (next) {
        return function (action) {
            if (typeof action === 'function') {
                action(store.dispatch,store.getState())
            } else {
                next(action);
            }
        }
    }
};