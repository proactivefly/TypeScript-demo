// keyof 是TS中的索引类型查询操作符。keyof T 会得到由 T 上已知的公共属性名组成的【联合类型】。

interface Person {
    name: string;
    age: number;
    phoneNum: number;
}

type PersonProperty = keyof Person;

// type PersonProperty = "name" | "age" | "phoneNum"


// keyof 在我们限制类型或者枚举属性时还是非常常见的，比如下面这个小例子：
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
