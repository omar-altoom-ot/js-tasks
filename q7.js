var birthYear = prompt("enter your birth year : ");

var date = new Date();
var age = date.getFullYear() - birthYear;

if (age > 60) {
  console.log("You may join the seniors program.");
} else if (age > 30) {
  console.log("You are not eligible. You may join other programs.");
} else if (age >= 18 && age <= 30) {
  console.log("You are eligible. Start your application.");
} else {
  console.log("You may join the kids program.");
}
