// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
let num1 = 10;
if (num1 % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}
console.log("-------------")
// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
let a = 90;
if (a >= 90) {
  console.log("A");
} else if (a >= 80) {
  console.log("B");
} else if (a >= 70) {
  console.log("C");
} else {
  console.log("D");
}
console.log("-------------")
// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
let age = 30;
if (a >= 20) {
  console.log("성인");
} else {
  console.log("미성년자");
}

// 문제 4: switch문을 사용하여 요일을 출력하세요.
let day = "월";
switch (day) {
  case "월":
    console.log("월");
    break;
  case "화":
    console.log("화");
    break;
  case "수":
    console.log("수");
    break;
  case "목":
    console.log("목");
    break;
  case "금":
    console.log("금");
    break;
  case "토":
    console.log("토");
    break;
  case "일":
    console.log("일");
    break;
  default:
    break;
}
// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
let num3 = 10;
let num4 = 15;
if(num3 > num4) {
    console.log(num3);
}else {
    console.log(num4);
}