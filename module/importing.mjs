//const {odd, even} = require('./var');
import {odd, even} from './var.mjs';
//const {alpha, beta} = require('./commonjs');
import {alpha, beta} from './var2.mjs';


console.log(odd, even);
console.log(alpha, beta);

export {
  odd, even
}
