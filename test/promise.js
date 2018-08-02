let array = [1, 2, 3, 4, 5];
Promise.all(
  array.map((item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`success${item}`);
      }, 1000);
    })
  })
).then(datas => {
  console.log(datas)
})