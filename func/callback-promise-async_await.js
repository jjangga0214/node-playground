function someAsync(callback) {
  const err = null;
  const data = {
    data: 'demo',
  };
  setTimeout(() => callback(err, data), 0);
}

function someAsync2(data, callback) {
  const [err, data2] = ['err is occurred in someAsync2', null];
  setTimeout(() => callback(err, data2), 0);
}

someAsync(function (err, data) {
  if (err) {
    console.log(err);
  } else {
    someAsync2(data, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

/**
 * @param data
 * @returns {Promise<any>}
 */
function somePromising(data) {

  return new Promise((resolve, reject) => {
    if (data === 'data') {
      resolve('resolved data on somePromising');
    } else {
      reject('rejected on somePromising');
    }
  });
}

/**
 * @param data
 * @returns {Promise<never>}
 */
function somePromising2(data) {
  return Promise.reject('rejected on somePromising2');
}

/*
 * micro task queue 로 넘어가 위의 일반 콜백보다 Promise 가 더 빨리 실행된다.
 */
const promised = Promise.resolve('data');
promised
  .then(somePromising)
  .then(data => {
    return somePromising2(data);
  })
  .catch(err => {
    console.log(err);
  });

Promise.all([promised, Promise.resolve('data2'), Promise.reject('rejected3'), Promise.resolve('data3'),])
  .then(data => console.log(data))
  .catch(err => console.log(err));

/**
 * async function, which takes awaited Promise calculated value.
 * @returns {Promise<void>}
 */
async function run() {
  try {
    const data1 = await somePromising('data');
    const data2 = await somePromising2(data1);
  } catch (error) {
    console.log(error);
  }
}
run();

/**
 * in async function
 * for await snippet pattern,
 * which replaces `Promise.all(Array<Promise>)`
 */
const promises = [Promise.resolve('data1'), Promise.reject('rejected2'), Promise.resolve('not accessed')];

(async () => {
  try {
    for await (const promise of promises) {
      console.log(promise);
    }
    // err 가 발생하면 루프는 완전히 종료되고 catch 로 이동한다.
  } catch (error) {
    console.log(error);
  }
})();