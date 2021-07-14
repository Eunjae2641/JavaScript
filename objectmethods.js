//객체 메소드, 계산된 프로퍼티(Computed property)

//계산된 프로퍼티
let a = 'age';

const use = {
  name = 'Mike',
  [a] : 30 // age : 30
}

const user = {
  [1+4] : 5,
  ["안녕"+"하세요"] : "Hello"
}

//methods
/*
Object.assign()
Object.keys()
Object.values()
Object.entries()
Object.fromEntries()
*/

//Object.assign() 객체 복제
const user = {
  name : 'Mike',
  age : 30
}

const newUser = Object.assign({}, user);

newUser.name = 'Mike';

Object.assign({name : 'Tom'}, user);  //덮어쓰기

//여러개 복제
const user1 = {
  name : 'Mike'
}
const info1 = {
  age : 30,
}
const info2 = {
  gender : 'male',
}

Object.assign(user, info1, info2);
//user에 info1과 info2를 복제

//Object.keys() : 키 배열 반환
const user = {
  name : 'Mike',
  age : 30,
  gender : 'male',
}

Object.keys(user);  // "name", "age", "gender"

//Object.values() : 값 배열 반환
Object.values(user);  // "Mike", 30, "male"

//Object.entries() : 키/값 배열 반환
Object.entries(user); // ["name", "Mike"], ["age", 30], ["gender", "male"]

//Objecet.fromEntries() : 키/값 배열을 객체로
const arr = 
[
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"]
];

Object.fromEntries(arr);  // name : 'Mike', age : 30, gender : 'male',

//예제
let n = "name";
let a = "age";

const user = {
  [n] : 'Mike',
  [a] : 30,
  [1+4] : 5,
};

console.log(user);

//예제2
function makeObj(key, val){
  return {
    [key] : val
  }
}

const obj = makeObj('나이', 33);  //앞에 넣는 값이 key

console.log(obj);




