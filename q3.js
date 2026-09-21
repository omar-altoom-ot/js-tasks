var x = [];

x.push(prompt("enter the first number  : "));
x.push(prompt("enter the second number : "));
x.sort();

x.forEach((element) => {
  console.log(element + " ");
});

// for (var i = 0; i < 2; i++) {
//   console.log(x[i] + " ");
// }
