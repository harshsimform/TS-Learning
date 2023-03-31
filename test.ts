import { hell } from "./test2.js";

let hello = "harsh";
// console.log(hello);

// TS Function
const sum = (num: number) => {
  return num * 2;
};
// console.log(sum(10));
hell();

// TS Array
const arr = [5, 7, 4, 78, 9];
arr.push(10);
// String not assignable
// arr.push("harsh");
// console.log(arr);

const arr2 = [5, 7, 4, "harsh", 9];
arr2.push(10);
// Now String assignable
arr2.push("good");
// console.log(arr2);

// TS Objects
let obj = {
  name: "harsh",
  age: 21,
  city: "AHM",
};
// Number is not assignable to String
// console.log((obj.name = 123));
// console.log(obj);

// Not allowed to add propertie skills bcoz it doesn't exist
// obj.skills = ["HTML", "CSS"];

// Not allowed
// obj = {
//   name: "vatsal",
//   age: 22,
//   city: "SUR",
//   skills: ["HTML", "CSS"],
// };

// TS explicit types
let char: string;
let bool: boolean;
let age: number;

// char = 123
char = "fg";

// bool = 34
bool = true;

// mixed types variable
let uid: number | string;
uid = 1234;
uid = "hsdf";

// TS Array for string types
const arr3: String[] = [];
arr3.push("harsh");
// console.log(arr3);

// TS Array for mixed types using "union types syntax"
const arr4: (string | number)[] = [];
arr4.push("harsh", 123);
// console.log(arr4);

// TS explicit Objects
let obj2: object;
obj2 = { name: "harsh", age: 22, city: "AHM" };

let obj3: {
  name: string;
  age: number;
};
// city doesn't exist
// obj3 = { name: "harsh", age: 22, city: "AHM" };
