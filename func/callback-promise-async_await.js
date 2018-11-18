function someAsync(callback) {
  const err = null;
  const data = {
    data: 'demo',
  };
  setTimeout(() => callback(err, data), 0);
}

function someAsync2(data, callback) {
  const [err, data2] = ['err is occurred', null];
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

function somePromising(data) {

  return new Promise((resolve, reject) => {
    if (data === 'data') {
      resolve('resolved data');
    } else {
      reject('rejected');
    }
  });
}

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
