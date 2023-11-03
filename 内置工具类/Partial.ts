// 转换成可选的
interface Foo {
    name: string
    age: number
}
type Bar = Partial<Foo>
// 相当于
type Bar = {
    name?: string
    age?: number
}