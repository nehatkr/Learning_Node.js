const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit('greetingEvent', this.greeting, name); // Emit a custom event
  }
}

const customEmitter = new MyCustomEmitter();

// Register a listener for the custom 'greetingEvent'
customEmitter.on('greetingEvent', (greeting, name) => {
  console.log(`Greeting event: ${greeting} ${name}`);
});

customEmitter.greet('Neha'); // Output: Greeting event: Hello Neha