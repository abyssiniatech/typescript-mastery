const login = (email: string, password: string): boolean => {
  return email.includes("@") && password.length > 6;
};
const val=login("suraf@mjhaj","1234788")
console.log(val)