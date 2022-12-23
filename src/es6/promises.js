const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Funciona');
    }
  })
}

anotherFunction().then(result => {
  console.log(result);
}).catch(err => console.error(err));