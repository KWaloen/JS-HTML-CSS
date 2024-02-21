//Brushing up on JavaScript on jschallenger.com

function myFunction (a, b) {
    
    let stringArray = b.split(" ");
    let letter = a;
    let count = 0;

    stringArray.forEach(word => {
        if (word.includes(letter)) {
            count += 1;
        }
    })
    return count 
}

console.log(myFunction('z', 'how many times does the character occur in this sentence?'))


let num = 2.12397

function wholeNumber(num) {
    if (Math.round(num) === num) {
        return true
    } else {
        return false
    }
} 

console.log(wholeNumber(num))


//Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function roundToTwoDecimals(num) {
    let stringNum = num.toString();
    let decimalIndex = stringNum.indexOf(".");
    let checkNumber = stringNum.at(decimalIndex + 3);
    let roundedNumber = stringNum.at(decimalIndex + 2);
    let lastInt = 0;
    

    if (checkNumber >= 5) {
        let roundedup = parseInt(roundedNumber) + 1;
        lastInt = roundedup;
    } else {
        let leftAlone = parseInt(roundedNumber);
        lastInt = leftAlone;
    }


    let lastIntString = lastInt.toString();
    let numberWithoutLastInt = stringNum.substring(0, decimalIndex+2);
    returnValue = numberWithoutLastInt.concat(lastIntString);
    console.log(returnValue)
    return parseFloat(returnValue);


}

console.log(roundToTwoDecimals(num))

//solution return Number(a.toFixed(2))


