class product {
    // Properties -> variables -> data member

    name;
    price;
    rating;

    // behaviours -> functions -> member function
    
    display () {
        console.log("displaying the current product");
    }
}

const p = new product ()
console.log(p);

p.display ()