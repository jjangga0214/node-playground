setImmediate(() => {
  console.log('setImmediate');
});

/**
 * MicroTask 를 다룰 때에는 재귀적으로 호출하지 않도록 조심한다.
 * 이벤트 큐보다 먼저 스택에 올라 실행되기 때문이다.
 */

process.nextTick(() => {
  /*
   * process.nextTick 는 MicroTask 이다.
   */
  console.log('process.nextTick');
});

Promise.resolve().then(() => {
  /*
   * Promise는 Microtask 인데 process.nextTick 보다도 우선순위가 높은 것 같다.
   */
  console.log('Promise.resolve().then');
});