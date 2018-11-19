process.nextTick(() => {
  console.log('hello world');
});

console.log(process.env);

// UNIX{-like} 에서는 PATH 의 구분자로 ':' 을 사용하고, windows 에서는 ';' 를 사용한다.
console.log(process.env.PATH.split(':'));