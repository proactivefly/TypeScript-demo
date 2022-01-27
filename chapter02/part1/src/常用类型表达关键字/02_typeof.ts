// 在 TS 中用于类型表达时，typeof 可以用于从一个变量上获取它的类型。
let data={
    name:'小明',
    age:23
}

type Data =typeof data

let a:Data={
    name:'小兰',
    age:32
}