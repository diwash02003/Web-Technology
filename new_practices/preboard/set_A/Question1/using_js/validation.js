function validateName() {
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.textContent = "Name cannot be empty";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validateAge() {
  const age = document.getElementById("age").value;
  const ageError = document.getElementById("ageError");
  if (age < 8 || age > 60) {
    ageError.textContent = "Age must be between 8 and 60";
    return false;
  }
  ageError.textContent = "";
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isAgeValid = validateAge();

  return isNameValid && isEmailValid && isPasswordValid && isAgeValid;
}
