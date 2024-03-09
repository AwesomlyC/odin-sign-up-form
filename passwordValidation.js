let loginform = document.querySelector("#loginform");
// Passwords Validation
loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    let password = document.querySelector("#password");
    let confirmation = document.querySelector("#confirmation");

    if (password.value !== confirmation.value){
        alert("Passwords are not the same!");
    }
    else{
        alert("Thank you for creating your account!");
    }
})