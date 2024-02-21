 //--------------------------------------------

 function reverseString(str) {
    let revstr = [];
    for (let letters in str) { 
      for (let i = 0; i < str.length; i++) {
        revstr.unshift(str[i])
      }
      let lettersflipped = revstr.join("")
    return lettersflipped;
    }
  
  }
  
  console.log(reverseString("hello"));

 //--------------------------------------------

  function factorialize(num) {
    if (num < 0) {
          return -1;
    }else if (num == 0){ 
        return 1;
    }else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(5));

 //--------------------------------------------  


 function factorialize(num) {
    if(num == 1 | num == 0) {
      return 1;
    }else{
    for (var i = num - 1; i >= 1; i--) {
     num *= i;}
    return num;
  }}
  factorialize(5);

 //--------------------------------------------  

  function findLongestWordLength(str) {
    let myArr = str.split(" ")
    let count = []
    for (let i = 0; i < myArr.length; i++)
      count.push(myArr[i].length)
      Math.max(...count)
    return Math.max(...count);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

 //--------------------------------------------  

  function largestOfFour(arr) {
    console.log(arr)
    let max = []
    for (let i = 0; i < arr.length; i++)
      max.push(Math.max(...arr[i]))
    console.log(max)
  
  return max
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


 //--------------------------------------------  
function confirmEnding(str, target) {
  
  let targetsplit = target.split("")
  let strLength = str.length
  let targetLength = targetsplit.length
  let endnum = strLength-targetLength
  
  if (str.substring(endnum, strLength) === target) {
    return true
  } else {
    return false
  }
    
}
console.log(confirmEnding("Congratulation", "on"))

 //--------------------------------------------  

 function repeatStringNumTimes(str, num) {
  let a = "";

  for (let i = 0; i < num; i++) {
    a += str;
  }

  return a
  
}

console.log(repeatStringNumTimes("abc", 4));

 //-------------------------------------------- 

