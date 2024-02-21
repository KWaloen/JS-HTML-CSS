function chunkArrayInGroups(arr, size) {   let x = 0
    let array = []
    let index = 0;

           
    while (index < arr.length) {
        array.push(arr.slice(index, index+size));
        index += size;
        
    }
        


    return array
}

  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))