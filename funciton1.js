//함수 선언문 VS 함수 표현식
/*  
함수 선언문 : 어디서든 호출 가능 (hoisting)
함수 표현식 : 코드에 도달하면 사용 가능
 */

//화살표 함수
let add = (num1,num2) => {
  const result = num1+num2;
  return result;
}

//함수 표현식

showError();

let showError = function(){
  console.log('error');
}

//함수 선언문

showError();

function showError(){
  console.log('error');
}

//화살표 함수
  let showError = () => {
    console.log("error");
  };

  const sayHello7 = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
  }

  const add1 = (num1, num2) => num1+num2;
