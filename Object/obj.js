// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";
console.log(man.firstName);

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj.pears); // 900

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person1.firstName);
// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);
console.log(person1.firstName); // Anne

const person3 = {
  firstName: "John",
  lastName : "Doe",
  age      :  50,
  Hobby : {name: "Football" , type: "indoor"}
}
person3.nationality = "English";
let x = "firstName";
let y = "age";

// Accessing the values of the properties
console.log(person3[x] + " is " + person3[y] + " years old" +  " and his nationality is " + person3.nationality);
console.log(person3.Hobby.name); // Football

// Deleting a property
delete person3.age;
console.log(person3.age); // undefined

function Person4(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
  this.sirname = function() {
    return this.lastName;
  };
}

// Create 2 Person objects
const myFather = new Person4("John", "Doe", 50, "blue");
const myMother = new Person4("Sally", "Rally", 48, "green");
const Shampa = new Person4("Shampa", "Khatun", 24, "black");

console.log("My father is " + myFather.firstName + " my mother is " + myMother.firstName + " and I am " + Shampa.firstName);
console.log("my sirnamne is " + Shampa.sirname());

// Will Not Work
Person4.nationality = "English"; // cz amra ekhane object er bahire add korte parbo na
// Add a Name Method
myMother.changeName = function (name) {
  this.lastName = name;
}

// Change Name
myMother.changeName("Doe");
console.log("my mother is " + myMother.firstName + " " + myMother.lastName);

//prototype is like a shared toolbox for all objects created yby new person4()
Person4.prototype.changeName = function (name) {
  this.lastName = name;
}

myFather.changeName("Smith");
console.log("my father is " + myFather.firstName + " " + myFather.lastName);


const person5 = {
  firstName: "Shampa",
  lastName: "Raisa",
  id: 1903173,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person5.fullName());


const person6 = {
  firstName: "John",
  lastName: "Doe"
};
let text = person6;
console.log(text);
console.log(typeof text); 

let w = "";
for (let key in person6) {
  w += person6[key] + " ";
}
console.log(w); // Output: John Doe 

const person8 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array from the Properties
//Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
const myArray = Object.values(person8);
console.log(myArray); // [ 'John', 30, 'New York' ]

// Stringify the Array
let msg = myArray.toString();
console.log(msg); // John,30,New York

const fruit1 = {
  Bananas:300, 
  Oranges:200, 
  Apples:500
};

fruit1.FunctionName = function() {
  return this;
};
console.log(fruit1.FunctionName());

// Object.entries() method returns an array of the key/value pairs in an object
// We can use for...of loop to access the key/value pairs.
let t = "";
for (let [fruit, amount] of Object.entries(fruit1)) {
  if (typeof amount !== 'function') {
    t += fruit + ": " + amount + "\n";
  }
}
console.log(t);

let txt = JSON.stringify(fruit1);
console.log(txt); // {"Bananas":300,"Oranges":200,"Apples":500}

const person9 = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;
  }
};

console.log(person9.myFunction());

const user = {
  id: 1,
  profile: {
    username: "shampa",
    email: "s@example.com"
  }
};

let { profile: { username, email }, country = " Bangladesh", id } = user;
console.log(username, email, country, id); 

const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = numbers;
console.log(a + "\n" + b + "\n" + rest );

const fruits2 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

//here avobe callback function is similar to this function
/*function myCallback(fruit) {
  return fruit.quantity > 200 ? "ok" : "low";
}
*/

// Group by ok and low
const result = Object.groupBy(fruits2, myCallback);

// Display Results
let txt2 ="\nThese fruits are Ok: \n";
for (let [x,y] of result.ok.entries()) {
  txt2 += y.name + " " + y.quantity + "\n";
}

txt2 += "\nThese fruits are low: \n";
for (let [x,y] of result.low.entries()) {
  txt2 += y.name + " " + y.quantity + "\n";
}
console.log(txt2);

const person11 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add a Property
Object.defineProperty(person11, "year", {value:"2008"})
console.log(person11.year); // 2008 
// Change a Property
Object.defineProperty(person11, "language", {value:"BN"})
console.log(person11.language);
// Delete a Property
delete person11.year;
console.log(person11.year); // undefined
// Get all the properties of the object
let prop = Object.getOwnPropertyNames(person11);
console.log(prop); // [ 'firstName', 'lastName', 'language' ]

Object.defineProperty(person11, "language", {writable:false});
person11.language = "FR";
console.log(person11.language); // ekhane write kora jaini.. ager BN e output show korche

Object.defineProperty(person11, "language", {enumerable:false});
for (let x in person11) 
  {
    console.log(x)
  } // language property show korbe na

  Object.keys(person11); // Get all Enumerable Properties

  //GETTERS AND SETTERS 
  // Getter: A function that gets or returns the value of a property.
  // Setter: A function that sets or updates the value of a property.

const person12 = {
  firstName: "Shampa",
  lastName: "Khatun"
};

// Add a "fullName" property with getter and setter
Object.defineProperty(person12, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});

// Using the getter
console.log(person12.fullName); // Shampa Khatun

// Using the setter
person12.fullName = "Shahariar Amin";
console.log(person12.firstName); 
console.log(person12.lastName);  
console.log(person12.fullName); 

const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter); 


//The Object.preventExtensions() method prevents adding properties to an object.

const leafs = {
  type: "maple",
  color: "red"
}
Object.preventExtensions(leafs);
leafs.height = "15cm"; // will not be added 
leafs.color = "green"; // will be changed  cz oi command ekta prevent kore
Object.preventExtensions(leafs);
fruits.push("yellow");
console.log(leafs.height); // undefined
console.log(leafs.color); // green
console.log(Object.isExtensible(leafs)); // false

//The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
Object.seal(car);
car.color = "red"; // will be changed cz eta amra to add korchina just change korchi
console.log(car.color); // red
car.owner = "Shampa"; //  will NOT work, new property cannot be added
delete car.model;      //  will NOT work, existing property cannot be deleted
console.log(car);
console.log(Object.isSealed(car)); // true

//The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The freeze method returns the same object that was passed in. 
const book = {
  title: "Learn JavaScript",
  page: 500
};
Object.freeze(book);
book.page = 600; // will NOT work
book.author = "Shampa"; // will NOT work
delete book.title; // will NOT work
console.log(book.page);
console.log(book);
console.log(Object.isFrozen(book)); // true
