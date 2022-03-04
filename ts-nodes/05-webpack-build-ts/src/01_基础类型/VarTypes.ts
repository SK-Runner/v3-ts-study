console.log('-----------------------------基础类型模块测试-----------------------------');
/**
  * Ts拥有和Js一样的类型机制
  *  基础类型：布尔、数字、字符串、null、undefined
  *  引用类型：数组、object
  *  新增类型：
  *    元组 tuple：元组类型允许表示一个已知元素数量和类型的数组（let t1: [string, number]）
  *               其中t1内部变量赋值顺序不可改变。
  *    枚举 enum：为一组数值赋予友好的名字
  *    any：为那些在编程阶段还不清楚类型的变量指定一个类型
  *    void：表示没有任何类型，通常用于限定函数的返回值
  *  Ts如何限定变量类型
  *    变量限定：变量名:类型名
  *    函数限定：函数名(变量名:类型名):类型名{}
  *  Ts联合类型
  *    变量:(类型1|类型2)
  *  类型断言:可以用来手动指定一个值的类型    
  *    方式一: <类型>值
  *    方式二: 值 as 类型  tsx中只能用这种方式
  *  类型推断: 当变量类型不明确时，ts自动为它推断一种类型，并且此后不可修改该变量类型
  */

// 元组
let tuple:[string, number];
tuple = ['1',1];
console.log(tuple);

// 枚举
enum Color {
  green = 10,
  red = 11,
  yellow = 12
}
// 根据属性获取值
let result1:Color = Color.red;
console.log(result1);
// 根据值获取属性名
let result2:string = Color[11];
console.log(result2);

// any
let data:any = 12;
data = true
console.log(data);

// 联合类型
let data2:string|number = '12';
data2=100
console.log(data2);

function test(arg:string|number){
  if(typeof arg === 'string'){
    return arg.length;
  }else{
    return arg.toString().length;
  }
}
console.log(test('100000'));

// 类型断言:可以用来手动指定一个值的类型
function test2(x: string | number ){
  if((<string>x).length){
    return (x as string).length;
  }else{
    return x.toString().length;
  }
}
console.log(test2('100000'));

// 类型推断
let data3 = '100'; // ts将data3推断成了字符串
// data3 = 100; // data3重新赋值成其他类型，就会报错
console.log(data3);