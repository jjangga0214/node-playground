const timer1 = setTimeout(() => {
  console.log('setTimeout');
}, 1000);

let i = 0;
const timer2 = setInterval(() => {
  console.log('setInterval', i++);
  if (i === 2) {
    clearInterval(timer2);
  }
}, 2000);

/*
setTimeout(() => {
  clearInterval(timer2)
}, 6060);
*/
