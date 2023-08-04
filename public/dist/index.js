function openSignUp() {
    var signUpPopup = document.querySelector(".signUp-panel");
    console.log(signUpPopup);
    signUpPopup.style.display = "flex";
}
function toggleIdInput(show) {
    var idContainer = document.querySelector("#idContainer");
    if (show === true) {
        idContainer.style.display = "block";
    }
    else {
        idContainer.style.display = "none";
    }
}
