function* iterate() {
  const values = [1,2,3,4];
  for(let value of values){
    yield value;
  }
}

const it = iterate();
console.log(it.next(), it.next(), it.return('finished'));