const friends = ["Alice", "Bob", "Charlie"];

const bestFriend =  ["Dave", "Eve", "Frank"];

friends.push(...bestFriend);
console.log(friends);


// rest operator

const sendGifts =  (...friends: string[]) => {
    friends.forEach((friends: string) => {
        console.log(`Gift sent to ${friends}`);
    })
}

sendGifts("Alice", "Bob", "Charlie", "Dave");

 // Destructuring example
const user = {
    id: 42,
    name:{
        first: "John",
        last: "Doe"
    },
    cooler:"black"
}   

const {cooler} = user;
console.log(cooler);