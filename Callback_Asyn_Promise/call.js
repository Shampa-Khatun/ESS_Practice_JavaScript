function display(any){
    console.log(any);
}
function calculator(a, b){
    let sum = a+b;
    display("Sum: " + sum);
}
calculator(5, 3); 

//with callback
function display1(any){
    console.log(any);
}
function calculator1(a, b, callback){
    let sum = a+b;
    callback("Sum: " + sum);
}
calculator1(5, 3, display1); 

const num = [4, 1, -20, -7, 5, 9, -6];
const positive = removeneg(num, (x)=> x>0);
console.log(positive); // [4, 1, 5, 9]

function removeneg(num, callback){
    let result = [];
    for (const n of num){
        if (callback(n)) {
            result.push(n);
        }
    }
    return result;
}

//setimeout
function display3(any){
    console.log(any);
}
function calculator3(a, b, callback){
    let sum = a+b;
    setTimeout(() => {
        callback("Sum: " + sum);
    }, 2000);
}   
calculator3(5, 3, display3);


// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
// console.log("Current time: " + d.toLocaleTimeString());
    
// }

// callback hell
function getUser(id, callback) {
  setTimeout(() => {
    console.log("User fetched from DB");
    callback({ id: id, name: "Shampa" });
  }, 1000);
}

function getPosts(user, callback) {
  setTimeout(() => {
    console.log(`Posts fetched for ${user.name}`);
    callback(["Post1", "Post2", "Post3"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log(`Comments fetched for ${post}`);
    callback(["Comment1", "Comment2"]);
  }, 1000);
}

getUser(1, function (user) {
  getPosts(user, function (posts) {
    getComments(posts[0], function (comments) {
      console.log("Final Result:", comments);
    });
  });
});

// error handling with callback
function fetchData(url, callback) {
  setTimeout(() => {
    if (!url.startsWith("http")) {
      return callback("Invalid URL", null);
    }
    callback(null, { data: "Some fetched data" });
  }, 1000);
}

fetchData("invalid-url", (err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Success:", result);
  }
});

function loginUser(username, password, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback({ username });
  }, 1000);
}

function getCartItems(user, callback) {
  setTimeout(() => {
    console.log(`Cart fetched for ${user.username}`);
    callback(["Laptop", "Book", "Pen"]);
  }, 1000);
}

function checkout(cartItems, callback) {
  setTimeout(() => {
    console.log("Checkout done for:", cartItems);
    callback("Order successful");
  }, 1000);
}

loginUser("shampa", "12345", function (user) {
  getCartItems(user, function (cart) {
    checkout(cart, function (msg) {
      console.log(msg);
    });
  });
});

//event-driven callback
function loginUser(username, password, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback({ username });
  }, 1000);
}

function getCartItems(user, callback) {
  setTimeout(() => {
    console.log(`Cart fetched for ${user.username}`);
    callback(["Laptop", "Book", "Pen"]);
  }, 1000);
}

function checkout(cartItems, callback) {
  setTimeout(() => {
    console.log("Checkout done for:", cartItems);
    callback("Order successful");
  }, 1000);
}

loginUser("shampa", "12345", function (user) {
  getCartItems(user, function (cart) {
    checkout(cart, function (msg) {
      console.log(msg);
    });
  });
});
function authenticateUser(user, callback) {
  setTimeout(() => {
    console.log("User authenticated:", user);
    callback(null, user);
  }, 500);
}

function checkBalance(user, callback) {
  setTimeout(() => {
    const balance = 200;
    console.log("Balance checked for", user);
    callback(null, balance);
  }, 500);
}

function processPayment(amount, callback) {
  setTimeout(() => {
    if (amount > 200) return callback("Insufficient funds");
    console.log("Payment processed:", amount);
    callback(null, "Payment success");
  }, 500);
}

// Flow with callbacks
authenticateUser("Shampa", (err, user) => {
  if (err) return console.error(err);
  checkBalance(user, (err, balance) => {
    if (err) return console.error(err);
    processPayment(150, (err, msg) => {
      if (err) return console.error(err);
      console.log(msg);
    });
  });
});

//promises
function asyncTask(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully");
      } else {
        reject("Task failed");
      }
    }, 10000);
  });
}

// Using the promise
asyncTask(true)
  .then(result => console.log(result))
  .catch(error => console.error(error));
