// (1) filter 구현

const objArray1 = [
  { name: "apple", price: 100, kg: 2 },
  { name: "banana", price: 200, kg: 1.7 },
  { name: "grape", price: 300, kg: 0.5 },
  { name: "banana", price: 200, kg: 1.8 },
];

// myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
function myFilter(arr, callback) {
  // myFilter 구현
  let funcResult1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      funcResult1.push(arr[i]);
    }
  }
  return funcResult1;
}

let result1 = objArray1.filter(function (obj) {
  return obj.name === "banana";
});

let result2 = myFilter(objArray1, function (obj) {
  return obj.name === "banana";
});

console.log(result1);
console.log(result2);
console.log(result1 === result2); // false? 아 주소가 다르구나 
// 객체는 값이 같아도 주소 단위로 저장하기 떄문에 false 가 나온다
console.log("----------");

// (2) map 구현

const objArray2 = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "grape", price: 300 },
];

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
let myMapResult2 = [];
function myMap(arr, callback) {
  // myMap 구현
  for (let i = 0; i < arr.length; i++) {
    myMapResult2.push(callback(arr[i]));
  }
  return myMapResult2;
}

const mapResult = objArray2.map((obj) => obj.price + 50);


const myMapResult = myMap(objArray2, function (obj) {
  return obj.price + 50;
});

console.log(mapResult);
console.log(myMapResult);
console.log("----------");

// (3) reduce 사용

const array = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.

const reduced = array.reduce(function(prev, current) {
    return prev + (current * 2);
}, 0);

console.log(reduced);

// (4) reduce 구현

function myReduce(arr, callback, startNum) {
    let result = startNum;
    for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

const myReduceResult = myReduce(array, function(prev, current) {
    return prev + (current * 2);
}, 0); 

console.log(myReduceResult);