function newUser(name, age, country) {
  var name = name || 'Sergio';
  var age = age || 12;
  var country = country || 'Colombia';
  console.log(name, age, country);
}

newUser();
newUser('Andrés', 19, 'Spain');

function newUser2(name = 'Sergio', age = 18, country = 'COLOMBIA') {
  var name = name;
  var age = age;
  var country = country;
  console.log(name, age, country);
}

