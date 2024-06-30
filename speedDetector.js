/*This function deducts points and suspends the driver's licence if demerit points are more than 12*/
const calculateDemeritPoints = (speed) => {
  const speedLimit = 70;
  const pointsPerExcessSpeed = 5;

  if (speed <= speedLimit) {
    return "Ok";
  }

  // get a whole number
  const demeritPoints = Math.floor((speed - speedLimit) / pointsPerExcessSpeed);

  // take care of the situation when demerit points are too high that it merits a suspension of licence
  if (demeritPoints > 12) {
    return "License suspended";
  }

  return `Demerit points: ${demeritPoints}`;
};

console.log(calculateDemeritPoints(80));
