// 필요한 모듈을 불러옵니다.
import readlineSync from "readline-sync";

// 프로그램 시작
function main() {
  console.log("1. 사칙연산 계산기 2. 구구단 출력기");
  console.log("1 or 2 중 선택해 주세요!");
  const choice = readlineSync.question("==> ");

  switch (choice) {
    case "1":
      calculator();
      break;
    case "2":
      printMultiplicationTable();
      break;
    default:
      console.log("잘못 선택하였습니다. 다시 선택해주세요");
      main();
      break;
  }
}
// 사칙연산 계산기 함수
function calculator() {
  console.clear();
  console.log("사칙연산 계산기 입니다.");
  console.log("1. [ + ] 2. [ - ] 3. [ * ] 4. [ / ]");
  console.log("1 ~ 4 중 선택해주세요!");
  const operator = readlineSync.question("==> ");
  console.log("첫번쨰 숫자를 입력해주세요.");
  const number1 = readlineSync.question("==> ");
  console.log("두번쨰 숫자를 입력해주세요.");
  const number2 = readlineSync.question("==> ");
  let answer = 0;

  switch (operator) {
    case "1":
      // return Number(number1) + Number(number2);
      // return +number1 + +number2; // +변수 = 문자 타입을 숫자로 변경해줌
      answer = number1 / 1 + +number2 / 1; // 나누기 1을 해서 암묵적으로 타입을 문자열 -> 숫자 로 변경 (곱하기도 가능)
      console.log(`${number1} + ${number2} = ${answer}`);
      break;
    case "2":
      answer = number1 - number2;
      console.log(`${number1} - ${number2} = ${answer}`);
      break;
    case "3":
      answer = number1 * number2;
      console.log(`${number1} * ${number2} = ${answer}`);
      break;
    case "4":
      answer = number1 / number2;
      console.log(`${number1} / ${number2} = ${answer}`);
      break;
    default:
      console.log("연산자를 잘못 입력하셨습니다.");
      setTimeout(function () {
        calculator();
      }, 1500);
      break;
  }
}
// 구구단 출력 함수
function printMultiplicationTable() {
  let x = 2;
  let y = 1;
  while (x <= 9) {
    console.log(`\n- ${x}단 -\n`);
    while (y <= 9) {
      // console.log(y +"확인 ㅎ");
      let a = x * y;
      console.log(x + "*" + y + "=" + a);
      ++y;
    }
    y = 1;
    x++;
  }
}

// 프로그램 실행
main();

// multiplication();
