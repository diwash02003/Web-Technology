//14 june (Functions)
// Mainly Predefined and User-defined functions
// User defiend: Anonymoud nad Named Functions

function getStudents(size) {
  let container = [];
  for (let i = 0; i < size; i++) {
    container.push(i + 1);
  }
  return container;
  //   return Array.from({ length: size });
}
let students = getStudents(20);
console.log(students);

// Anonnymous function, has no name but is
// associated to a variable
const _getStudents = function (size) {
  return Array.from({ length: size });
};
let parameterPass = _getStudents(30);
console.log(parameterPass);

const arrow_wala = (size) => {
  return Array.from({ length: size });
};
let parameter_for_arrow_wala = arrow_wala(20);
console.log(parameter_for_arrow_wala);

// call back function
const parseStudent = (name) => {
  console.log(name);
};
// higher order function
function getStudentById(id, cb) {
  // fetch call from server to retrive student detail
  cb("ram rai");
}
let studentDetatl = getStudentById(1, parseStudent);


const naya_call_back_function = (name_cb) => {
  console.log(name_cb);
};
function get_call_back_ko_lagi_name(callback) {
  callback("hlo");
}
let call_back_calling = get_call_back_ko_lagi_name(naya_call_back_function);
