// enhanced object literals

function newUser(name, age, country){
  return {
    name,
    age,
    country
  }
}

console.group(newUser('Sergio', 19, 'CO'));