//반복문
//for
//for(초기값, 조건, 코드 실행 후 작업)

for(let i = 0; i<10; i++){
  //반복할 코드
}

// 1부터 10까지 로그
for(let i =0; i<10; i++){
  console.log(i+1);
}

//while
let i=0;

while(i<10){
  //코드
  i++;
}

while(i<10){
  console.log(i);
  i++;
}

//do.. while

let i=0;

do{
  //코드
  i++;
}while(i<10)

//반복문 빠져나오는 것
//break : 당장 멈추고 빠져나옴
//continue : 멈추고 다음 반복문 실행

while(true){  //무한루프
  let answer = confirm('계속 할까요?');
  if(!answer){
    break;
  }
}

//continue 
// 짝수만

for(let i =0; i<10; i++){
  if(i%2){
    continue;
  }
  console.log(i);
}