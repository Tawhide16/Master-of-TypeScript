"use strict";
//nullable types
Object.defineProperty(exports, "__esModule", { value: true });
const getusername = (input) => {
    if (input) {
        console.log(`from DB: ${input}`);
    }
    else {
        console.log("from all db");
    }
};
getusername("john_doe");
getusername(null);
//# sourceMappingURL=nullable.js.map