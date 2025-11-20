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