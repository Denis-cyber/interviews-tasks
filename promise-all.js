// CONDITION
// Write your PromiseAll

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function fetch1() {
  return sleep(500).then(() => 22);
}

function fetch2() {
  return sleep(200).then(() => 10);
}

Promise.all([fetch1(), fetch2()]).then(console.log); // instead Promise.all use PromiseAll































//SOLUTION

function myPromiseAll(promises) {
  const res = [];
  const promisesLength = promises.length;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promisesLength; i++) {
      promises[i]
        .then((response) => {
          res.push(response);

          if (promisesLength === res.length) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    }
  });
}
