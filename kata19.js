const generateBoard = function(whiteQ, blackQ) {

  const result = []; //create empty array
  for (let i = 0; i < 8; i++) {
    result[i] = [0, 0, 0, 0, 0, 0, 0, 0]; //each row of the array is an array with 8 zeros
  }

  result[whiteQ[0]][whiteQ[1]] = 1; //put value 1 into the position of white queen
  result[blackQ[0]][blackQ[1]] = 1; //put value 1 into the position of black queen

  return result;
};

const queenThreat = function(chessBoard) {

  let rowSum = 0; //number variable to store sum of all the elements in a row
  let columnSum = 0; //number variable to store sum of all the elements in a column
  let diagonalASum = 0; //sum of all the elements in a diagonal line
  let diagonalBSum = 0; //sum of all the elements in the diagonal line that's perpendicular to the line above

  //iterate through the two dimensional array to get results for sums
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      rowSum += chessBoard[i][j];
      columnSum += chessBoard[j][i];
      if (i >= j) {
        diagonalASum += chessBoard[i - j][j];
      }
      if (j >= i) {
        diagonalBSum += chessBoard[j - i][i];
      }
    }
    //if any sum is greater than 1, then either two queens are on the same row or column, or they are on the diagonal line of each other
    if (rowSum > 1 || columnSum > 1 || diagonalASum > 1 || diagonalBSum > 1) {
      return true;
    }
  }
  return false;
};



let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));