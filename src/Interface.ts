//function
type  add = (num1: number, num2: number) => number;

//interface
interface IAdd {
    (num1: number, num2: number): number;
}
const addFunction: add = (num1, num2) => num1 + num2;
const addInterface: IAdd = (num1, num2) => num1 + num2;

console.log(addFunction(2, 3));
console.log(addInterface(5, 7));
