const password = prompt("Enter password:");
const confirmPassword = prompt("Confirm password:");

if (password === confirmPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful.");
}
