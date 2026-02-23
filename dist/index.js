"use strict";
// union types in typescript
Object.defineProperty(exports, "__esModule", { value: true });
const isAccess = (role) => {
    if (role === "admin") {
        console.log("you are admin");
    }
    else if (role === "user") {
        console.log("you are user");
    }
    else {
        console.log("you are guest");
    }
};
isAccess("user");
//# sourceMappingURL=index.js.map