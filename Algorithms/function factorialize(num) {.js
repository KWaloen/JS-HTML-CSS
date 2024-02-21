function factorialize(num) {
    let array = []
    if (num === 0) {
        return 1;
    } else {
        while (num > 0) {
            array.push(num);
            num--;
        }

        console.log(array)

        let product = 1;
        for (let i = 0; i < array.length; i++) {
        product = product * array[i]; 
        }
        
        return product
    }    
        
}
  
  console.log(factorialize(5));