// Remove duplicates from array using Set
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// Loop through a Set
const colors = new Set(["red", "green", "blue"]);
for (let color of colors) {
  console.log(color);
}
