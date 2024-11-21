// (1) find 구현

const objArray = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myFind 를 구현하여 arr.find 와 동일한 값이 나오도록 하기.
function myFind(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
        return arr[i];
    }
  }
}

const result1 = objArray.find(function (obj) {
  return obj.name === "banana";
});

const result2 = myFind(objArray, function (obj) {
  return obj.name === "banana";
});
console.log(result1 === result2); // true

// // (2) findIndex 구현

// const objArray = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 200 },
//   { name: "grape", price: 300 },
// ];

// // myFindIndex 를 구현하여 arr.findIndex 와 동일한 값이 나오도록 하기.
// function myFindIndex(arr, callback) {
//   // (3) myFindIndex 구현
// }

// const result1 = objArray.findIndex(function (obj) {
//   return obj.name === "banana";
// });

// const result2 = myFind(objArray, function (obj) {
//   return obj.name === "banana";
// });
// console.log(result1 === result2); // true

// // (4) filter 사용

// const objArray = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 200 },
//   { name: "grape", price: 300 },
// ];

// // filter 를 이용하여 price가 200 이상인 객체 filter

// // map 사용

// const objArray = [
//   { name: "apple", price: 100 },
//   { name: "banana", price: 200 },
//   { name: "grape", price: 300 },
// ];

// // map을 이용하여 price값만 모아둔 배열 만들기
