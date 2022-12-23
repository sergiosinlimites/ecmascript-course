// Spred operator

let country = 'CO';
let data = { country, ...user };
console.log(data);

// Rest, pack the rest of the values

function sum (num, ...values){
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1,2,2,3);
