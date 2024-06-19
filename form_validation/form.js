window.onload = () => {
  let form = document.getElementById("studentForm");
  let inputs = document.querySelectorAll("#studentForm input");
  console.log(inputs);

  inputs.forEach((input) => {
    input.addEventListener("change", (ev) => {
      //   console.log(e);
      if (ev.target.type === "number") {
      }
      if (ev.target.type === "text" || ev.target.target === "text") {
        ev.target.value = ev.target.value.trim();
        console.log(ev.target.value);
      }
      if (ev.target.id === "age") {
        if (ev.target.value < 18) {
          ev.target.style.color = "red";
        }
        if (ev.target.value > 18) {
          ev.target.style.color = "black";
        }
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phoneNo").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;
    let student = {
      fName,
      lName,
      age,
      phoneNo: phone,
      address,
      gender,
    };
    console.log(student);
  });
};
// window.onload = () => {
//     let form = document.getElementById("studentForm");
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       let fName = document.getElementById("fName").value;
//       let lName = document.getElementById("lName").value;
//       let age = document.getElementById("age").value;
//       let phone = document.getElementById("phoneNo").value;
//       let address = document.getElementById("address").value;
//       let gender = document.getElementById("gender").value;
//       let student = {
//         fName,
//         lName,
//         age,
//         phoneNo: phone,
//         address,
//         gender,
//       };
//       console.log(student);
//     });
//   };
