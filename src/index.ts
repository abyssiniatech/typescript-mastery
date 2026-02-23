interface User {
  id: number;
  name: string;
  active: boolean;
}

const user: User = {
  id: 1,
  name: "Surafel",
  active: true
};

console.log(user.id)
console.log(user.name)
console.log(user.active)