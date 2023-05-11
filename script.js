//27. Create a function that takes a string and returns a string in which each character is repeated once.
//文字列を受け取り、各文字が1回繰り返される文字列を返す関数を作る。
function doubleChar(str){
  let repeat = '';
    for(let i=0; i<str.length; i++){
        repeat = repeat + str[i] + str[i]
    }
    return repeat
};

console.log(doubleChar('jahidul')); //jjaahhiidduull
console.log(doubleChar('islam')); //iissllaamm
console.log(doubleChar('zim')); //zziimm

//28. Write a function that takes a positive integer and return its factorial.
//正の整数を受け取り、その階乗を返す関数を作る。
function factorial(num){
  let positiveInt = 1;
    for (let i = 0; i<num ; i++){
        positiveInt = positiveInt * (num-i);
    }
    return positiveInt
};

console.log(factorial(5)); //120
console.log(factorial(10));  //3628800
console.log(factorial(8)); //40320

//29. Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
//整数 (正、負、またはその両方) の配列を取得し、各要素の絶対値の合計を返す。
function getAbsSum(arr){
  let absoluteSum = 0;
  for (let i = 0; i < arr.length; i++) {
    absoluteSum = absoluteSum + Math.abs(arr[i]);
  }
  return absoluteSum;
};

console.log(getAbsSum([1, -4, 3, 8, 0])); // 16
console.log(getAbsSum([1, 3, 0, -8, 0])); // 12
console.log(getAbsSum([1, -4, -3, 8, 0])); //16