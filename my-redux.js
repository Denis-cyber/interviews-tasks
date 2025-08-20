// CONDITION
// Write redux on pure js (with unsubscribe method)?




























































// SOLUTION

// const createStore = (paramRootReducer, paramInitialState) => {
//     let state = paramRootReducer(paramInitialState, { type: "__INIT__" });
//     const subscribers = [];

//     return {
//         dispatch(action) {
//             state = paramRootReducer(state, action);
//             subscribers.forEach((sub) => sub());
//         },
//         subscribe(callback) {
//             subscribers.push(callback);

//             return () => {
//                 const index = subscribers.indexOf(callback);

//                 if (index > -1) {
//                     subscribers.splice(index, 1);
//                 }
//             }
//         },
//         getState() {
//             return state;
//         },
//     };
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
// const unsubscribe = store.subscribe(() => console.log("store: ", store.getState()));
// store.dispatch({ type: "INIT_COUNTER" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" }); // not in console;
// unsubscribe();
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" }); // not in console;
