class product {
    // Properties -> variable -> data number
    // name;
    // price:
    // rating;

    #rating; // # makes this private. call it using the # before it.

    name;
    price;
    rating;

    constructor (n, p, r) {
        console.log("calling the constructor");
        this.name = n
        this.price = p
        this.#rating = r
        // return 10; if you are returning primitive then it will be avoided in constructor.
        // return {x: 20, y: 30} if you return non primitive then it will be returned.
        // return this
    }

    static custom () {
        console.log("calling a static method");
    }

    // behaviour -> functions -> member functions

    display () {
        console.log("this refers to;", this);
        console.log("displaying the current product", this.name, this.price, this.#rating);
    }
}

const p = new product ("Iphone", 100000, 5) // new creates an empty plain object
// In the above piece of code we are calling the constructor method

console.log(p);
p.name = "samsung s23"
console.log(p.name);
console.log(p.rating);

p.display ()
product.custom () // call using the class name.