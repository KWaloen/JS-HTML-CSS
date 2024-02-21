function convertToF(celsius) {
    let fahrenheit = celsius * (9/5)+32;
    return fahrenheit;
  }
  
  console.log(convertToF(30));

//------------------------------------------------------------------

  function reverseString(str) {
    let array = str.split("")
    for (let letters in str);
        let revArray = array.reverse() 
        console.log(revArray)
        let revStr = revArray.toString()
        console.log(revStr)
        let revStrNoComma = revStr.replace(/,/g, "")
            return revStrNoComma;
    }
    
console.log(reverseString("hello"));

//------------------------------------------------------------------

  function factorialize(num) {
    let array = []
    if (num === 0) {
        return 1;
    } else {
        while (num > 0) {
            array.push(num);
            num--;
        }

        console.log(array)

        let product = 1;
        for (let i = 0; i < array.length; i++) {
        product = product * array[i]; 
        }
        
        return product
    }    
        
}
  
  console.log(factorialize(5));

//------------------------------------------------------------------

    function findLongestWordLength(str) {
      let longestWord = 0;
      let array = str.split(" ")
      console.log(array)
          for (var i = 0; i<array.length; i++) {
              console.log(array[i].length)
              if (array[i].length > longestWord) {
                  longestWord = array[i].length
              }
          
          } return longestWord
  } 
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//------------------------------------------------------------------

function largestOfFour(array) {
  let bigArr = []
  
  let biggestNum0 = Math.max(...array[0]);
  bigArr.push(biggestNum0);
  
  let biggestNum1 = Math.max(...array[1]);
  bigArr.push(biggestNum1);

  let biggestNum2 = Math.max(...array[2]);
  bigArr.push(biggestNum2);
  
  let biggestNum3 = Math.max(...array[3]);
  bigArr.push(biggestNum3);

  return bigArr
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largestOfFour(array) {
  let bigArr = []
  
  for (let i = 0; i < array.length; i++) {
      let largestNumber = array[i][0];
      console.log(largestNumber);
      for (let j = 1; j < array.length; j++) {
          if (array[i][j] > largestNumber) {
              largestNumber = array[i][j];
          }
      }
      bigArr[i] = largestNumber;
  }
  return bigArr;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//------------------------------------------------------------------

function confirmEnding(str, target) {
    
  let array = str.split("");
  let targetArray = target.split("")
  let targetLength = target.length;
  let strLength = array.length;
  let pos = strLength - targetLength;
  let test = array.slice(pos, strLength);
  let testStr = test.toString()
  let targetArrayStr = targetArray.toString()
  let testStrNoComma = testStr.replace(/,/g, "")
  let targetArrayStrNoComma = targetArrayStr.replace(/,/g, "")

  if (testStrNoComma === targetArrayStrNoComma) {
      return true 
  } else { 
      return false
  }
  
}

console.log(confirmEnding("Bastian", "ian"));
console.log(confirmEnding("Connor", "n"))

//------------------------------------------------------------------

function repeatStringNumTimes(str, num) {
  let array = []
  console.log(str);
  console.log(num);

  for (let step = 0; step < num; step++) {
  array.push(str)
   }
  
  let test = array.toString()
  console.log(test)
  let repeatStr = test.replace(/,/g, "")
  console.log(repeatStr)
   return repeatStr

 }
 
 repeatStringNumTimes("abc", 3);

 //------------------------------------------------------------------

 function truncateString(str, num) {
  console.log(str)
  console.log(num)

  let strLength = str.length
  let test = str.slice(0, num);
  console.log(test)
  
  if (strLength > test.length) {
      let answer = test + "..."
      console.log(answer)
      return answer  
  } else {
      return str
  }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Absolutely Longer", 2))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

 //------------------------------------------------------------------

 function findElement(arr, func) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++)
      if (arr[i]%2 === 0)
          return arr[i]    
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

 //------------------------------------------------------------------

function booWho(bool) {
  let type = typeof bool
  console.log(type)
  return typeof bool === "boolean"
}
console.log(booWho(true));

 //------------------------------------------------------------------

 function titleCase(str) {
  let array = []
  let newArray = []
  
  let strLowerCase = str.toLowerCase()
  let words = strLowerCase.split(" ")
  console.log(words)
  console.log(words[2][0])
  
  for (let i = 0; i < words.length; i++) {
      let capital = words[i][0].toUpperCase();
      let newWords = capital + words[i].slice(1);
      console.log(newWords)
      array.push(newWords)
  }   
newArray = array.join(" ")
console.log(newArray)
return newArray

}

console.log(titleCase("I'm a little tea pot"));

 //------------------------------------------------------------------

 function bouncer(arr) {
  let falseArr = [];    
  

for (let i = 0; i < arr.length; i++) {
  if (arr[i])
  falseArr.push(arr[i])
}
return falseArr;
}

 //------------------------------------------------------------------

 function getIndexToIns(arr, num) {
   
  let  smallerNums = [];
  let largerNums = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
          smallerNums.push(arr[i])
      }
      else if (num < arr[i]) {
          largerNums.push(arr[i])
      }
  }

 let indexForNum = smallerNums.length;
  
  return indexForNum;
}

 //------------------------------------------------------------------

 function mutation(arr) {  


  let test = arr[1].toLowerCase()
  console.log(test)
  let target = arr[0].toLowerCase()
  console.log(target)
  
  for (let i = 0; i < test.length; i++) {
  if (target.indexOf(test[i]) < 0) return false
  } return true
  
  }
  
  console.log(mutation(["floor", "for"]))
  console.log(mutation(["Noel", "Ole"]))
  console.log(mutation(["Mary", "Army"]))
  console.log(mutation(["floor", "for"]))
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["Mary", "Aarmy"]));
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
  
 //------------------------------------------------------------------
 
 function chunkArrayInGroups(arr, size) {   let x = 0
  let array = []
  let index = 0;

         
  while (index < arr.length) {
      array.push(arr.slice(index, index+size));
      index += size;
      
  }
      


  return array
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
  