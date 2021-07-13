//alert() 알려줌
//prompt 입력 받음
//confirm 확인 받음


const name = prompt("이름을 입력하세요."); 
//alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님, 환영합니다.`);

console.log(name); //prompt가 떴는데 취소를 누르면 null 입력
name = prompt("예약일을 입력해주세요.", "2020-10-");  //default 값 설정

//confirm
const isAdult = confirm("당신은 성인 입니까?");

console.log(isAdult); //확인 누르면 True, 취소를 누르면 False
//ex) 결제 하시겠습니까? 정말 삭제하시겠습니까?

//기본적인 창의 단점
// 스크립트 일시 정지
// 스타일링 X