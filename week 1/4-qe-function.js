// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function addNum(num1, num2) {
    return +num1 + +num2;
}
console.log(addNum(5,6));
console.log("-------------")
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function userName(name) {
    console.log(`안녕하세요, ${name}님!`);
}
userName("윤형근");
console.log("-------------")
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function numsMax(num1, num2, num3) {
    let numMax = num1;
    if(num2 > numMax) {
        numMax = num2;
        // console.log("넘버2",num2);
    }
    if(num3 > numMax) {
        numMax = num3;
        // console.log("넘버3",num3);
    }
    return numMax;
}
console.log(numsMax(3, 5, 6));
console.log("-------------")

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function aaa(num1) {
    if(num1 % 2 === 0) {
        console.log("짝수");
    }else {
        console.log("홀수")
    }
}
aaa(4);
console.log("-------------")
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
let myA = ["1", "2", "형근"];

function print(array) {
    array.forEach(myA => {
        console.log(myA);
    });
}
print(myA);

// if 문 중첩 VS if else 문 차이점 번외 질문
// const age = 40;

// // 30 이상은 중년
// // 20 이상은 성인
// // 19 이하는 미성년자

// if (age >= 30) {
//   console.log("중년");
// }
// if (age >= 20) {
//   console.log("성인");
// }

