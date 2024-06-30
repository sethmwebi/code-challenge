/*set up for user interaction*/
const userInput = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * this function awards grades according to the following criterion
 * above 79 -> A
 * between 60 and 79 -> B
 * between 50 and 59 -> c
 * between 40 and 49 -> D
 * below 40 - E
 */
const awardGrade = (score) => {
  /*sanity check for valid marks*/
  if (score > 100 || score < 0) {
    return "invalid score!";
  }
  if (score > 79) {
    return "A";
  } else if (score >= 60 && score <= 79) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else {
    return "E";
  }
};

/*continuously ask the user to enter valid score*/
const askForScore = () => {
  userInput.question("Enter student score: ", (input) => {
    const score = Number(input);

    if (isNaN(score) || score > 100 || score < 0) {
      console.log("Please enter a valid score.");
      askForScore();
    } else {
      const grade = awardGrade(score);
      console.log(`The grade is: ${grade}`);
      userInput.close();
    }
  });
};

askForScore();
