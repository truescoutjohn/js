const COUNT_DIGIT_OF_NUMBER = 1;
export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(
      function () {
        if (this.secondsPassed === 60) {
          this.secondsPassed = 0;
          this.minsPassed += 1;
        } else if (this.secondsPassed > 60) {
          this.secondsPassed -= 60;
          this.minsPassed += 1;
        }
        this.secondsPassed += 1;
      }.bind(this),
      1000,
    );
  },
  getTime() {
    const seconds =
      String(this.secondsPassed).length > COUNT_DIGIT_OF_NUMBER
        ? '' + this.secondsPassed
        : '0' + this.secondsPassed;

    return `${this.minsPassed}:${seconds}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};
