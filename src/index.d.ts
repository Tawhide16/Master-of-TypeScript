export {};
interface User {
  name: {
    first: string;
    last: string;
  };
}

function sendGifts(...friends: string[]) {
  friends.forEach((friend) => {
    console.log(`Sending gift to ${friend}`);
  });
}               