function repeatStringNumTimes(str, num) {
   let array = []
   console.log(str);
   console.log(num);

   for (let step = 0; step < num; step++) {
   array.push(str)
    }
   
   let test = array.toString()
   console.log(test)
   let repeatStr = test.replace(/,/g, "")
   console.log(repeatStr)
    return repeatStr

  }
  
  repeatStringNumTimes("abc", 3);