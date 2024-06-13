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
let aajaKoDin = getDateOfWeek(new Date().getDay());
console.log(aajaKoDin);

//loop
// for loop
console.log("---------for loop-------------");
for (let i = 5; i > 0; i--) {
  console.log("for loop " + i);
}
console.log("---------for loop-------------");
for (let j = 0; j < 5; j++) {
  console.log("for loop " + j);
}

console.log("---------while-------------");
let a = 0;
while (a < 5) {
  console.log("While loop " + a);
  a++;
}

console.log("---------while-------------");
let z = 5;
while (z > 0) {
  console.log(z);
  z--;
}

console.log("---------do while-------------");
let f = 0;
do {
  console.log(f);
  f++;
} while (f < 5);

console.log("---------for each------------");
let students = ["ram", "shyam", "hari", "sita", "jack", "rose"];
students.forEach((student) => {
  console.log(student);
});

console.log("---------for each------------");
console.log("---------printing index------------");
students.forEach((student, index) => {
  console.log(index + " " + student);
});

console.log("---------object-------------");

let student25 = {
  roll: 25,
  address: "kapan",
  age: 20,
  subjects: ["maths", "science", "social"],
  name: "diwash pokhrel",
  isMarried: true,
  favColor: (isDeuso) => {
    return isDeuso ? "red" : "black";
  },
};

console.log("age is: " + student25.age);
console.log(student25.favColor(new Date().getHours() < 18));

console.log("---------for in-------------");
for (let student in student25) {
  console.log(student + ": " + student25[student]);
}



// console.log("---------for of-------------");
