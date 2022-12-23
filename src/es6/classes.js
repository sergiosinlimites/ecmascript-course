// declaring, setters, constructor

class User {
  hello;
  constructor(hello){
    this.hello = hello;
  }
  speak(){
    return 'I am speaking';
  }
  gretting() {
    return this.hello;
  }
}

// instantiating

const myUser = new User('Hi!');
console.log(myUser.gretting(), myUser.speak());

import hello from "./module.js";

hello();