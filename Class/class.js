// In JavaScript, a class is like a blueprint for creating objects with properties and methods.
class Car {
  // Constructor runs when a new object is created from the class.
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // Method to calculate the car's age
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  // Method to return the model name
  model(x) {
    return x;
  }
}

const myCar = new Car("Ford", 2014); // Create a new object of class Car.
console.log("My car is " + myCar.age() + " years old.");
console.log("Car model: " + myCar.model("Mustang"));

class Car2 {
  constructor(brand) {
    this._carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  set carname(x) {
    this._carname = x;
  }
  get carname() {
    return this._carname;
  }
}

const myCar3 = new Car2("Ford");
myCar3.carname = "Volvo";
console.log(myCar3.present());
class Model extends Car2 {
  constructor(brand, mod) {
    super(brand); // super() method refers to the parent class.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar2 = new Model("Ford", "Mustang");
console.log(myCar2.show());