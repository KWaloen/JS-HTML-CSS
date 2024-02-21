function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Only change code above this line
  }

    //------------------------------------------------------

  function convertToInteger(str) {
    const a = parseInt(str)
    return a
    }
    
    convertToInteger("56");

    //------------------------------------------------------

    function checkEqual(a, b) {

        return a == b ? "Equal" : "Not Equal"
        }
        
        checkEqual(1, 2);

     //------------------------------------------------------

        function checkSign(num) {

            return (num > 0) ? "positive" 
              : (num < 0) ? "negative"
              : "zero";
            
            }
            
            checkSign(10);        

//------------------------------------------------------
   
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

//------------------------------------------------------

function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(5));

//------------------------------------------------------

function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  }
  console.log(rangeOfNumbers(1, 5)); 
  

  
  

