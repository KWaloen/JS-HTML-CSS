function findElement(arr, func) {
    console.log(arr)
    for (let i = 0; i < arr.length; i++)
        if (arr[i]%2 === 0)
            return arr[i]    
  }
  
  findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);

  