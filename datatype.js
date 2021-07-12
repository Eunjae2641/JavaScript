//숫자형
const age = 30;
const PI = 3.14;

console.log(1 + 2); //더하기
console.log(10 - 2);  //빼기
console.log(3 * 2); //곱하기
console.log(6 / 3); //나누기
console.log(6 % 4); //나머지

const x = 1/0; //???
console.log(x); //Infinity

const name = "Mike";
const y = name/2; 
console.log(y); //NaN (Not a Number)

//boolean

const a = true; //참
const b = false; //거짓

const name = "Mike";
const age = 30;
console.log(name=="Mike");
console.log(age==40);

//null 과 undefined

let age;
console.log(age); //undefined

let user = null;

//객체형
//심볼형

//typeof 연산자

const name = "Mike";

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null); //"object" 객체형, null은 객체가 아니다
console.log(typeof undefined);

//문자열
const name = "Mike";
const message = `My name is ${name}`;

const message2 = "My name is ${name}";
console.log(message2);

//문자열 더하기
const name = "Mike";

const a = "나는 ";
const b = " 입니다.";

console.log(a+name+b);

const age = 30; //number
console.log(a+age+"살"+b);