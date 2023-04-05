let counter = 0;

// getting DOM elements using id
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const counterDisplay = document.getElementById("counter");

// onclick action for increment button
incrementButton.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
});

// onclick action for decrement button
decrementButton.addEventListener("click", () => {
  counter--;
  counterDisplay.innerText = counter;
});
