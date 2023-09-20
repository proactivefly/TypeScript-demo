interface Foo {
    name: string
    age: number
}
type Bar = Readonly<Foo>
// 相当于
type Bar = {
    readonly name: string
    readonly age: number
}