document.getElementById("reserveBtn").addEventListener("click", startApp);

function startApp() {
  let username = prompt("Enter your name:").trim();

  if (username === "") {
    alert("Name is required!");
    return;
  }

  let membershipType = getValidMembership();

  let userData = collectUserData(username, membershipType);

  printUserData(userData);
}

function getValidMembership() {
  let membershipType = "";

  while (true) {
    membershipType = prompt("Enter membership type (student / regular):");

    if (!membershipType) continue;

    membershipType = membershipType.toLowerCase().trim();

    if (membershipType === "student" || membershipType === "regular") {
      return membershipType;
    }

    alert("Invalid input! Please enter 'student' or 'regular'");
  }
}

function collectUserData(username, membershipType) {
  let bookGenre = prompt("Do you prefer fiction or non-fiction?");
  let bookTitle = prompt("Enter the book title you want to borrow:");

  let userData = [username, membershipType, bookGenre, bookTitle];

  return userData;
}

function printUserData(dataArray) {
  console.log("User Data:");

  for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i]);
  }
}