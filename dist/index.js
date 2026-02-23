"use strict";
// const greet = (name: string): string => {
//   return `Hello, ${name}! Welcome to TypeScript 🚀`;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(greet("Surafel"));
// console.log("hello")
// types in typescript
// .1 string types
const name = "suarfel";
const country = "Ethiopia";
console.log(name, country);
// 2. number types
const num1 = 12;
console.log(num1);
// 3. boolean types
const isregister = true;
console.log(isregister);
// 4. arry 
const frainds = ["Abel", "Kirubel", "Aster", "Nahom"];
frainds.map((list) => {
    console.log(list);
});
// 5 objects
const student = {
    name: "abel",
    age: 23,
    email: "sura@gmail.com"
};
console.log(`my name is ${student.name} and i'm ${student.age} and my email is ${student.email}`);
// 6 null type
const book = null;
// 7. undefined
const subject = undefined;
// 8.any type      //not recommended for real projects 
let age = "hello";
age = 12;
// 9 tuples
const password = [12, "what's up"];
const students = {
    name: "abel",
    age: 23,
    email: "suar@gmail.comm",
};
// 12.function types
function sayhello() {
    console.log("hello these is typescritp");
}
// 13.enums in ts 
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["yellow"] = 2] = "yellow";
    colors[colors["black"] = 3] = "black";
})(colors || (colors = {}));
// 14 composite types 
// const status:"active" | "close" | "pending"
//# sourceMappingURL=index.js.map