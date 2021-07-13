//함수
/*function 함수명(매개변수, 매개변수){
  실행코드
}*/
//함수 실행 > 함수명(매개변수, 매개변수);
 
//함수 작성
function showError(){
  alert('에러가 발생했습니다. 다시 시도해주세요.');
}

showError();

//매개변수가 있는 함수
function sayHello(name){
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Mike');
sayHello('Jane');

//이름을 모른다면?
function sayHello1(name){
  let msg = `Hello`;  //지역변수, 함수 내에서만 사용 가능
  if(name){
    msg = `Hello, ${name}`;
    // msg += `, ${name}`;
  }
  console.log(msg);
}

//sayHello1();
sayHello1('Mike');

//지역변수와 전역변수
let msg = `Hello`;  
function sayHello2(name){
  if(name){
    msg += `, ${name};`;
  }
  console.log(msg);
}

sayHello2('Mike');
sayHello2(msg);

//지역변수와 전역변수2
let msg = "welcome";

function sayHello3(name){
  let msg = "Hello";
  console.log(msg + ' ' + name);
}

sayHello3('Mike');
console.log(msg);

//지역변수와 전역변수3
//지역변수 쓰는 습관! 전역변수 관리 힘들다.
let name = "Mike";

function sayHello4(name){
  console.log(name);
}

sayHello4();  //undefined
sayHello4('Jane');  //Jane

//OR연산자 활용
function sayHello5(name){
  let newName = name || 'friend';
  let msg = `Hello, ${newname}`;
  console.log(msg);
}

sayHello5();
sayHello5('Jane');

//default value
function sayHello6(name = 'friend'){
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello6();
sayHello6('Jane');

//return 으로 값 변환
function add(num1, num2){
  return num1+num2;
}

const result = add(2,3);
console.log(result);

function showError(){
  alert('에러가 발생했습니다.');
}//return이 없다면 undefined를 반환

const result = showError();
console.log(result);