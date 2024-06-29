const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid marks";
  } else if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

rl.question("Enter the student marks (0 - 100): ", (input) => {
  const marks = parseInt(input);

  if (isNaN(marks)) {
    console.log("Please enter a valid number.");
  } else {
    const grade = getGrade(marks);
    console.log(`The grade is: ${grade}`);
  }

  rl.close();
});
