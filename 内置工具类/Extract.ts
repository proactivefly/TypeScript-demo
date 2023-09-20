//type Extract<T, U> = T extends U ? T : never

type A = number | string | boolean
type B = number | boolean

type Foo = Extract<A, B>
// 相当于
type Foo = number | boolean