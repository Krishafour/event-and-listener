const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    
  setImmediate((a=10,b=1201) => {
    console.log(a,b,'this happens asynchronously');
  });
  console.log(a, b, this);
});
myEmitter.emit('event', 100, 200);