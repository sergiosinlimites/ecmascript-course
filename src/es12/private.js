class User {
  #hello;
  constructor(hello){
    this.hello = hello;
  }
  #speak(){
    return 'I am speaking';
  }
  gretting() {
    return this.hello;
  }
}

const myUser = new User('hiiii');

// myUser.speak is now private