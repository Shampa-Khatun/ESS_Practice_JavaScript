// Remove duplicates from array using Set
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// Loop through a Set
const colors = new Set(["red", "green", "blue"]);
for (let color of colors) {
  console.log(color);
}

const myMap = new Map();

const objKey = { id: 1 };
const funcKey = function() {};
const strKey = "hello";

myMap.set(objKey, "Object as key");
myMap.set(funcKey, "Function as key");
myMap.set(strKey, "String as key");

console.log(myMap.get(objKey));  // Object as key
console.log(myMap.get(funcKey)); // Function as key
console.log(myMap.get(strKey));  // String as key

// Loop through a Map
for (let [key, value] of myMap) {
  console.log(key, ":", value);
}   
// Map size
console.log("Map size:", myMap.size); // 3
// Check if a key exists
console.log("Has objKey?", myMap.has(objKey)); // true
// Delete a key
myMap.delete(strKey);
console.log("After deletion, has strKey?", myMap.has(strKey)); // false
// Clear the map
myMap.clear();
console.log("Map size after clear:", myMap.size); // 0  


// Store student marks
const students = new Map();
students.set("Alice", 85);
students.set("Bob", 92);
students.set("Charlie", 78);

// Iterate
for (let [name, score] of students) {
  console.log(`${name} scored ${score}`);
}

// Convert Map → Array
console.log([...students]); 

const arr2 = [
  ["David", 88],
    ["Eva", 95]
];
const newStudentsMap = new Map(arr2);
console.log(newStudentsMap); 
// Map(2) { 'David' => 88, 'Eva' => 95 }   


// 1. Create a new Set
const carBrands = new Set(["Toyota", "BMW", "Tesla", "Toyota"]); 
// duplicate "Toyota" ignored
console.log("Initial Set:", carBrands); 
// Set { 'Toyota', 'BMW', 'Tesla' }

// 2. add(value)
carBrands.add("Audi");
carBrands.add("BMW"); // ignored (duplicate)
console.log("After add:", carBrands); 
// Set { 'Toyota', 'BMW', 'Tesla', 'Audi' }

// 3. delete(value)
carBrands.delete("Tesla");
console.log("After delete:", carBrands); 
// Set { 'Toyota', 'BMW', 'Audi' }

// 4. has(value)
console.log("Has BMW?", carBrands.has("BMW"));   // true
console.log("Has Tesla?", carBrands.has("Tesla")); // false

// 5. size
console.log("Size:", carBrands.size); // 3

// 6. values() / keys() (same for Set)
console.log("Values:", carBrands.values()); 
// [Set Iterator] { 'Toyota', 'BMW', 'Audi' }

// 7. entries()
console.log("Entries:", carBrands.entries()); 

// 8. forEach()
console.log("Using forEach:");
carBrands.forEach((brand) => console.log(brand));


// 9. clear()
carBrands.clear();
console.log("After clear:", carBrands); 

const admin = new Set(["read", "write", "delete", "manage"]);
const editor = new Set(["read", "write"]);
const viewer = new Set(["read"]);
const guest = new Set(["comment"]);

console.log("Admin ∪ Editor:", admin.union(editor));
console.log("Admin ∩ Editor:", admin.intersection(editor));
console.log("Admin - Editor:", admin.difference(editor));
console.log("Editor Δ Viewer:", editor.symmetricDifference(viewer));
console.log("Is Viewer ⊆ Editor?", viewer.isSubsetOf(editor));
console.log("Is Admin ⊇ Viewer?", admin.isSupersetOf(viewer));
console.log("Is Guest disjoint with Admin?", guest.isDisjointFrom(admin));
console.log("Is Viewer disjoint with Editor?", viewer.isDisjointFrom(editor));
// Adding methods to Set prototype for set operations
Set.prototype.union = function(setB) {
  return new Set([...this, ...setB]);
};
Set.prototype.intersection = function(setB) {
  return new Set([...this].filter(x => setB.has(x)));
};
Set.prototype.difference = function(setB) {
  return new Set([...this].filter(x => !setB.has(x)));
};  
Set.prototype.symmetricDifference = function(setB) {
  return new Set([...this.difference(setB), ...setB.difference(this)]);
};
Set.prototype.isSubsetOf = function(setB) {
  for (let elem of this) {
    if (!setB.has(elem)) return false;
  }
  return true;
};
Set.prototype.isSupersetOf = function(setB) {
  return setB.isSubsetOf(this);
};
Set.prototype.isDisjointFrom = function(setB) {
  for (let elem of this) {
    if (setB.has(elem)) return false;
  }
  return true;
};  
// Complex object practice with classes and methods
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
    get fullName() {
    return `${this.firstName} ${this.lastName}`;
    }
    setEmail(newEmail) {
    if (newEmail.includes('@')) {
      this.email = newEmail;
    } else {
      throw new Error("Invalid email address!");
    }  
    }
    getRole() {
    return "User";
    }
}

class Admin extends User {
    constructor(firstName, lastName, email, permissions = []) { 
    super(firstName, lastName, email);
    this.permissions = permissions; 
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

const system = {    
    users: new Map(), // Map of userId → User/Admin object
    addUser(user) {
    if (user instanceof User) {
      this.users.set(user.email, user); // using email as unique ID
    } else {
      throw new Error("Only User or Admin instances can be added.");
    }
    },
    getAdmins() {
    return [...this.users.values()].filter(user => user instanceof Admin);
    },
    getUsers() {
    return [...this.users.values()].filter(user => user instanceof User && !(user instanceof Admin));
    },
    findUserByEmail(email) {
    return this.users.get(email);
    }   
};

// --- Demo usage for output ---
const user1 = new User("Alice", "Smith", "alice@example.com");
const user2 = new User("Bob", "Brown", "bob@example.com");
const admin1 = new Admin("Carol", "Jones", "carol@example.com", ["read", "write"]);

system.addUser(user1);
system.addUser(user2);
system.addUser(admin1);

console.log("All users:");
for (const u of system.users.values()) {
  console.log(u.fullName, "-", u.getRole());
}

console.log("Admins:");
for (const a of system.getAdmins()) {
  console.log(a.fullName, "Permissions:", a.permissions);
}

console.log("Regular users:");
for (const u of system.getUsers()) {
  console.log(u.fullName);
}

console.log("Find user by email (bob@example.com):", system.findUserByEmail("bob@example.com").fullName);