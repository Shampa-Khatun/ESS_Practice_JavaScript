// Users with scores in multiple subjects
const users = [
  { name: "Alice", scores: { math: 90, english: 85, science: 95 } },
  { name: "Bob", scores: { math: 70, english: 80, science: 75 } },
  { name: "Charlie", scores: { math: 85, english: 90, science: 80 } }
];

// 1. For loop to print names
for (let i = 0; i < users.length; i++) {
  console.log("User:", users[i].name);
}

// 2. While loop to print total score per user
let i = 0;
while (i < users.length) {
  const total = Object.values(users[i].scores).reduce((a,b) => a+b, 0);
  console.log(users[i].name, "total score:", total);
  i++;
}

// 3. Do...while loop to print average score
i = 0;
do {
  const scores = Object.values(users[i].scores);
  const avg = scores.reduce((a,b) => a+b, 0) / scores.length;
  console.log(users[i].name, "average score:", avg);
  i++;
} while (i < users.length);

// 4. forEach to print individual subject scores
users.forEach(user => {
  for (let subject in user.scores) {
    console.log(user.name, subject, ":", user.scores[subject]);
  }
});

// 5. for...of with Set
const subjects = new Set(["math", "english", "science"]);
for (let subject of subjects) console.log("Subject:", subject);

// 6. Map to store highest scorer per subject
const highScores = new Map();
for (let subject of subjects) {
  let maxScore = 0;
  let topUser = "";
  for (let user of users) {
    if (user.scores[subject] > maxScore) {
      maxScore = user.scores[subject];
      topUser = user.name;
    }
  }
  highScores.set(subject, { topUser, maxScore });
}
for (let [subject, data] of highScores) {
  console.log(subject, "top scorer:", data.topUser, "score:", data.maxScore);
}

// 7. Nested loop example: print scores matrix
console.log("Scores Matrix:");
for (let user of users) {
  const scoreArray = Object.values(user.scores);
  for (let score of scoreArray) {
    process.stdout.write(score + " "); // prints on same line
  }
  console.log();
}

// 8. Break and continue example
console.log("Scores above 80:");
for (let user of users) {
  for (let score of Object.values(user.scores)) {
    if (score < 80) continue; // skip low scores
    if (score > 95) break; // exit if unrealistically high
    console.log(user.name, score);
  }
}
var ii, x = '';
for (ii = 0; ii <= 5; ii++) {
  x += ii;
  console.log(ii); 
}
//console.log(ii); // 6
console.log("Concatenated string:", x); // Concatenated string: 012345

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


// Iterate over the map elements
let fruitText = "";
for (const x of fruits) {
  fruitText += x + "\n"; // Concatenate each fruit and its quantity
}
console.log(fruitText); // prints each fruit and its quantity


//JS iterables
const iterable = {
  *[Symbol.iterator]() {
    yield 1; 
    yield 2;
    yield 3;
  }
};

for (const value of iterable) {
  console.log(value); // prints 1, 2, 3
}

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let y2 = ""
for (const num of myNumbers) {
  y2 += num +"\n"
}
console.log(y2); // prints 10, 20, ..., 90
let firstname = 'Jim', j = 0;
for (const x of firstname) {
  j++;
}
console.log("Length of string:", j); // Length of string: 3

//filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Even numbers: [ 2, 4, 6, 8, 10 ]
//iterate over even numbers
let evenText = "";  
for (const num of evenNumbers) {
  evenText += num + "\n"; // Concatenate each even number
} 
console.log("Even numbers:\n" + evenText); // prints each even number
//map method
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers); // Squared numbers: [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
//flatmap method
// Create an iterator
const myIterator6 = Iterator.from([1, 2, 3, 4, 5, 6]);

// Map the Iterator
const mappedIterator = myIterator6.flatMap(x => [x, x * 10]);

// Iterate over the elements
let t = "";
for (const x of mappedIterator) {
  t += x + "\n";
}
console.log("Mapped Iterator:\n" + t); // prints each mapped value

// Create an iterator from array
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// take method -> first 5 elements
const firstFive = myIterator.take(5);
let firstFiveText = "";
for (const x of firstFive) {
  firstFiveText += x + "\n";
}
console.log("First five elements:\n" + firstFiveText);

// drop method -> skip first 5 elements
const afterFive = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).drop(5);
let afterFiveText = "";
for (const x of afterFive) {
  afterFiveText += x + "\n";
}
console.log("After dropping first five:\n" + afterFiveText);

// find method -> first even number
const firstEven = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .find(x => x % 2 === 0);
console.log("First even number:", firstEven);

// reduce method -> sum all numbers
const result = Iterator.from([175, 50, 25])
  .reduce((total, num) => total + num, 0);
console.log("Total:", result);

// forEach method -> print all values
//erator.from([1, 2, 3, 4, 5]).forEach(x => console.log("Value:", x));
