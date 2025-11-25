type GenericArr<T> = Array<T>
const isEligibleF : GenericArr<boolean> = [true, false, true];

const  userList : GenericArr<{
    name: string;
    age: number;
}> = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 35}
];  
console.log(isEligibleF);

console.log(userList);
// type Generic<T> = T[]; 