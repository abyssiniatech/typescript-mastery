// const greet = (name: string): string => {
//   return `Hello, ${name}! Welcome to TypeScript 🚀`;
// };

// console.log(greet("Surafel"));
// console.log("hello")





// types in typescript

// .1 string types
const name:string="suarfel"
const country:string="Ethiopia"
console.log(name,country)

// 2. number types
const num1:number=12;
console.log(num1)

// 3. boolean types
const isregister:boolean=true;
console.log(isregister)
// 4. arry 
const frainds:string[]=["Abel","Kirubel","Aster","Nahom"];
frainds.map((list)=>{
   console.log(list)
})

// 5 objects
const student:{name:string,age:number,email:string}={
  name:"abel",
  age:23,
  email:"sura@gmail.com"
}
console.log(`my name is ${student.name} and i'm ${student.age} and my email is ${student.email}`)

// 6 null type
const book:null=null

// 7. undefined
const subject:undefined =undefined;

// 8.any type      //not recommended for real projects 
let age:any="hello"
age=12


// 9 tuples
const password: [number,string]=[12,"what's up"]

// 10. type alias
// type Sums={
//   num1:number,

// }
// const sum=(num1:Sums)=>{
//   return num1 * num1
// }
// const val=sum(12)
// console.log(val)

// 11 interface type 
interface Student{
  name:string
  age:number
  email:string

}
const students:Student={
  name:"abel",
  age:23,
  email:"suar@gmail.comm",

}



// 12.function types
function sayhello():void{  //there is no return value
  console.log("hello these is typescritp")
}

// 13.enums in ts 
enum colors{
  red,
  blue,
  yellow,
  black,

}




// 14 composite types 
// const status:"active" | "close" | "pending"
