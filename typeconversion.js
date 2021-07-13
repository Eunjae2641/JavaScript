//형변환

//String() 문자형 변환
//Number() 숫자형 변환
//Boolean() 불린형 변환

//const mathScore = prompt("수학 점수를 입력하시오 : ");
//const engScore = prompt("영어 점수를 입력하시오 : ");
//const result = (mathScore + engScore) / 2;

const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2;

console.log(result);

//prompt로 입력받으면 문자형
//문자형 90 + 문자형 80 = 문자형 9080
//문자형 9080 / 2 = 4540 (나누기는 자동 형변환을 통해 9080이 문자형으로 변환)
//자동형변환은 오류 찾기 좋지 X > 명시적 형변환 필요

//명시적 형변환

//String() 문자형 변환
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
)

//Number() 숫자형 변환
console.log(
  Number("1234"), //문자열 안에 숫자가 아닌 문자가 입력되어 있을시 NaN
  Number(true),
  Number(false)
)
//Number(null) => 0
//Number(undefined) => Nan
//Number(0) => false
//Number('0') => true
//Number('') => false
//Number(' ') => true

//Boolean() 불린형 변환
//숫자 0, 빈문자열, null, undefined, Nan 만 flase 출력
//나머지는 모두 True 출력
