let input = prompt("enter a word that contain a capital and small letters : ");



let result = "";
for (var i = 0; i < input.length; i++) {
  if (input[i].charCodeAt(0) <= 90 && input[i].charCodeAt(0) >= 65) {
    //result += String.fromCharCode(input[i].charCodeAt(0) + 32);
    result += input[i].toLowerCase();
  } else if (input[i].charCodeAt(0) <= 122 && input[i].charCodeAt(0) >= 97) {
    result += String.fromCharCode(input[i].charCodeAt(0) - 32);
    //result += input[i].toUpperCase();
  }
}

alert(result);
