//논리 연산자
//|| (or) 모든 값이 false 일때만 false 반환, 첫번째 true 를 발견하는 즉시 평가를 멈춤.
//&& (and) 하나라도 false 면 false, 첫번째 false를 발견하는 즉시 평가를 멈춤.
//! (not) 반대로 변경 false > true

// OR
//이름이 Tom이거나, 성인이면 통과

const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
  console.log('통과');
}

// And
//이름이 Mike이고 성인이면 통과

const name = "Mike";
const age = 30;

if(name === 'Mike' || age > 19){
  console.log('통과');
} else {
  console.log('돌아가');
}

//Not
//나이를 입력받아 성인이 아니면 돌아가라고.

const age = prompt('나이를 입력하세요 : ');
const isAdult = age > 19;

if(!isAdult){
  console.log('돌아가');
}

//우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const name = 'Jane';
isAdult = true;

//if(gender === 'M' && name === 'Mike' | isAdult) == if((gender === 'M' && name === 'Mike') || isAdult) 
if(gender === 'M' && (name === 'Mike' || isAdult)){
  console.log('통과');
}else{
  console.log('돌아가')
}

//결과 > 통과
//앞에 && 계산 후 || 계산 이기 때문에 FALSE && TRUE || TRUE > TRUE || TRUE > TRUE


