//https://www.leevii.com/2023/05/record-in-ts.html

// 将一个枚举类型的值映射到另一个类型上
enum Color {
    Red,
    Green,
    Blue,
  }
  
  type ColorInfo = Record<Color, { name: string; hex: string }>;
  
  const colors: ColorInfo = {
    [Color.Red]: { name: 'red', hex: '#ff0000' },
    [Color.Green]: { name: 'green', hex: '#00ff00' },
    [Color.Blue]: { name: 'blue', hex: '#0000ff' },
  };


  // 将一个联合类型的值映射到另一个类型上
type Animal = 'dog' | 'cat' | 'fish';

type AnimalInfo = Record<Animal, { name: string; age: number }>;

const animals: AnimalInfo = {
  dog: { name: 'dogName', age: 2 },
  cat: { name: 'catName', age: 3 },
  fish: { name: 'fishName', age: 5 },
};


// 将一个对象类型的属性（key）映射到另一个类型上
interface Person {
    id: number;
    name: string;
  }
  
  type PersonInfo = Record<keyof Person, string>;
  
  const person: PersonInfo = {
    id: '001',
    name: 'Alice',
  };