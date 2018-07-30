class Lunmise {
  constructor(real) {
    this.resolve = false;
    this.reject = false;
    this.result = null;
    // this[real.arguments[]]
  }
  end() {
    if (this.resolve || this.reject) {
      return this;
    }
  }
  then(back) {
    back(this.result);
  }
}