// Spread

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat (twoArray)
// const threeArray = [oneArray, twoArray]  made combination of two array

const threeArray = [...oneArray, ...twoArray]  // Concat all the array
// console.log(threeArray);

// Rest

function manyArguments () {
    let args = Array.from (arguments)
    let finalArr = args.map (e => e * 2)
    console.log(finalArr);
    console.log(typeof arguments);
}

function manyArguments2 (...args) {
    let finalArr = args.map (e => e)
    console.log(finalArr);
    console.log(typeof args);
}

manyArguments (1, 2, 3)
manyArguments (1, 2, 3, 4, 5, 6, 7)

manyArguments2 (1, 2, 3)
manyArguments2 (1, 2, 3, 4, 5, 6, 7)

// Spread Operator

const names = ["Superman", "Flash"]
const newNames = ["Batman", ...names, "Thor"]
console.log(newNames);

const siteName = "pwskills"
console.log([...siteName]);

// Rest Operator

function pwskills (...values) {
    return values
}

console.log(pwskills("Superman", "Flash"));
