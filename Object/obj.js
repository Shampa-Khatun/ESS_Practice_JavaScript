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

let t = "";
for (let [fruit, amount] of Object.entries(fruit1)) {
  t += fruit + ": " + amount + "\n";
}
console.log(t);

let txt = JSON.stringify(fruit1);
console.log(txt); // {"Bananas":300,"Oranges":200,"Apples":500}

