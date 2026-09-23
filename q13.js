//Prompt for an integer, then display the average of the integers from 0 through the number entered.
//  For example, if you enter 10, then display 5,
//  which is the average of (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.

let number = number(prompt("enter a number : "));
let sum = 0;

for (let i = 0; i <= number; i++) {
  sum += i;
}
console.log(sum/number + 1);
