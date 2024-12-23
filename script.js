let age = document.querySelector("#age");
let name = document.querySelector("#name");
let btn = document.querySelector("#btn");

// Add event listener to the button (form submission)
btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const userAge = parseInt(age.value.trim());  // Ensure we get an integer from age
    const userName = name.value.trim();          // Get the name input

    // Validation: Ensure fields are not empty and age is a valid number
    if (!userName || isNaN(userAge)) {
        alert("Please enter valid details.");  // Update alert message to match the test
        return;
    }

    // Create a promise that resolves or rejects based on the age value
    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000); // Wait for 4 seconds before resolving or rejecting the promise
    });

    // Handle the promise result
    agePromise
        .then((message) => alert(message))   // Show message when promise resolves
        .catch((error) => alert(error));     // Show message when promise rejects
});
