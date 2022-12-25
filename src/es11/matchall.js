const regex = /\b(apple)+\b/g // search the word apple

const text = 'lorem ipsum, apple, orange, etc.';

for(const match of text.matchAll(regex)  ){
  console.log(match)
}