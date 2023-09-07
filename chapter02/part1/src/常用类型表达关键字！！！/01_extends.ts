// extends

interface Teacher {
    name:string,
    age:number
}
enum Sex {
    men,
    women
}
interface LiLei extends Teacher{
    sex:Sex
}
interface Han {
    speack:string
}
let newPerson:LiLei ={ 
    name:"胖胖",
    age:32,
    sex:Sex.men
}
// 如果 T 可以满足类型 Teacher 则返回 Teacher 类型，否则为 T 类型
type IsTeacher<T> = T extends Teacher ? Teacher : T;

let newPerson1:IsTeacher<Han>={  //newPerson1 要么是Teacher 类型要么是Han类型
    speack:'英语'
}
