interface Foo {
    name: string
    age?: number
}
type Bar = Required<Foo>
// 相当于
type Bar = {
    name: string
    age: number
}