//생성자 함수

//객체 리터럴

let user = {
  name : 'Mike',
  age : 30,
}

//생성자 함수
//첫 글자는 대문자로
function User(name,age){
  this.name = name;
  this.age = age;
}
//new 연산자를 사용해서 함수호출
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

//new 함수명();
/*function User(name,age){
  this = {};  //  실제 존재 X
  this.name = name;
  this.age = age;
  return this; // 실제 존재 X
} */

function User1(name,age){
  this.name = name;
  this.age=age;
  this.sayName = function(){
    console.log(this.name); //this > user5
  }
}

let user5 = new User1('Han', 40);
user5.sayName();  //'Han'

//생성자 함수 : 상품 객체를 생성해보자.

function Item(title, price){
  //this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function(){
    console.log(`가격은 ${price}원 입니다.`);
    }
  //return this;
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000); //new를 생략하면 함수 리턴 값 > undefined : 리턴 값이 X
const item3 = new Item("지갑", 9000);

console.log(item1, item2, item3);

item3.showPrice();

