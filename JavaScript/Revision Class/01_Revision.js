// if (condition) {
    // Statement
// }

if (1 === 1) {
    console.log("Statement Executed");
}

let userToken = undefined
let googleAuthToken = "googletoken"

if (userToken || googleAuthToken) {
    console.log("User allowed to login");
} else {
    console.log("Please login to get your token");
}
console.log("Outside the Scope");


let isPwStudent = false
let isPwEmployee = true

if (isPwStudent) {
    console.log("Verified you are PW Student");
} else if (isPwEmployee) {
    console.log("Congrats, you are PW Employee");
} else {
    console.log("Sorry, details not found");
}


let isLoggedIn = true
// condition ? true : false
isLoggedIn ? console.log("Logout") : console.log("Login")

// switch (expression) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month = 4

switch (month) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Holiday");
        break;
}

// Loops also known as iteration

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (initializer, condition, changer) {
    // Statement
// }

for (let i = 0; i <= 5; i++) {
    console.log(`value of i is: ${i}`);
}

let arr = ["PW", "PW Skills", "Internship", "PW Labs", "Gate Wallah"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(arr[index]);
}

let obj = {
    name: "PW Student",
    course: "FSWD",
    duration: 100
}

for (const i in obj) {
    console.log(`${i} - ${obj[i]}`);
}

for (const ite of arr) {
    console.log(ite);
}

let newI = 0
while (newI <= 5) {
    console.log(`value of i is: ${newI}`);
    newI = newI + 1
}

for (let a = 0; a <= 5; a++) {
    if (a == 3) {
        break;
    }
    console.log(a);
}

console.log(".....................");

for (let a = 0; a <= 5; a++) {
    if (a == 3) {
        continue;
    }
    console.log(a);
}