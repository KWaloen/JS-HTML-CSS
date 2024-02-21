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