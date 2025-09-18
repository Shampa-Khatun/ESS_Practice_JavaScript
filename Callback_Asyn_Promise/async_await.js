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

// meeting
//   .then(addtocalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// Async/Await
async function myMeeting(){
    try {
        const meetingdetails = await meeting; // ekhane meetingdetails function eta bujhbe j meeting promise ta shesh howa obdhi wait korte hbe
        const calender2 = await addtocalender(meetingdetails); // wait until the promise resolves (*)
        console.log(calender2);


    } catch {
        console.log("Something went wrong");
    }
  
}
myMeeting();

function getid1(id)
{
    return new Promise((ressolve,err)=> {
        setTimeout(() => {
        console.log("id" +" "+ id);
        if(id >= 1) ressolve(id);
        else
        err("rror occured");
    }, 3000);
    })
}

let a = 1;

console.log(`facting id ${a}...`);

getid1(a).then((res) => {
    console.log("facting id 2 ...");
    return getid1(res+1);
}).then((res) => {
    console.log("facting id 3 ...");
    return getid1(res+1);
}
).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("all id fetched");
});

// async await
// Functions stay the same
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

// --- Async/Await Implementation ---
async function placeOrder(username, password) {
  try {
    // Authenticate user
    const user = await authenticateUser(username, password);

    // Fetch cart
    const cart = await fetchCart(user.id);

    // Check inventory and log order in parallel
    await Promise.all([
      checkInventory(cart),
      logOrder({ user: user.username, cart }),
    ]);

    // Calculate total
    const total = cart.reduce(
      (sum, item) => sum + (item.product === "Laptop" ? 900 : 50) * item.qty,
      0
    );

    // Process payment
    const paymentResult = await processPayment(user, total);

    // Send email
    const emailResult = await sendEmail(
      user,
      `Your order is confirmed. Total: $${total}`
    );

    console.log(paymentResult);
    console.log(emailResult);
    console.log("Order placed successfully!");
  } catch (err) {
    console.error("Order error:", err && err.message ? err.message : err);
  }
}

// Run the async function
placeOrder("shampa", "12345"); // Successful
placeOrder("shampa", "wrongpass"); // Failed authentication
