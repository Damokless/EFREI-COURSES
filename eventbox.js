function empty() {
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('hi!');
});
myEmitter.emit('event');
}

function withArgs(names) {
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('newFellow', () => {
    names.forEach(name => {
        console.log("Here come's a new pirate ->> " + name)
    });

  });

myEmitter.emit('newFellow');
}

module.exports = {
    empty, withArgs,
}