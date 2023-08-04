function openSignUp() {
    var signUpPopup = document.querySelector(".signUp-panel");
    signUpPopup.innerHTML = signUpForm;
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
function handleSubscribe(event) {
    event.preventDefault();
    var subscribeEmail = event.target.elements.email.value;
    if (!subscribeEmail)
        throw new Error("There is no Email");
    fetch("/api/user-email", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: subscribeEmail })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    });
}
