const redux = require('redux');


const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT'});


const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log('Counter:', latestState.counter);
};

store.subscribe(counterSubscriber);

for (let i = 0; i < 5; i++) {
    store.dispatch(increment());
}
store.dispatch(decrement());
