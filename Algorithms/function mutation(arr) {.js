function mutation(arr) {  


let test = arr[1].toLowerCase()
console.log(test)
let target = arr[0].toLowerCase()
console.log(target)

for (let i = 0; i < test.length; i++) {
if (target.indexOf(test[i]) < 0) return false
} return true

}

console.log(mutation(["floor", "for"]))
console.log(mutation(["Noel", "Ole"]))
console.log(mutation(["Mary", "Army"]))
console.log(mutation(["floor", "for"]))
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))


