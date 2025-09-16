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

// Base class for all users
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to update email
  setEmail(newEmail) {
    if (newEmail.includes('@')) {
      this.email = newEmail;
    } else {
      throw new Error("Invalid email address!");
    }
  }

  // Method that can be overridden
  getRole() {
    return "User";
  }
}

// Admin extends User
class Admin extends User {
  constructor(firstName, lastName, email, permissions = []) {
    super(firstName, lastName, email);
    this.permissions = permissions; // array of strings
  }

  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }

  removePermission(permission) {
    this.permissions = this.permissions.filter(p => p !== permission);
  }

  getRole() {
    return "Admin";
  }
}

// Complex object representing a system
const system = {
  users: [
    new User("John", "Doe", "john.doe@example.com"),
    new Admin("Jane", "Smith", "jane.smith@example.com", ["read", "write"])
  ],

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      throw new Error("Only instances of User or Admin can be added!");
    }
  },

  getAdmins() {
    return this.users.filter(user => user instanceof Admin);
  },

  findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  },

  // Seal the object to prevent adding/removing top-level properties
  initialize() {
    Object.seal(this);
  }
};

// Usage
system.initialize();
system.addUser(new User("Alice", "Brown", "alice.brown@example.com"));

console.log(system.getAdmins());
console.log(system.findUserByEmail("alice.brown@example.com").fullName);

// Attempting to add a new top-level property will fail
system.newProp = "test"; // won't work

// Admin permission management
const jane = system.getAdmins()[0];
jane.addPermission("delete");
console.log(jane.permissions); // ["read", "write", "delete"]
