class Clock {
  constructor(date) {
    this.date = new Date();
    this.hours = (this.date.getHours() % 12);
    this.mins = this.date.getMinutes();
    this.secs = this.date.getSeconds();
    let that = this;
    setInterval(function() {
      that._tick();
    }, 1000);
    // setInterval(this._tick.bind(this), 1000);
  }
  
  printTime() {
    if (this.hours < 10) {
      this.hours = `0` + this.hours.toString();
    }
    if (this.mins < 10) {
      this.mins = `0` + this.mins.toString();
    }
    if (this.secs < 10) {
      this.secs = `0` + this.secs.toString();
    }
    console.log(`${this.hours}:${this.mins}:${this.secs}`);
    if (!Number.isInteger(this.hours)) {
      this.hours = Number.parseInt(this.hours);
    }
    if (!Number.isInteger(this.mins)) {
      this.mins = Number.parseInt(this.mins);
    }
    if (!Number.isInteger(this.secs)) {
      this.secs = Number.parseInt(this.secs);
    }
  }
  
  _tick() {
    this.secs += 1;
    if (this.secs > 59) {
      this.secs = 0;
      this.mins += 1;
      if (this.mins > 59) {
        this.mins = 0;
        this.hours += 1;
        if (this.hours > 12) {
          this.hours = this.hours % 12;
        }
      }
    }
    this.printTime();
  }
}
const clock = new Clock();