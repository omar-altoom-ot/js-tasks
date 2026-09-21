function fun() {
  var name = document.getElementById("fullName").value.trim();
  var membershipType = document.getElementById("membershipType").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (membershipType === "student") {
    alert("Hello " + name + " the Scholar");
  } else if (membershipType === "regular") {
    alert("Hello " + name + " the Member");
  }

  var prefer = prompt("what do you prefer fiction or non-fiction?");
  var bookTitle = prompt(
    "write the specific title of the book you wants to borrow",
  );
  alert("requested book is being reserved");
  console.log(name + " " + bookTitle);
}
