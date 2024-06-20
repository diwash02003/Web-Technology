/*
    Initial Array Declaration:
    An array vehicles is declared and 
    initialized with six string elements:
     "car,", "bike", "scooter", "train", "truck", and "bus".
*/
let vehicles = ["car,", "bike", "scooter", "train", "truck", "bus"];
/* ------------------------------------------------------------------------ */

/* 
    Assign Value to an Index:
    The element at index 0 of the vehicles array is updated from "car," to "bicycle".
    Resulting Array: ["bicycle", "bike", "scooter", "train", "truck", "bus"]
*/
vehicles[0] = "bicycle"; //  assign value to an index
/* ------------------------------------------------------------------------ */

/*
    Add Value to the End of the Array:
    The push method adds the string "aeroplane" to the end of the vehicles array.
    Resulting Array: ["bicycle", "bike", "scooter", "train", "truck", "bus", "aeroplane"]
*/
vehicles.push("aeroplane"); // assign value to llast index
/* ------------------------------------------------------------------------ */

/*
    Add Value to the Beginning of the Array:
    The unshift method adds the string "hello" to the beginning of the vehicles array.
    Resulting Array: ["hello", "bicycle", "bike", "scooter", "train", "truck", "bus", "aeroplane"]
*/
vehicles.unshift("hello"); // assgin value to first index
/* ------------------------------------------------------------------------ */

/* 
Get Length of the Array:
The length property returns the number of elements in the vehicles array.
Length: 8 (since there are 8 elements in the array after the modifications)
*/
vehicles.length; // length of array
/* ------------------------------------------------------------------------ */

console.log(vehicles);

/* 
    Iterating Over the Array with forEach:
    The forEach method executes a provided function once for each array element.
    Here, for each element (vehicle) in the vehicles array, the function logs the element to the console.
*/
vehicles.forEach((vehicle) => {
  console.log(vehicle);
});
/* ------------------------------------------------------------------------ */

/*
    the map method creates a new array populated with the results of 
    calling a provided function on every element in the calling array.
    
    Here, for each element (vehicle) in the vehicles array,
     the function converts the element to uppercase and returns it.
    The resulting array, vehiclesCapital, contains all 
    the original elements transformed to uppercase.
*/
let vehiclesCapital = vehicles.map((vehicle) => {
  return vehicle.toUpperCase();
});
console.log(vehiclesCapital);
/* ------------------------------------------------------------------------ */

// slice vs splice
/* 
    slice:
        Does not modify the original array.
        Returns a new array containing a portion of the original array.
        Syntax: array.slice(start, end) (end index is not included).
 
    splice:
        Modifies the original array.
        Can add/remove elements to/from the array.
        Returns an array containing the deleted elements.
        Syntax: array.splice(start, deleteCount, item1, item2, ...) 
        (additional items are optional and are inserted starting at the start index).
*/

/*
    vehicles.slice(0, 2) will return a new array slice:
*/
console.log(vehicles.slice(0, 2));
/* 
    vehicles.splice(2, 2) will remove 2 elements starting from index 2. 
*/
console.log(vehicles.splice(2, 2));

console.log(vehicles);
