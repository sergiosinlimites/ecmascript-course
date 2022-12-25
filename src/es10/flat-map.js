const array = [1,35,56,3, [122,34],[344,234,3232,[231,1]]];
console.log(array.flat(Infinity));

// flatmap

const array2 = [1,43,4,2,3];
console.log(array2.flatMap(v => [v, v**2]))