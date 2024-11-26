// const background = document.getElementById("color-display");
// const spanDisplay = document.getElementById("current-color");
// const generate = document.getElementById("new-color");
// const headerColor = document.getElementById("header");
// const hexValues = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
// ];
// // console.log(hexValues.length);

// function getrandomHexValue() {
//   // return hexValues[Math.floor(Math.random() * hexValues.length)];
//   const randomHex = Math.floor(Math.random() * hexValues.length);
//   randomHexValues = hexValues[randomHex];
//   return randomHexValues;
// }
// console.log(getrandomHexValue());

// function getRandomHexString(stringLength) {
//   let hexString = "";
//   for (let i = 0; i < stringLength; i++) {
//     hexString += getrandomHexValue();
//   }
//   return hexString;
// }

// console.log(getRandomHexString());

// generate.addEventListener("mouseover", function () {
//   const randomHexString = "#" + getRandomHexString(6);

//   document.body.style.setProperty("background-color", randomHexString);
//   spanDisplay.textContent = randomHexString;
//   background.style.borderRightColor = randomHexString;
//   generate.style.backgroundColor = randomHexString;

//   return randomHexString;
// });

// console.log(randomHexString);

const background = document.getElementById("color-display");
const spanDisplay = document.getElementById("current-color");
const generate = document.getElementById("new-color");
const headerColor = document.getElementById("header");
const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getrandomHexValue() {
  const randomHex = Math.floor(Math.random() * hexValues.length);
  return hexValues[randomHex];
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getrandomHexValue();
  }
  return hexString;
}

generate.addEventListener("click", function () {
  // Generate random hex for the background
  const randomHexString = "#" + getRandomHexString(6);

  // Generate another random hex for the header
  const headerHexString = "#" + getRandomHexString(6);

  // Apply the colors
  document.body.style.setProperty("background-color", randomHexString);
  spanDisplay.textContent = randomHexString;
  background.style.borderRightColor = randomHexString;
  background.style.borderLeftColor = headerHexString;
  generate.style.backgroundColor = randomHexString;

  headerColor.style.setProperty("background-color", headerHexString); // Set header color

  //   console.log("Background Color:", randomHexString);
  //   console.log("Header Color:", headerHexString);
});
