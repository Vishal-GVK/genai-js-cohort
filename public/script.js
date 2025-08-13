let userInput = "";
let encodedInput = "";
let decodedInput = "";

function tokenizeInput() {
  userInput = document.getElementById("userInput").value; // getting input
  const tokens = userInput.split(""); // extracting each character from the input
  encodedInput = "";
  tokens.forEach(token => {
    encodedInput += token.charCodeAt(0) + ","; //converting each character into corresponding ASCII value
  });
  encodedInput = encodedInput.slice(0, -1); // Removing last comma
  document.getElementById("encodedInput").innerText = encodedInput; // displaying encoded input
}

function detokenizeInput() {
  const tokenizedArray = encodedInput.split(",").map(Number);
  decodedInput = "";
  tokenizedArray.forEach(code => {
    decodedInput += String.fromCharCode(code); // getting character from its ASCII value
  });
  document.getElementById("decodedInput").innerText = decodedInput; // displaying decoded input
  if (decodedInput === userInput) { // checking if user input and decoded input are same
    document.getElementById("result").innerText = "De-tokenization successful!";
  } else {
    document.getElementById("result").innerText = "De-tokenization failed.";
  }
}
