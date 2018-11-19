/**
 * 이 모듈은 node 입장에서의 entry point 이지만,
 * 프로젝트의 실질적인 entry point 는 아래의 모듈이다.
 * CommonJS 와 ES6 모듈이 어떻게 섞여 있던 동작한다.
 * .mjs 이던 .js 이던 모두 동작한다.
 */
require = require('esm')(module); // 참고 : https://github.com/standard-things/esm
module.exports = require('./module/func'); // 여기가 실질적인 entry 포인트가 된다.