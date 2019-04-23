function a() {

}

Object.defineProperties(a.prototype, {
  $http: {
    get() {
      return console.log(233);
    }
  }
});
Object.defineProperties(a.prototype, {
  $http: {
    get() {
      return console.log(1113);
    }
  }
});
