// 源码：type Exclude<T, U> = T extends U ? never : T

//作用：如果 T 是 U 的子类型则返回 never 不是则返回 T

type A = number | string | boolean
type B = number | boolean

type Foo = Exclude<A, B>
// 相当于
type Foo = string