"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = (email, password) => {
    return email.includes("@") && password.length > 6;
};
const val = login("suraf@mjhaj", "1234788");
console.log(val);
//# sourceMappingURL=index.js.map