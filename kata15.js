const organizeInstructors = function(instructors) {
  
  //create an array with all the unique course types from input;
  const resultCourse = [];
  for (let i = 0; i < instructors.length; i++) {
    if (!resultCourse.includes(instructors[i].course)) {
      resultCourse.push(instructors[i].course);
    }
  }

  const result = {};

  //iterate through the course array to set keys of the result object
  for (let j = 0; j < resultCourse.length; j++) {

    //create an empty array under specified key to store names
    result[resultCourse[j]] = [];
    for (let i = 0; i < instructors.length; i++) {
      if (instructors[i].course === resultCourse[j]) {
        result[resultCourse[j]].push(instructors[i].name);
      }
    }
  }
  return result;
};


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

