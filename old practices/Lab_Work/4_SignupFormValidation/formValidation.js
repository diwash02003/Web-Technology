function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const age = document.getElementById("age").value.trim();

  let isValid = true;

  // Clear previous error messages
  clearErrors();

  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required.";
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required.";
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format.";
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }
  if (password === "") {
    document.getElementById("passwordError").innerHTML =
      "Password is required.";
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").innerHTML =
      "Password must be at least 6 characters long.";
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  }
  if (age === "") {
    document.getElementById("ageError").innerHTML = "Age is required.";
    document.getElementById("ageError").style.display = "block";
    isValid = false;
  } else if (isNaN(age) || age < 8 || age > 60) {
    document.getElementById("ageError").innerHTML =
      "Age must be between 8 and 60.";
    document.getElementById("ageError").style.display = "block";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
function clearErrors() {
  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("passwordError").style.display = "none";
  document.getElementById("ageError").style.display = "none";
}
