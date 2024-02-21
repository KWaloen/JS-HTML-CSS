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