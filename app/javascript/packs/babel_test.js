export class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }

  async fetch() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve('complete!!');
      }, 1000);
    });
  }

}