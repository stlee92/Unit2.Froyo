// let userInput = console.log(
//   prompt("Enter a list of comma-separated froyo flavors:")
// );

const userInput = console.log(
  prompt("Enter a list of comma-separated froyo flavors:")
);

const flavors = [];
function convertInputToArray(userInput) {
  for (const flavors of userInput) {
    const flavors = userInput.split(",");
  }
  return flavors;
}
console.log(userInput);

// for (i = 0; i < userInput.length; i++) {
//   console.log(userInput[i]);
// }

// let count = 0;
// for (let i = 0; i < userInput.length; i++) {
//   if (flavors[i] === ",") {
//     count += flavors;
//   }
// }

// console.log(`You have ordered ${flavors}`);

// convert the 'flavors' input into an array
//Block12 YT playlist 1:50:11

//count the number of flavors for each value
//console.log template literal for the number of flavors of each
