const talkingCalendar = function(date) {
  let result = "";
  const dateArr = date.split("/");      //dateArr = [yyyy, mm, dd]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let resultDay = "";
  switch (dateArr[2][1]) {
  case "1":
    dateArr[2] === "11" ? resultDay = Number(dateArr[2]) + "th" : resultDay = Number(dateArr[2]) + "st";
    break;
  case "2":
    dateArr[2] === "12" ? resultDay = Number(dateArr[2]) + "th" : resultDay = Number(dateArr[2]) + "nd";
    break;
  case "3":
    dateArr[2] === "13" ? resultDay = Number(dateArr[2]) + "th" : resultDay = Number(dateArr[2]) + "rd";
    break;
  default:
    resultDay = Number(dateArr[2]) + "th";
    break;
  }
  return result = months[Number(dateArr[1]) - 1] + " " + resultDay + ", " + dateArr[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));