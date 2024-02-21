// Setup
const myArray = [];

// Only change code below this line

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
} 

console.log(myArray)

//------------------------------------------------------

// Setup
const myArray = [];

// Only change code below this line

for (let i=1; i<6; i++) {
  myArray.push(i);
}

console.log(myArray)

//------------------------------------------------------

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray)

//------------------------------------------------------

// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i >= 1; i -= 2) {;
  myArray.push(i);
}
console.log(myArray)

//------------------------------------------------------

//iterate through array
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//------------------------------------------------------

//iterate through array and add up total
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0
let i = 0
for (i = 0; i < myArr.length; i++) {
  console.log(total += myArr[i])
}

//------------------------------------------------------

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(product *= arr[i][j]);
    }
  }
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//------------------------------------------------------

//do...while loop makes sure that the loop will run at least once before the condition check

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}
while (i < 5);

//------------------------------------------------------

//recursive function

function sum(arr, n) {
    // Only change code below this line
  
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
    // Only change code above this line
  }

  //------------------------------------------------------

  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
   if(contacts[i].firstName===name) {
      if(contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

  //------------------------------------------------------

  const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = []
  for (let i = 0; i < arr.length; i++) { 
  failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
      
   
  // Only change code above this line

  return failureItems 
}

const failuresList = makeList(result.failure);
console.log(failuresList)