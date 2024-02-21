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