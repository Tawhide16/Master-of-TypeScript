//nullable types

const getusername =  (input: string | null) => {
    if (input) {
        console.log(`from DB: ${input}`);
    }else{
        console.log("from all db")
    }
}

getusername("john_doe");
getusername(null);