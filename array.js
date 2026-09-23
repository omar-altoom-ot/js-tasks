

let availableGenres = ["Fiction", "Science", "History", "Biography"];


function applyDiscount(userData) {
    let membershipType = userData[1];

    if (membershipType === "student") {
        userData.push("20% Discount");   
    } else if (membershipType === "regular") {
        userData.push("No Discount");
    } else {
        userData.push("Unknown Membership");
    }

    return userData;
}


function addNewGenre(genre) {
    availableGenres.push(genre);
}


function displayGenres() {
    for (let i = 0; i < availableGenres.length; i++) {
        console.log("- We offer: " + availableGenres[i]);
    }
}