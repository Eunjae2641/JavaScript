//변수
//let const var

//var는 한번 선언된 변수를 다시 선언할 수 있다.
var name = 'Mike';
console.log(name);

var name = 'Jane';
console.log(name);

//var는 선언하기 전에 사용할 수 있다.
console.log(name);  //undefined

var name = 'Mike';

//하단과 동일한 코드 > 호이스팅(hosting) : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동 
//선언만 호이스팅됨
var name;
console.log(name);
name = 'Mike';

//let과 const 다 호이스팅됨 
//하지만 오류가 나는 이유는? 
//Temporal Dead Zone > TDZ
//let과 const 는 TDZ에 영향 > 선언 전 사용 불가

//변수의 생성과정
//1. 선언단계
//2. 초기화단계
//3. 할당단계

//var의 경우 선언과 초기화가 동시에
//let은 모두 따로
//const는 모두 동시에 

//스코프
//var = 함수 스코프 > 함수내에서 선언된 변수만 지역변수
//let, const = 블록 스코프  > 코드블록 내부의 변수가 지역변수

//코드블록
//함수, if문, for문, while문, try/catch문 등

const age = 30;

if(age>19){
  var txt = '성인';
}

console.log(txt);