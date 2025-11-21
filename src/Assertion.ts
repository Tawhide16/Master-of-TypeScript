let aytype = " mehejabin";

const KGtog =  (input:string|number) => {
    if(typeof input === "string"){
        const [value] =  input.split(" ");
        return `converted output is${Number(value) * 1000} gms`;
    }  else if(typeof input === "number") {
        return `converted output is ${input / 1000} kgs`;
    }
}


const output = KGtog(5000);
console.log({output});