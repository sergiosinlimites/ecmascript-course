const promise1 = Promise.reject("reject");
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(() => {
  setTimeout(() => console.log('hecho'), 2000)
});

// gets the first response
Promise.any([promise1, promise2, promise3]).then(response => {
  console.log(response);
});

