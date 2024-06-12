// June 12 (flow control)
//0-sunday, 6-saturday

function getDateOfWeek(day) {
  let val;
  switch (day) {
    case 0:
      val = "sunday";
      break;
    case 1:
      val = "monday";
      break;
    case 2:
      val = "tuesday";
      break;
    case 3:
      return "wednesdsay";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      return "someday";
  }
  return val;
}
let aajaKoDin =getDateOfWeek(new Date().getDay());
console.log(aajaKoDin);