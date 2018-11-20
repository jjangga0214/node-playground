import {EventEmitter} from 'events';

const observer1 = new EventEmitter();

observer1.on('data', () => {
  console.log('data');
});

setTimeout(() => {
  observer1.emit('data');
}, 2000);