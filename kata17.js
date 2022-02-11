const urlDecode = function(text) {
  const result = {};

  //split string to array by & to get key-value pair as elements
  const textArr = text.split('&');

  //check if only one pair is in the array
  if (textArr.length === 1) {
    let resultArr = textArr[0].split('=');  //split key-value pair into key and value
    result[resultArr[0]] = resultArr[1].replaceAll('%20', ' ');  //assign key and value to result object
  } else {
    for (let i = 0; i < textArr.length; i++) {
      let resultArr = textArr[i].split('=');
      result[resultArr[0]] = resultArr[1].replaceAll('%20', ' ');
    }
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);