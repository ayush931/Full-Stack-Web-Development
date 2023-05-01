let emptySet = new Set ()

console.log(emptySet.size);

let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set ([...myArray])
console.log(newSet);

newSet.add (9)
newSet.clear ()
console.log(newSet);

console.log(newSet.has(9));

// Set Difference

function setDifference (setA, setB) {
    return new Set ([...setA].filter (el => !setB.has (el)))
}

// Map

let map = new Map ()
console.log(map.size);

let arr = [
    [1, "Mithun"]
    [2, "Alka"]
    [3, "Ayush"]
    [4, "Shivam"]
    [5, "Vinay"]
]

arr.map ((arrayItem) => map.set (arrayItem[0], arrayItem[1]))
