// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  return 4 / 3 * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return 1 / 3 * PI * Math.pow(radius, 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  return width * depth * height;
};

console.log(prismVolume(3, 4, 5) === 60);



const totalVolume = function(solids) {
  //create a empty variable to store results
  let result = 0;
  //define a loop to iterate through the objects in solids
  for (let i = 0; i < solids.length; i++) {
    // use a switch statement to determine which function to use for calculating volume for the specified object
    switch (solids[i].type) {
    case "cone":
      result += coneVolume(solids[i].radius, solids[i].height);
      break;
    case "prism":
      result += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
      break;
    case "sphere":
      result += sphereVolume(solids[i].radius);
      break;
    }
  }
  return result;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

