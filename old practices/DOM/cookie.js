// Function to set a cookie with the given name and value
function setCookie(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}`;
}

// Setting cookies "name" and "age" without expiry date
setCookie("name", "ram");
setCookie("age", "20");
setCookie("address", "Damak");

// Function to get the value of a cookie by its key (name)
function getCookieByKey(cookieName) {
  let stored = document.cookie; // Get all cookies as a single string
  let storedArr = stored.split(";"); // Split the string into individual cookies
  let result = null; // Variable to store the result

  // Iterate through each cookie using forEach to find the one with the specified name
  storedArr.forEach((item) => {
    // Split the cookie into name and value, and trim any leading/trailing whitespace
    let [key, value] = item.trim().split("=");
    if (key === cookieName) {
      console.log(value);
      result = value;
    }
  });
  return result;
}

console.log(document.cookie);
// Log the value of the cookie with the name "name"
getCookieByKey("name");
// Log the value of the cookie with the name "address" (which does not exist)
getCookieByKey("address");

// ------------------------------------------------------------------------------- //

// Get all cookies as a single string and store in storedElemnt
let storedElemnt = document.cookie;
// Split the cookies string into an array of individual cookies
let storedArray = storedElemnt.split(";");
storedArray.forEach((item) => {
  console.log(item.trim()); // Trim any leading/trailing whitespace before logging
});
