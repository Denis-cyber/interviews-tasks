// CONDITION
// Write redux on pure js?



























































// SOLUTION

// const createStore = (paramRootReducer, paramInitialState) => {
//   let state = paramRootReducer(paramInitialState, { type: "__INIT__" });
//   const subscribers = [];

//   return {
//     dispatch(action) {
//       state = paramRootReducer(state, action);
//       subscribers.forEach((sub) => sub());
//     },
//     subscribe(callback) {
//       subscribers.push(callback);
//     },
//     getState() {
//       return state;
//     },
//   };
// };

// const rootReducer = (paramState, paramAction) => {
//   switch (paramAction.type) {
//     case "INCREMENT":
//       return ++paramState;
//     case "DECREMENT":
//       return --paramState;
//     default:
//       return paramState;
//   }
// };

// const store = createStore(rootReducer, 0);
// store.subscribe(() => console.log("store: ", store.getState()));
// store.dispatch({ type: "INIT_COUNTER" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
