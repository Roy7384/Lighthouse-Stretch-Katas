const multiplicationTable = function(maxVal) {
  let output = "";                             //create a variable to store the ouput
  for (let i = 1; i < maxVal + 1; i++) {       //define loop to iterate through row of output table
    for (let j = 1; j < maxVal + 1; j++) {     //define loop to iterate through column of output table
      output = output + i * j + " ";           //store results in the specified row cumulatively
    }
    output = output + "\n";                    //new line for the next row to store result
  }
  return output;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));