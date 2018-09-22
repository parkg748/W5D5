Function.prototype.myBind = function(context) {
  this.apply(context);
};

class Lamp {
  constructor() {
    this.name = 'a lamp';
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn();

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn();
myBoundTurnOn();

