const animal = {
  type: "Unknown",
  sound() {
    return "Some sound";
  }
};

// Create a Dog object that inherits from animal
const dog = Object.create(animal);
dog.type = "Dog";
dog.name = "Buddy";
dog.tricks = ["sit", "roll", "fetch"];
dog.owner = {
  firstName: "Sam",
  lastName: "Lee",
  address: {
    city: "Dhaka",
    street: "Main Road",
    number: 12
  }
};
dog.sound = function() {
  return "Woof!";
};
dog.showTricks = function() {
  return this.tricks.join(", ");
};

// Add a new trick
dog.tricks.push("play dead");

// Remove a property
delete dog.owner.address.number;

// Use Object.assign to add more info
Object.assign(dog, { age: 3, color: "brown" });

// Loop through all properties (own only)
for (let key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key + ":", dog[key]);
  }
}

// Use Object.fromEntries for quick lookup
const foods = [
  ["bone", 5],
  ["meat", 2],
  ["biscuit", 10]
];
const foodObj = Object.fromEntries(foods);
console.log("Biscuits left:", foodObj.biscuit);

// Type check
console.log(typeof dog); // object
console.log(typeof dog.sound); // function