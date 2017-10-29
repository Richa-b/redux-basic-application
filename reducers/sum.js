const DEFAULT_SUM_STATE = 3;

function sum(currentState=DEFAULT_SUM_STATE, action){
    switch (action.type) {
      case 'SUM':
        return parseInt(action.a) + parseInt(action.b);
      default:
        return currentState;
    }
}