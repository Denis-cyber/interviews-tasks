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
