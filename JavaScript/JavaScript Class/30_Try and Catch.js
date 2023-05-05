try {
    let x = undefined
    console.log(x[0]);
} 

catch {
    console.log("error handling in catch");
} 

finally {
    console.log("Finally always gets executed");
}

console.log("end");

try {
    let y = undefined
    console.log(y[0]);
}

catch (err) {
    console.log("error handling in catch", err);
}

finally {
    console.log("Finally always gets executed");
}