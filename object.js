//객체

const superman = {
  name : 'clark',
  age : 33,
}

console.log(superman.name);
console.log(superman[age]);

superman.hairColor = 'black';
superman['hobby'] = 'football';

delete superman.age;
console.log(superman);

function makeObject(name, age){
  return {
    name,
    age,
    hobby : 'football'
  }
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);
// 객체 접근
superman.name //'clark'
superman['age'] //33

// 객체 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

//객체 삭제
delete superman.hairColor;

//단축 프로퍼티
const name = 'clark';
const age = 33;

const superman1 = {
  name,
  age,
  gender : 'male',
} //하단 코드와 동일한 내용

/*const superman1 = {
  name : name,
  age : age,
  gender : 'male',
}*/

//프로퍼티 존재 여부 확인
superman.birthDay; //프로퍼티 없으면 undefined 반환

'birthDay' in superman //false 반환

'age' in superman;  //true 반환

//for... in 반복문

const Mike = {
  name : "Mike",
  age : 30
};

for(x in Mike){
  console.log(Mike[x]); // Mike['age']
}

//객체 in
function isAdult(user){
  if(!('age' in user) ||  // user에 age가 있나 없나
  user.age < 20){ // 20살 미만이거나
    return false;
  }
  return true;
}

const Mike = {
  name : "Mike",
  age : 30
};

const Jane = {
  name : 'Jane'
};

console.log(isAdult(Jane));

