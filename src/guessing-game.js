class GuessingGame {
    constructor() {
      this.start = 0;
      this.stop = 0;
      this.middle = 0;
    }

    setRange(min, max) {
      this.start = min;
      this.stop = max;
    }

    guess() {
      return this.middle = Math.ceil(this.start / 2 + this.stop / 2);
    }

    lower() { this.stop = this.middle; }

    greater() { this.start = this.middle; }
}

module.exports = GuessingGame;
