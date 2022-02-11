const makeCase = function(input, whichCase) {

  //write a nested function to modify string according to multiple case style
  const transformer = function(nestFuncInput, caseSpecified) {

    //split string into single word and store in an array
    const strArr = nestFuncInput.split(" ");

    //modify and return the string accordingly
    switch (caseSpecified) {
    case "camel":
      for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
      }
      return strArr.join("");
    case "pascal":
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
      }
      return strArr.join("");
    case "snake":
      return strArr.join("_");
    case "kebab":
      return strArr.join("-");
    case "title":
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
      }
      return strArr.join(" ");
    case "vowel":
      for (let i = 0; i < strArr.length; i++) {
        let newWord = [];
        for (let j = 0; j < strArr[i].length; j++) {
          if (strArr[i][j] === "a" || strArr[i][j] === "e" || strArr[i][j] === "i" || strArr[i][j] === "o" || strArr[i][j] === "u") {
            newWord.push(strArr[i][j].toUpperCase());
          } else {
            newWord.push(strArr[i][j]);
          }
        }
        newWord = newWord.join("");
        strArr[i] = newWord;
      }
      return strArr.join(" ");
    case "consonant":
      for (let i = 0; i < strArr.length; i++) {
        let newWord = [];
        for (let j = 0; j < strArr[i].length; j++) {
          if (strArr[i][j] === "a" || strArr[i][j] === "e" || strArr[i][j] === "i" || strArr[i][j] === "o" || strArr[i][j] === "u") {
            newWord.push(strArr[i][j]);
          } else {
            newWord.push(strArr[i][j].toUpperCase());
          }
        }
        newWord = newWord.join("");
        strArr[i] = newWord;
      }
      return strArr.join(" ");
    case "upper":
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].toUpperCase();
      }
      return strArr.join(" ");
    case "lower":
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].toLowerCase();
      }
      return strArr.join(" ");
    }
  };
  
  let result = '';        //create an empty string to store result

  //if else statement to check whether input case style has only one style or multiple styles
  if (typeof whichCase === 'string') {
    result = transformer(input, whichCase);
  } else {
    result = input;

    //in the case of muliple styles, need to reorder the styles according to priority
    const caseStylePre = ["lower", "upper", "consonant", "vowel", "title", "kebab", "snake", "pascal", "camel"];
    whichCase.sort((a, b) => caseStylePre.indexOf(b) - caseStylePre.indexOf(a));
    console.log(whichCase);

    //run transformer function with different case styles
    for (let i = 0; i < whichCase.length; i++) {
      result = transformer(result, whichCase[i]);
    }
  }
  return result;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));