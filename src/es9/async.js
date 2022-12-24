async function* anotherGenerator(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

anotherGenerator().next().then(value => console.log(value));
anotherGenerator().next().then(value => console.log(value));
anotherGenerator().next().then(value => console.log(value));

async function arrayOfNames(array){
  for await (let value of array){
    console.log(value);
  }
}

arrayOfNames(['Sergio', 'Andrés', 'Valeria']);
console.log('before');