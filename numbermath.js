//number, math
//toString() > 10진수 -> 2진수/16진수

let num = 10;
num.toString(); //"10"
num.toString(2); //"1010"

let num2 = 255;

num2.toString(16);  //"ff"

//Math
Math.PI;  //3.141592653589793

//Math.ceil() : 올림
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);  //6
Math.ceil(num2);  //6

//Math.floor() : 내림
Math.floor(num1); //5
Math.floor(num2); //5

//Math.round() : 반올림
Math.round(num1); //5
Math.round(num2); //6

//소수점 자리수
let userRate = 30.1234; //요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림) <- 30.12
Math.round(userRate * 100); //3012

userRate.toFixed(2);  //30.12
userRate.toFixed(0);  //30
userRate.toFixed(6);  //30.123400

Number(userRate.toFixed(2));  //30.12

//isNaN()

let x = Number('x');  //NaN

x == NaN //false
x === NaN //false
NaN = NaN //false

isNaN(x)  //true
isNaN(3)  //false

//parseInt()
let margin = '10px';

parseInt(margin); //10
Number(margin); //NaN

let redColor = 'f3';
parseInt(redColor); //NaN

let redColor = 'f3';
parseInt(redColor,16); //243 16진수 > 10진수 변환

parseInt('11', 2) //2진수 > 10진수

//parseFloat()

let padding = '18.5%';

parseInt(padding); //18
parseFloat(padding); //18.5 소수점 보임

//Math.random()
//0~1 사이 무작위 숫자 생성

Math.random(); //0.26027823~

//1~100사이의 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random()*100)+1;

//Math.max() / Math.min()
Math.max(1, 4, -1, 5, 10, 9, 5.54); //10
Math.min(1, 4, -1, 5, 10, 9, 5.54); //-1

//Math.abs() : 절댓값
Math.abs(-1); //1

//Math.pow(n,m) : 제곱
Math.pow(2, 10);  //1024

//Math.sqrt() : 제곱근
Math.sqrt(16);  //4