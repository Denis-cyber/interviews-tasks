// CONDITION

// Write your debounce on pure js
// Should console only last 'fetching(3)'

// function fetchUrl(url) {
//     return console.log(`fetching ${url}`)
// }

// function debounce(callback, ms) {

// }

// const fetching = debounce(fetchUrl, 300)

// fetching(1)
// fetching(2)
// fetching(3)

// SOLUTION

// function fetchUrl(url) {
//   return console.log(`fetching ${url}`);
// }

// function debounce(callback, ms) {
//   let timer;

//   return function (args) {
//     timer && clearTimeout(timer);

//     timer = setTimeout(() => {
//       callback(args);
//     }, ms);
//   };
// }

// const fetching = debounce(fetchUrl, 300);

// fetching(1);
// fetching(2);
// fetching(3);
