// Array of Arrays with Objects
const man = [
  [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ],
  [
    { name: "Jim", age: 35 },
    { name: "Jill", age: 28 },
  ],
];

man.forEach((subArray) => {
  subArray.forEach((person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  });
});
//  ----------------------------------------------

// Array of Objects with Nested Arrays
const persons = [
  {
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming"],
  },
  {
    name: "Jane",
    age: 25,
    hobbies: ["cycling", "painting"],
  },
];

persons.forEach((person) => {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
  console.log("Hobbies:");
  person.hobbies.forEach((hobby) => {
    console.log(`- ${hobby}`);
  });
});

const car = [
  {
    name: "tesla",
    model: "2003",
    color: "black",
  },
  {
    name: "ktm",
    model: "2004",
    color: "red",
  },
];

car.forEach((mod) => {
  console.log(
    "Name: " + mod.name + " Model: " + mod.model + " Color: " + mod.color
  );
});
