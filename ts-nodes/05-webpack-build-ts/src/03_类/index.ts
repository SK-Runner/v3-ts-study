console.log('-----------------------------类模块测试-----------------------------');

// 类的继承
class Animal {
  run(){
    console.log('I can run');
  }
}
class Dog extends Animal {
  getType(){
    console.log('it is a dog');
  }
}
let dog = new Dog();
dog.run();
dog.getType();



class Person {
  name: string;
  age: number;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayName(){
    console.log(`hello, my name is ${this.name}`);
  }
}

class EnglandBoy extends Person{
  constructor(name, age){
    // 使用父类构造函数
    super(name, age);
  }

  // 重写父类方法
  sayName(){
    console.log(`${this.name} says by order of the Peaky Blinders.`);
  }
}

let boy = new EnglandBoy('Tommy Shelby', 30);
boy.sayName();

/**
 * 修饰符：public、private、protected、static
 * public：公开
 * private：只能被内部类访问
 * protected：只能被内部类和子类访问
 * static：静态属性，只能被“类名.静态属性”访问
 * 
 * 修饰符：readonly
 * readonly：属性或方法是只读的
 */

// 存取器 get/set
class EngPerson {
  firstName: string;
  lastName: string;

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 设置get
  get fullName(){
    return `${this.firstName}-${this.lastName}`
  }
  // 设置set
  set fullName(value){
    let arr = value.split('-');
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
}

let T = new EngPerson('Tommy','Shelby');
console.log(T.fullName);
T.fullName= 'Arthur-Shelby';
console.log(T.firstName);
console.log(T.lastName);

// 抽象类 abstract
// 继承抽象类需要实现抽象类中所有的抽象方法