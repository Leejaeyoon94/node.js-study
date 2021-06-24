// const add = require("./utils");

// // const name = "jaeyoon";

// const sum = add(4, -2);
// console.log(sum);
const chalk = require("chalk");

// const validator = require("validator");
const getNotes = require("./notes");

const command = process.argv[2];

if (command === "add") {
  console.log("adding note!");
} else if (command === "remove") {
  console.log("remove note!");
}
// const msg = getNotes();

// console.log(msg);
// const greenMsg = chalk.green.bold("success");
// console.log(greenMsg);
// // console.log(validator.isURL("navercom"));

// console.log(process.argv);
