type Foo = {
	name: string
	age: number
}

type Bar = Omit<Foo, 'age'>
// 相当于
type Bar = {
	name: string
}