"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Alice", "Bob", "Charlie"];
const bestFriend = ["Dave", "Eve", "Frank"];
friends.push(...bestFriend);
console.log(friends);
// rest operator
const sendGifts = (...friends) => {
    friends.forEach((friends) => {
        console.log(`Gift sent to ${friends}`);
    });
};
sendGifts("Alice", "Bob", "Charlie", "Dave");
//# sourceMappingURL=index.js.map