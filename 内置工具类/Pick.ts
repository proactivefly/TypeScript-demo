interface Foo {
    name: string;
    age?: number;
    gender: string;
}
type Bar = Pick<Foo, 'age' | 'gender'>
// 相当于
type Bar = {
    age?: number
    gender: string
}