//1.显示引入
import {flag, sum, num1, num2, multiplication, Person} from './ming.js';
//2.接受默认导出的属性
import mingAge from './ming.js';
//3.同意全部导入(接受它全部导出的)
import * as mingModule from './ming.js';

if (flag) {
  //1.使用显示导入的方法
  console.log(sum(num1, num2));
  console.log(multiplication(num1, num2));

  //2.使用导入的类
  let person = new Person();
  person.run();

  //3.使用默认导出的属性
  console.log(mingAge);

  //4.使用全部导入的属性
  console.log(mingModule.name);
}