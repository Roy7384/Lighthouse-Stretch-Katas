const repeatNumbers = function(data) {
  let resultArr = [];
  for (let i = 0; i < data.length; i++) {
    let subResultArr = [];
    for (let j = 0; j < data[i][1]; j++) {
      subResultArr.push(data[i][0]);
    }
    resultArr[i] = subResultArr.join('');
  }
  return resultArr.join(', ');
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
