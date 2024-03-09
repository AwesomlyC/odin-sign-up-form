let loginform = document.querySelector("#loginform");
// Passwords Validation
loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    let password = document.querySelector("#password");
    let confirmation = document.querySelector("#confirmation");

    if (password.value !== confirmation.value){
        console.log("passwords are not equal");
        alert("Ensure passwords are the same!");
    }
    else{
        console.log("Passwords are equal!");
        alert("Thank you for creating your account!");
    }
})