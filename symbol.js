//심볼(symbol)

//property key : 문자형
const obj = {
  1: '1입니다',
  false : '거짓'
}

Object.keys(obj); //["1", "false"]

obj['1']  //"1입니다"
obj['false']  //"거짓"

//Symbol
const a = Symbol(); //new를 붙이지 않는다. 유일한 식별자를 만들 때 사용
const b = Symbol();

console.log(a);
console.log(b);

console.log(a===b); //false
console.log(a==b);  //false

//symbol 은 유일성 보장
const id = Symbol('id');  //설명 작성
const id2 = Symbol('id'); 

console.log(id);
console.log(id2); //출력 결과 값은 동일함
console.log(id === id2);
console.log(id == id2); //false 해서 동일하지 않음을 확인

//property key: 심볼형
const id = Symbol('id');
const user = {
  name : 'Mike',
  age : 30,
  [id] : 'myid'
}

Object.keys(user);  //하단 네줄은 심볼형을 건너뜀
Object.values(user); 
Object.entries(user); 
for(let a in user){ }

//사용방안
const user = {
  name : 'Mike',
  age : 30
}

const id = Symbol('id');  //원본데이터 손상 X 속성을 추가
user[id] = 'myid';

user.name = 'myname'; //원본데이터를 자신만의 속성으로 덮어쓰면 X
user.a_key_no_one_user = 'hahaha'; //이상한 네이밍 X

//심볼형이 보이지 않은데 계속해서 사용되고 있지 않을 수 있기 때문에 함부로 X

//Symbol.for() : 전역 심볼
//하나의 심볼만 보장받을 수 있음
//없으면 만들고, 있으면 가져오기 때문
//Symbol  함수는 매번 다른 Symbol 값을 생성하지만,
//Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

id1 === id2;  //true

Symbol.keyFor(id1); //이름을 알려줌 > "id"

const id = Symbol('id 입니다.');  //전역심볼이 아니면 keyFor 사용 불가

id.description; //id 입니다.

//숨겨진 Symbol key 보는 법
const id = Symbol('id');

const user = {
  name : 'Mike',
  age : 30,
  [id] : 'myid'
}

Object.getOwnPropertySymbols(user); //심볼만 볼 수 있다
Reflect.ownKeys(user);  //심볼형 키를 포함한 모든 키 보여줌

//예제1
//다른 개발자가 만들어놓은 객체
const user = {
  name: "Mike",
  age : 30.
};

//내가 직접
//user.showName = function(){}; //X
const showName = Symbol('show name');
user[showName] = function(){
  console.log(this.name);
};

user[showName]();

//사용자가 접속하면 보는 메세지