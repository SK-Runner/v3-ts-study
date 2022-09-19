// 1、直接使用字面量进行类型声明
// 变量的值只能和类型字面量相同
let movieMoney: 50.0 = 50.0;
console.log('the movie cost me', movieMoney, 'yuan');
console.log('------------------------------------------------------');

// 2、使用 ｜ 连接多个类型（或字面量）（联合类型）
let personGender: "male" | "female";
personGender = 'male';
console.log('xiaoming is a', personGender);

let message: String | Number;
message = 500;
console.log('the status is', message);

console.log('------------------------------------------------------');

// 3、any 类型（不建议使用，ts的作用就是限制类型）
// 声明变量如果不指定类型，解析器会自动赋给变量any类型
let t1;
t1 = 100;
t1 = '100';
t1 = true
console.log('不建议使用any类型', t1);
// any 类型可以赋值给任意类型变量
let other1 = t1;
console.log('any类型可以赋值给其他类型',other1);
console.log('------------------------------------------------------');

// 4、unknown 当不知道变量类型时，使用unknown。unknown是一个类型安全的any。
// unknown类型的变量不能直接复制给其他变量，必须判断后者类型，或者使用【类型断言】
let data: unknown;
data = 1;
data = [];
data = 'message';
console.log('未知类型的变量', data);
let temData: Boolean = false;
temData = data as Boolean; // 【类型断言】data就是Boolean类型，但temData还是被赋予了String类型的值
console.log('unknown类型赋值', temData); // message
console.log('------------------------------------------------------');

// 5、void 表示空，一般用于函数返回值
function fn():void {
  console.log('啥也没干');
}
fn();
console.log('------------------------------------------------------');

// 6、never 没有任何类型，一般用于抛出错误的函数
function fn2(): never {
  throw new Error('never')
}
try {
  fn2();
} catch (error) {
  console.log(error);
}
console.log('------------------------------------------------------');

// 7、Object 可以使用字面量直接指定对象可以包含哪些属性
// ? 【可选属性】
let ming: {
  name: String,
  age?: number,
};
ming = {
  name: '小明',
}
console.log('对象类型——字面量方式', ming);

// [propName: string]: any 限定某几个属性，其他参数可以任意指定
let hong: {
  name: string,
  [propName: string]: any
}
hong = {
  name: '小红',
  age: 25,
}
console.log('[propName: string]用法', hong);
console.log('------------------------------------------------------');

// 8、设置函数结构的类型声明
// 箭头函数
let funTest1: (arg1: string, arg2: string) => number;
// 函数声明
function funTest2(arg1: string, arg2: string): number {
  return 1
}

// 9、数组类型声明
// 类型[]
let arrTest1: string[] = ['a', 'b'];
// Array<类型>
let arrTest2: Array<string> = ['a', 'b'];
console.log('------------------------------------------------------');

// 10、元组 固定长度的数组（当数组的值是固定的，就使用元组，效率更高）
let turpleTest1: [string, number];
turpleTest1 = ['a', 100];

// 11、枚举
// 原来如果属性是0或者1时，效率不高，其他开发者可能不理解
// let gang: {
//   name: string,
//   gender: 0 // 0：男，1: 女
// }

// 使用枚举正式声明
enum Gender {
  Male = 0,
  Female = 1,
}
let gang: {
  name: string,
  gender: Gender
} = {
  name: '小刚',
  gender: Gender.Male
}
if (gang.gender === Gender.Female) {
  console.log('gang is female');
}

console.log('qweqweqwe', Gender[0]);