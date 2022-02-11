const blocksAway = function(directions) {
  //create an object represent the coordinate of the driver
  const coordinate = {
    east: 0,
    north: 0
  };

  //create an object to update the orientation of driver
  const orientation = {
    '-3': [1, 0],
    '-2': [0, -1],
    '-1': [-1, 0],
    0: [0, 1],  //start orientation, if turn right, always move down one 'index'; if turn left, move up one 'index' except if the driver is at origin, in that case orientation stay the same
    1: [1, 0],
    2: [0, -1],
    3: [-1, 0]
  };

  let turnCount = 0; //variable to store turn counts for updating orientation

  for (let i = 0; i < directions.length - 1; i = i + 2) {

    if (directions[i] === "right") {

      turnCount += 1; //move down in keys if turn right

      //remainder operator convert turnCount into acceptable range if turnCount has too large of a value
      coordinate.east += orientation[turnCount % 4][0] * directions[i + 1]; //update east coordinate
      coordinate.north += orientation[turnCount % 4][1] * directions[i + 1]; //update north coordinate
    }

    if (directions[i] === "left") {

      //if dirver is at origin, use default orientation if turn left
      if (i === 0) {
        turnCount = 0;
      } else {
        turnCount -= 1; //move up in keys if turn left
      }
      coordinate.east += orientation[turnCount % 4][0] * directions[i + 1];
      coordinate.north += orientation[turnCount % 4][1] * directions[i + 1];
    }
  }
  return coordinate;
};


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));