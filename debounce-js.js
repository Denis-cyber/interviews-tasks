// CONDITION

// Write your debounce on pure js
// Should console only last 'fetching(3)'

// const fetchUrl = (url) => {
//     return console.log(`fetching ${url}`)
// }

// function debounce(callback, ms) {

// }

// const fetching = debounce(fetchUrl, 300)

// fetching(1)
// fetching(2)
// fetching(3)















// SOLUTION

// const fetchUrl = (url) => {
//     return console.log(`fetching ${url}`)
// }

// function debounce(callback, ms) {
//     let timer;
  
//     return (args) => {
//         timer && clearTimeout(timer)

//         timer = setTimeout(() => {
//             callback(args)
//         }, ms)
//     }
// }

// const fetching = debounce(fetchUrl, 300);

// fetching(1);
// fetching(2);
// fetching(3);






// UPDATE 
// If you have written debounce correct - conditions changed)


// const fetchUrl = (url) => {
//     return console.log(`fetching ${url}`, this.firstName)
// }

// const user = {
//     firstName: 'Bob',
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

// In console should print not only number, but also and name 'Bob' 
// Debounce function don't touch














// SOLUTION

// function fetchUrl(url)  {
//     return console.log(`fetching ${url}`, this.firstName)
// }

// const fetching = debounce(fetchUrl.bind(user), 300);

// fetching(1);
// fetching(2);
// fetching(3);