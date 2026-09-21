let sentence = prompt("enter a very big sent : ");
let arr = sentence.trim().split(" ");
let result = "";
for (let i = 0; i < arr.length; i++) {
  let word = capitalizeTheFirstletter(arr[i]);
  result += word;
}
console.log(result);

function capitalizeTheFirstletter(word) {
  return word[0].toUpperCase() + word.slice(1);
}
