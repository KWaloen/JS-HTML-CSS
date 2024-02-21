function getIndexToIns(arr, num) {
   
    let smallerNums = [];
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

  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35))