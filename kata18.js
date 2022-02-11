const squareCode = function(message) {
  let strWithNoSpace = message.replaceAll(' ', '');  //remove all white space from message
  const columnForSquare = Math.ceil(Math.sqrt(strWithNoSpace.length)); //get the column number

  let strArr = [];  //empty array to store the result
  
  //for each output section, get the respective character belong to it
  for (let i = 0; i < columnForSquare; i++) {

    let word = [];

    for (let j = 0; j < columnForSquare; j++) {

      //pick characters seprated by column number from the string and put in word
      word.push(strWithNoSpace[i + j * columnForSquare]);
    }
    strArr[i] = word.join("");  //join all characters picked out into the output section and store in strArr
  }

  let strResult = strArr.join(" ");  //join all the output sections into the result string

  return strResult;
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));