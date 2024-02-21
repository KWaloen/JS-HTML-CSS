function bouncer(arr) {
    let falseArr = [];    
    

for (let i = 0; i < arr.length; i++) {
    if (arr[i])
    falseArr.push(arr[i])
}
 return falseArr;
}

    
       
console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer([false, null, 0, NaN, undefined, ""]))