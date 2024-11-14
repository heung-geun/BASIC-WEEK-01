// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다.
  // 입력에 따라 해당 기능을 실행합니다.
  calculator()
  printMultiplicationTable()
}

let x = 2;
let y = 1;


// 사칙연산 계산기 함수
function calculator(a, b, n) {
  // 여기에 코드를 작성하세요.
  return `${a}${n}${b}`;
}
// 구구단 출력 함수
function printMultiplicationTable() {
  // 여기에 코드를 작성하세요.
  while (x <= 19){
    while (y <= 9){
        // console.log(y +"확인 ㅎ");
        let a = x * y;
        console.log(x + "*" + y + "=" + a);
        ++y;
    }
    console.log(`${x}단`)
    y = 1;
    x++;
}
}

// 프로그램 실행
main();






multiplication();