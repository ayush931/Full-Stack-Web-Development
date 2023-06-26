function h (x, fn) {
    // h -> higher order function
    // fn -> callback
    console.log(x * x);
    fn ()
}

h (10, function () {
    console.log("Done with Callback");
})



function a (y, f) {
    console.log(y * y);
    f (y * y)
}

a (10, exe)

function exe (n) {
    console.log("Squared value is", n);
}

console.log("Start");

setTimeout (function f () {
    console.log("Timer Done");
}, 3000)

console.log("End");


console.log("Start");

setTimeout (function b () {
    console.log("Time Over");
}, 5000)

console.log("End");
for (let i = 0; i < 10; i++) {}

