// union types in typescript

type Role = "admin" | "user" | "guest";

const isAccess=(role:Role)=>{
  if(role==="admin"){
   console.log("you are admin") 
  }
  else if(role==="user"){
    console.log("you are user")
  }
  else{
    console.log("you are guest")
  }
}
isAccess("user")