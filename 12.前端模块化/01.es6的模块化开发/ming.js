let name = "ming";
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(name + age)
  console.log(sum(20, 25));
}

//1.导出方式一
export {
  name,
  age,
  flag,
  sum
}

//2.导出方式二
export let num1 = 1000;
export let num2 = 2000;

export function multiplication(num1, num2) {
  return num1 * num2;
}

//3.导出函数类
export class Person {
  run() {
    console.log('person run');
  }
}

//4.默认导出  只能有一个
export default age;