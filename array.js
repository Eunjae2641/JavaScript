//배열
//순서가 있는 리스트
//인덱스 > 0부터 시작
//문자 뿐만 아니라 숫자, 객체, 함수 등도 포함
  /*
  let arr = [
    '민수',
    3,
    false,
    {
      name : 'Mike',
      age : 30,
    },
    function(){
      console.log('TEST');
    }
  ]; */

//length : 배열의 길이
//배열의 메소드
//push() : 배열 끝에 추가
//pop() : 배열 끝 요소 제거
//shift() / unshift() : 배열 앞에 제거/추가
//반복문 : for
  /*
  let days = ['월','화', '수'];
  
  for(let index = 0; index < days.length; index++){
    console.log(days[index]);
  }
  */
//for ... of
  /*
  let days = ['월','화','수'];

  for(let day of days){
    console.log(day)
  }
  */

/*let students = ['철수','영희',];
console.log(students[0]);
console.log(students[1]);
console.log(students[29]);

students[0] = '민정';
*/

//array

let days = ['mon', 'tue', 'wed'];

days[1] = '화요일';

console.log(days[1]);

console.log(days.length);

days.push('thu');

days.unshift('sun');

for(let index = 0; index<days.length; index++){
  console.log(days[index]);
}

for (let day of days){  //day는 다른 걸로 작성 가능
  console.log(day);
}
