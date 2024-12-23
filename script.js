let age = document.querySelector("#age");
let name = document.querySelector("#name");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    event.preventDefault(); 

    const userAge = parseInt(age.value.trim());
    const userName = name.value.trim();

    if (!userName || isNaN(userAge)) {
		alert("Please enter valid details");

        return;
    }

    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000); // 4-second delay
    });

    agePromise
        .then((message) => alert(message))
        .catch((error) => alert(error));
});
