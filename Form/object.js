// function handleFormSubmission(e) {
//   let pNumber = document.getElementById("phoneNumber").value;
//   let lName = document.getElementById("lastName").value;
//   let uName = document.getElementById("username").value;
//   console.log(lName, uName, pNumber);
// }

// let user = {
//   personalDetail: {
//     fullName: "ram",
//     lastName: "thapa",
//     adderss: {
//       city: "kathmandu",
//       pincode: "546",
//       country: "Nepal",
//     },
//   },
//   getFavCOlor: (day) => {
//     return day ? "RED" : "BLACK";
//   },
//   email: "ram@gmail.com",
//   isMarried: false,
//   genger: "MALE",
//   age: 34,
// };

// console.log(user.personalDetail.adderss.pincode);
// user.personalDetail.fullName = "Ram Bahadur Adhikari";
// delete user.isMarried;
// console.log(user);


document.getElementById("userForm").addEventListener("submit", handleFormSubmission);

function handleFormSubmission(e) {
    e.preventDefault(); // Prevent form submission
    let pNumber = document.getElementById("phoneNumber").value;
    let lName = document.getElementById("lastName").value;
    let uName = document.getElementById("username").value;
    console.log(lName, uName, pNumber);
}

let user = {
    personalDetail: {
        fullName: "ram",
        lastName: "thapa",
        adderss: {
            city: "kathmandu",
            pincode: "546",
            country: "Nepal",
        },
    },
    getFavCOlor: (day) => {
        return day ? "RED" : "BLACK";
    },
    email: "ram@gmail.com",
    isMarried: false,
    genger: "MALE",
    age: 34,
};

console.log(user.personalDetail.adderss.pincode);
user.personalDetail.fullName = "Ram Bahadur Adhikari";
delete user.isMarried;
console.log(user);
