// TASK 1
// CONDITION

// In what order are the numbers displayed in the console?

Promise.resolve().then(() => console.log(1));
new Promise(() => console.log(2));
setTimeout(() => console.log(3), 0);
Promise.reject().catch(() => console.log(4));
setTimeout(() => {
  console.log(5);
}, 0);
Promise.resolve().finally(() => console.log(6));
console.log(7);

// TASK 2
// CONDITION

// In what order are the numbers displayed in the console?

console.log(1);

setTimeout(() => {
  console.log(2);
});

const promise1 = new Promise((resolve) => {
  console.log(3);
  resolve(4);
});

const promise2 = new Promise((resolve) => {
  console.log(5);
  resolve(6);
});

promise1.then(console.log);
promise2.then(console.log);

console.log(7);
