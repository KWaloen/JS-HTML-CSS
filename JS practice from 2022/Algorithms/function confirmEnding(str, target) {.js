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