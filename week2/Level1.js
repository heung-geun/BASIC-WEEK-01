// (1) forEach 사용

const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

objArray.forEach(element => {
  
});

  // forEach를 이용하여 objArray의 name을 모두 출력
  // apple
  // banana
  // grape

//   // (2) indexOf 구현

// myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr1 = [1, 1, 3, 3, 5];
function myIndexOf(arr1, value) {
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] === value) {
      return i;
    }
  }
}

const index1 = arr1.indexOf(3); // 2
const index2 = myIndexOf(arr1, 3); // 2
console.log(index1);
console.log(index2);
console.log(index1 === index2); // true
console.log('-----------');
// (3) includes 구현

// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arr2 = [1, 2, 3, 4, 5];
function myIncludes(arr2, value) {
  for(let i = 0; i < arr2.length; i++){
    if(arr2[i] === value){
      return true;
    }
  }
  return false;
}

const includes1 = arr2.includes(6); // true
const includes2 = myIncludes(arr2, 6); // true
console.log(includes1 === includes2); // true
