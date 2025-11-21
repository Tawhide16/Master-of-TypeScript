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

const {name: {first : tahide , last}} = user;

// tahide = first name
console.log(tahide);
console.log(last);