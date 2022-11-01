import { hoge } from './ts/test';
import { User } from './babel_test';

const user = new User('sasaki');
console.log(user.sayHello());
user.fetch().then(result => {
  console.log(result);
});
alert(hoge());