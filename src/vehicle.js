// lib/vehicle.js
export default class Vehicle {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this.fuel = 1000;
  }

  start() {
    this._startHandler = setInterval(() => {
      this.fuel--;
      console.log(`fuel: ${this.fuel}`)
    }, 500);
  }

  stop() {
    clearInterval(this._startHandler)
  }

  display() {
    return `Number: ${this.number}`;
  }
}
