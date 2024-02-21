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