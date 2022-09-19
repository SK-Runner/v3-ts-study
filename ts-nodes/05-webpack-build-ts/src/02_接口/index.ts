console.log('-----------------------------接口模块测试-----------------------------');
// 限定对象类型
interface IPerson {
  readonly id: string,
  name: string,
  sex: string,
  age?: number
}

let person: IPerson = {
  id: '007',
  name: 'James',
  sex: 'man',
}

console.log(person.id);

// 限定函数类型
interface searchFun {
  (str: string, flag: string):boolean
}
const fn1: searchFun = function(str: string, flag: string):boolean {
  return str.indexOf(flag) > -1;
}

console.log(fn1('hello','o'));

// 限定class的类型
interface Hobby{
  wachMovie():void,
}
interface Work{
  toWork():void,
}
interface Behavior extends Hobby, Work{
  toSay():void,
}
class person1 implements Hobby, Work {
  wachMovie(){
    console.log('I like the Titanic');
  }
  toWork(){
    console.log('I will go to ZOL to work!');
  }
}
class person2 implements Behavior {
  toSay(){
    console.log('please say Hi!');
  }
  wachMovie(){
    console.log('I like the Iron Man');
  }
  toWork(){
    console.log('I will go to Beijing to work!');
  }
}
let p1 = new person1();
p1.wachMovie();
p1.toWork();

let p2 = new person2();
p2.wachMovie()
