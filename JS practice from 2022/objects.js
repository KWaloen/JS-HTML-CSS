//using objects for lookups

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

    result = lookup[val]
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//--------------------------------------------



// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop!="tracks" && value!="") {
      records[id][prop]=value;
    } else if(prop=="tracks" && records[id].hasOwnProperty("tracks") == false) {
      records[id][prop]=[value];
    } else if(prop=="tracks" && value != ""){
      records[id][prop].push(value);
    } else if(value == ""){
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA')
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
  updateRecords(recordCollection, 2548, "artist", "")
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
  console.log(recordCollection)

//--------------------------------------------

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents)

//--------------------------------------------

  function checkObj(obj, checkProp) {
    // Only change code below this line
    
    if(obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
      } else {
      return "Not Found";
      }
  
    // Only change code above this line
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))

  //--------------------------------------------

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree)

    //--------------------------------------------

    // Only change code below this line

class Vegetable {
  constructor(boob) {
    this.name = boob
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

    //--------------------------------------------

    const users = {
      Alan: {
        online: false
      },
      Jeff: {
        online: true
      },
      Sarah: {
        online: false
      }
    }
    
    function countOnline(usersObj) {
      // Only change code below this line
      let result = 0;
      for (let user in usersObj) {
        if (usersObj[user].online === true);{
        result ++;   
      }
    return result;
      // Only change code above this line
      }
    }
    
    console.log(countOnline(users));

    //--------------------------------------------

    let users = {
      Alan: {
        age: 27,
        online: false
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: false
      },
      Ryan: {
        age: 19,
        online: true
      }
    };
    
    function getArrayOfUsers(obj) {
      // Only change code below this line
    return Object.keys(obj);
      
      // Only change code above this line
    }
    
    console.log(getArrayOfUsers(users));

   