// TS对类的扩展
// 1、抽象类: 抽象类只能作为父类
abstract class AbsFather {
  name: String;
  age: Number;
  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }

  working() {
    console.log('working');
  }

  makeMoney(): void {
    console.log('挣钱');
  }

  // 抽象方法，没有函数体，只能让子类实现
  abstract study(): void;
}

class Son extends AbsFather {
  constructor(name: String, age: Number) {
    super(name, age)
  }

  study():string {
    return 'studying'
  }
}

let s = new Son('xiaoming', 18);
console.log(s.name);
console.log(s.age);
console.log(s.study());
console.log(s.makeMoney());
console.log('-----------------------------------');

// 2、接口: 接口中的所有属性都不可以有实际值，所有的方法都是抽象方法
interface Guns{
  name: string;
  firingRate: number;

  fire(): void;
}

class AK47 implements Guns {
  name: string;
  firingRate: number;

  constructor(name: string, firingRate: number) {
    this.name = name;
    this.firingRate = firingRate;
  }
  
  fire(): void {
    console.log('AK47 is fire');
  }
}
let ak = new AK47('AK', 1000);
console.log(ak.firingRate);
ak.fire();

console.log('-----------------------------------');

/**
 * 3、访问控制修饰符
 * 私有属性————private(只能在类内部获取该属性的值，实例不能直接获取。私有属性一般用get/set获取和设置)
 * 保护属性————protected(只能在类和子类中被访问，实例同样不能访问)
 * 公共属性————public(都可以访问，无限制)
 */
class Person {
  name: string;
  age: number;
  private _wage: number;

  constructor(name: string, age: number, wage: number) {
    this.name = name;
    this.age = age;
    this._wage = wage;
  }

  say() {
    console.log(this.name + '的工资是' + this._wage);
  }
}

let xiaoming = new Person('xiaoming', 25, 1000);
xiaoming.say();
console.log('-----------------------------------');

// 4、范型 在定义函数或者类时，遇到类型不明确就可以使用范型
// 基本用法，T可以用任何字母代替，类型也是任意的
function fn<T>(a: T): T{
  return a;
}
console.log(fn('abc'));
console.log(fn(10000));
console.log(fn(true));

console.log('-----------------------------------');

// 也可以指定多个范型
function fn2<T, K, L>(a: T, b: K, c: L): L{
  return c;
}
console.log(fn2('123', 1000, false));
console.log('-----------------------------------');

// 范型可以是接口的子类，参数必须是接口的实现类
interface Car{
  name: string;
  price: number;
}

function fn3<T extends Car>(a: T): void {
  console.log(`${a.name} 的价格是${a.price}元`);
}


class Supercar implements Car{
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let Lamborghini = new Supercar('兰博基尼', 500000000);

fn3(Lamborghini);

console.log('-----------------------------------');