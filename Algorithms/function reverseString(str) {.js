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
