const success = Symbol('success');
const fail = Symbol('fail');
const result = Symbol('result');
const error = Symbol('error');
const resolve_back = Symbol('resolve_back');
const reject_back = Symbol('reject_back');
class Lunmise {
  constructor(real) {
    this[success] = false;
    this[fail] = false;
    this[result] = null;
    this[error] = null;
    this[resolve_back] = [];
    this[reject_back] = [];
    this.real = real;
    this.real(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(res) {
    if (this[fail] === false) {
      this[success] = true;
      this[result] = res;
      while (this[resolve_back].length > 0) {
        let next_fn = this[resolve_back].shift();
        let next_result = next_fn(this[result]);
        if (next_result instanceof Lunmise) {
          next_result[success] = false;
          [next_result[resolve_back], next_result[reject_back]] = [this[resolve_back], this[reject_back]]; 
          next_result.real(next_result.resolve.bind(next_result), next_result.reject.bind(next_result))
          return;
        }
        this[result] = next_result;
      }
    }
  }
  reject(err) {
    if (this[success] === false) {
      this[fail] = true;
      this[error] = err;
      while (this[reject_back].length > 0) {
        let next_fn = this[reject_back].shift();
        this[error] = next_fn(this[error]);
      }
    }
  }
  then(fn) {
    this[resolve_back].push(fn);
    return this;
  }
  catch(fn) {
    this[reject_back].push(fn);
    return this;
  }
  static resolve(res) {
    return new Lunmise(resolve => resolve(res));
  }
  static reject(err) {
    return new Lunmise((resolve, reject) => reject(err));
  }
}

function first() {
  return new Lunmise((resolve, reject) => {
    setTimeout(() => {
      resolve('alun233');
    }, 1000);
  }).then(res => {
    console.log(res);
    return new Lunmise((resolve, reject) => {
      setTimeout(() => {
        resolve('Lunmise2');
      }, 1000);
    })
  }).then(res => {
    console.log(res);
    return Lunmise.resolve('static method');
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

let a = first()
