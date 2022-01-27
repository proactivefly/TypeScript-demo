/**
 * in 操作符用于遍历目标类型的公开属性名。类似 for .. in 的机制。
    从其用途看，我们很容易想到 in 可用于联合类型 || 者枚举类型
 */



// 1——联合类型

type Property = 'name' | 'age' | 'phoneNum';

type PropertyObject = {
    [key in Property]: string;
}

/* 
等价于
type PropertyObject = {
    name: string;
    age: string;
    phoneNum: string;
} 
*/


// 2——枚举类型
enum Letter {
    A,
    B,
    C,
}
type LetterMap = {
    [key in Letter]: string;
}
// type LetterMap = {
//     0: string;
//     1: string;
//     2: string;
// }


// 3——利用可用于联合类型的特性，我们有下面这种很常见的做法（仅举例）：

type ToString<T> ={
    [key in keyof T]: string;
}

// ex

type ab={
    name:string,
    age:number
}


type sv={
    [key in keyof ab]:string|number
}


let sc:sv={
    name:"张三",
    age:32
}

// ant-design-pro-ts 案例
interface BasicLayoutProps{
    location:'北京市'
}

interface MenuDataItem{
    icon:string,
    rate:number
}


type BasicLayoutContext = 
  { [K in 'location']: BasicLayoutProps[K] }
    & 
  {
    breadcrumbNameMap: {
      [path: string]: MenuDataItem;
    };
  };


  let deml:BasicLayoutContext={
      location:'北京市',
      breadcrumbNameMap:{
          '/menu':{
            icon:'set',
            rate:1
          }
      }
  }



