const asyncFn = () => {
  return new Promise((resolve, reject) => {
    true ? 
      setTimeout(() => {
        resolve()
      }, 1000)
    : reject(new Error('Error'));
  })
}

const anotherFn = async () => {
  await asyncFn();
  console.log('Termina');
}

anotherFn();