let dog = {
    name: "Koda",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} //or dog.numLegs
};

console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs())
//-------------------------------------------------------------------

function Doggy() { //constructor
    this.name = "Buddy";
    this.color = "golden";
    this.numLegs = 4;
}

let hound = new Doggy();
console.log(hound)

//-------------------------------------------------------------------

function Dog(name, color) { //constructor
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Buddy Boo", "black"); //instance of constructor
console.log(terrier)

//-------------------------------------------------------------------

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

let myHouse = new House(4);
console.log(myHouse instanceof House);

//-------------------------------------------------------------------

function Bird(name) {
    this.name = name; //own property
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownPropsBird = [];
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {ownPropsBird.push(property);
    }
  }
  
  console.log(ownPropsBird)

//-------------------------------------------------------------------

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4; //prototype - all Dog objects have numLegs property without having to dupilcate
  
  let beagle2 = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  console.log(beagle2.constructor===Dog) //constructor
for (let property in beagle2) {
  if (beagle2.hasOwnProperty(property)) {ownProps.push(property); 
  } else {
    prototypeProps.push(property);
  }
  }

  console.log(ownProps)
  console.log(prototypeProps)

//-------------------------------------------------------------------

function Dog(name) {
    this.name = name;
  }

  function joinDogFraternity(candidate) {
  if (candidate.constructor===Dog) {
    return true;
  } else {
    return false;
  }}

//-------------------------------------------------------------------

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
      console.log("nom nom nom");
  },
  describe: function() {
      console.log("My name is " + this.name);
  }
  };

//-------------------------------------------------------------------

//Don't repeat yourself (DRY)
//Animal is the supertype
//Use supertype to inherit properties to prevent repetitions
/*

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
};
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
    }
  };
*/


//-------------------------------------------------------------------

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line

//-------------------------------------------------------------------

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Setting the child's prototype to an instance of the parent
Dog.prototype = Object.create(Animal.prototype);

let kokoni = new Dog("Buddy");
kokoni.eat();

//-------------------------------------------------------------------

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let eagle = new Bird();
Bird.prototype.constructor = Bird;
eagle.constructor;

let husky = new Dog();
Dog.prototype.constructor = Dog;
husky.constructor;

//-------------------------------------------------------------------

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


//Dog object inherits Animal function
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

//Adding new bark function to Dog
Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle3 = new Dog();

//-------------------------------------------------------------------

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

//The line below overwrites the Penguin.fly prototype but doesnt change the original Bird.fly prototype 
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird."
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//-------------------------------------------------------------------

//-------------------------------------------------------------------

//-------------------------------------------------------------------

//-------------------------------------------------------------------

//-------------------------------------------------------------------
