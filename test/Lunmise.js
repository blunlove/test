class Lunmise {
  constructor(real) {
    this.success = false;
    this.fail = false;
    this.result = null;
    this.resolve_back = null;
    this.reject_back = null;
    this.next = null;
    this.error = null;
    real(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(res) {
    if (this.fail === false) {
      this.success = true;
      this.result = res;
      this.next = this.resolve_back ? this.resolve_back(this.result) : null;
    }
  }
  reject(err) {
    if (this.success === false) {
      this.fail = true;
      this.result = err;
      this.error = this.reject_back ? this.reject_back(this.result) : null;
    }
  }
  then(fn) {
    this.resolve_back = fn;
    return new Promise(resolve => {
      resolve(this.next);
    });
  }
  catch(fn) {
    this.reject_back = fn;
    return new Promise((resolve, reject) => {
      reject(this.error);
    });
  }
}

function first() {
  new Lunmise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve('alun233');
      } else {
        reject('error');
      }
    }, 1000);
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

first()