//비교 연산자, 조건문

//비교 연산자 (결과값으로 boolean 값을 반환)
//< > <= >= == !=

console.log(10>5);  //true
console.log(10 == 5); //false
console.log(10 != 5); //true

//동등 연산자
const a = 1;
const b = "1";

console.log(a == b) //true
console.log(a === b)  //false > 일치 연산자 (타입까지 비교)

//if문
const age = 30;

if(age > 19){
  console.log('환영 합니다.');
}
if(age<=19){
  console.log('안녕히 가세요.');
}

console.log('-------------------------------');

//else 문
if(age>19){
  console.log('환영합니다.');
} else {
  console.log('안녕히가세요.');
}

console.log('--------------------------');

//추가 요구사항 : 19살이면 수능 잘치세요 라는 문구를 보여주세요
// age === 19

if(age>19){
  console.log('환영합니다.');
} else if(age === 19){
  console.log('수능 잘치세요.');
} else {
  console.log('안녕히가세요.');
}

console.log('--------------------------');
