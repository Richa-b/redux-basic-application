const decrease = () => ({type: 'DECREMENT'});

const increase = () => ({type: 'INCREMENT'});

const getSum = (a, b) => ({type: 'SUM', a: a, b: b});

const asyncIncrement = (dispatch, state) => {
    dispatch({type: 'LOAD_STATUS'})
    serverApi.increaseCount(state.count, () => dispatch({type: 'INC_SYNC'})
    )
}