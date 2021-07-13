//객체 - method, this
const superman = {
  name : 'clark',
  age : 33,
  fly : function(){ //fly(){
    console.log('날아갑니다.')
  }
}

superman.fly();

//fly > 객체 프로퍼티로 할당된 함수 > method

const user = {
  name : 'Mike',
  sayHello8 : function(){
    console.log(`Hello, I'm ${user.name}`);
  }
}

user.sayHello8();

let boy = {
  name : 'Mike',
  sayhello,
}

let girl = {
  name : 'Jane',
  sayHello9,
}

boy.sayHello9();
boy.sayHello9();

sayHello9:()=>{
  console.log(`Hello, I'm ${this.name}`);
}

//화살표 함수는 일반 함수와 달리 자신만의 this를 가지지 않음
//화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴

let boy = {
  name : 'Mike',
  sayHello9 : () => {
    console.log(this);  //this = 전역객체
  }
}

boy.sayHello9();

//method

let boy = {
  name : "Mike",
  showName : function(){
    console.log(this.name)  //해당 객체를 가르킴
  }
};

let man = boy;
man.name = "Tom";

console.log(boy.name);

man.showName();

boy = null;

man.showName(); //this활용

let boy = {
  name : "Mike",
  sayThis: () => {
    console.log(this);
  }
};

boy.sayThis();

//오류

