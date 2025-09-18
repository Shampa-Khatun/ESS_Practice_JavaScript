function display(any) {
  console.log(any);
}
function calculator(a, b) {
  let sum = a + b;
  display("Sum: " + sum);
}
calculator(5, 3);

// with callback
function display1(any) {
  console.log(any);
}
function calculator1(a, b, callback) {
  let sum = a + b;
  callback("Sum: " + sum);
}
calculator1(5, 3, display1);

const num = [4, 1, -20, -7, 5, 9, -6];
const positive = removeneg(num, (x) => x > 0);
console.log(positive); // [4, 1, 5, 9]

function removeneg(num, callback) {
  let result = [];
  for (const n of num) {
    if (callback(n)) {
      result.push(n);
    }
  }
  return result;
}

// setTimeout
function display3(any) {
  console.log(any);
}
function calculator3(a, b, callback) {
  let sum = a + b;
  setTimeout(() => {
    callback("Sum: " + sum);
  }, 2000);
}
calculator3(5, 3, display3);

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

// another flow with callbacks
function authenticateUserCB(user, callback) {
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

function processPaymentCB(amount, callback) {
  setTimeout(() => {
    if (amount > 200) return callback("Insufficient funds");
    console.log("Payment processed:", amount);
    callback(null, "Payment success");
  }, 500);
}

authenticateUserCB("Shampa", (err, user) => {
  if (err) return console.error(err);
  checkBalance(user, (err, balance) => {
    if (err) return console.error(err);
    processPaymentCB(150, (err, msg) => {
      if (err) return console.error(err);
      console.log(msg);
    });
  });
});

// promises
function asyncTask(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully");
      } else {
        reject("Task failed");
      }
    }, 1000);
  });
}

asyncTask(true)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

const myPromises = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 2000);
});

myPromises.then(function (value) {
  console.log(value); // I love You !!
});

const hasmeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasmeeting) {
    const meetingdetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addtocalender = (meetingdetails) => {
  const calender = `${meetingdetails.name} has been scheduled on ${meetingdetails.location} at ${meetingdetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addtocalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved after 5 seconds");
  }, 5000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 2 seconds");
  }, 2000);
});

Promise.all([promise1, promise2]).then((res) => console.log(res));

Promise.race([promise1, promise2]).then((res) => console.log(res));

// complex example
function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "shampa" && password === "12345") {
        resolve({ id: 1, username });
      } else {
        reject(new Error("Authentication failed"));
      }
    }, 500);
  });
}

function fetchCart(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { product: "Laptop", qty: 1 },
        { product: "Book", qty: 2 },
      ]);
    }, 500);
  });
}

function checkInventory(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inventory = { Laptop: 5, Book: 2 };
      for (const item of cart) {
        if (!inventory[item.product] || inventory[item.product] < item.qty) {
          return reject(new Error(`Out of stock: ${item.product}`));
        }
      }
      resolve(cart);
    }, 500);
  });
}

function processPayment(user, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 1000) {
        reject(new Error("Payment declined: Over limit"));
      } else {
        resolve("Payment successful");
      }
    }, 700);
  });
}

function sendEmail(user, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Email sent to ${user.username}: ${message}`);
    }, 300);
  });
}

function logOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Order logged: ${JSON.stringify(order)}`);
    }, 200);
  });
}

// --- Promise chaining without async/await ---
authenticateUser("shampa", "12345")
  .then((user) => {
    return fetchCart(user.id).then((cart) => ({ user, cart }));
  })
  .then(({ user, cart }) => {
    return Promise.all([
      checkInventory(cart),
      logOrder({ user: user.username, cart }),
    ]).then(() => ({ user, cart }));
  })
  .then(({ user, cart }) => {
    const total = cart.reduce(
      (sum, item) =>
        sum + (item.product === "Laptop" ? 900 : 50) * item.qty,
      0
    );
    return processPayment(user, total).then((paymentResult) => ({
      user,
      cart,
      paymentResult,
      total,
    }));
  })
  .then(({ user, cart, paymentResult, total }) => {
    return Promise.all([
      sendEmail(user, `Your order is confirmed. Total: $${total}`),
      Promise.resolve(paymentResult),
    ]);
  })
  .then(([emailResult, paymentResult]) => {
    console.log(paymentResult);
    console.log(emailResult);
    console.log("Order placed successfully!");
  })
  .catch((err) => {
    console.error("Order error:", err && err.message ? err.message : err);
    return Promise.resolve();
  });

// ✅ Fixed: return the promise chain here
return authenticateUser("shampa", "wrongpass")
  .then((user) => {
    return fetchCart(user.id);
  })
  .catch((err) => {
    console.error("Order error (auth):", err.message);
  });
