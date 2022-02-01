const EventEmitter=require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'events') {
    // Insert a new listener in front
    myEmitter.on('events', () => {
      console.log('B');
    });
  }

});
myEmitter.on('events', () => {
  console.log('A');
});
myEmitter.emit('events');
// Prints:
//   B
//   A