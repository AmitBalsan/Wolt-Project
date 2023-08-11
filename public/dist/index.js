function isLogin() {
    fetch("/api/login")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data.login);
        if (data.login) {
            var userN = loginUser.firstName.charAt(0);
            var userL = loginUser.lastName.charAt(0);
            var userName = "" + userN + userL;
            console.log(userName);
            headerAvatar.innerHTML = userAvatar;
            var avatarName = document.querySelector(".avatar__initials");
            avatarName.innerHTML = userName;
            if (data.userType === 2) {
                window.location.replace("/restaurant-admin/restaurant.html");
            }
            else if (data.userType === 1) {
                window.location.replace("/client/client.html");
            }
        }
        else {
            localStorage.removeItem("user");
        }
    });
}
function openSignUp() {
    signUpPopup.innerHTML = signUpForm;
    signUpPopup.style.position = "fixed";
}
function openLogin() {
    signUpPopup.innerHTML = LoginForm;
    signUpPopup.style.position = "fixed";
}
function userLogin(event) {
    event.preventDefault();
    var userLogin = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
    };
    fetch("/api/user-login", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userLogin: userLogin })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        isLogin();
    });
}
function createUser(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var user = {
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        phoneNumber: elements.phoneNumber.value,
        email: elements.email.value,
        password: elements.password.value,
        userType: elements.radio.value
    };
    fetch("/api/signup-user", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: user })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function closeModal() {
    var signUpPopup = document.querySelector(".signUp-panel");
    signUpPopup.innerHTML = "";
    signUpPopup.style.position = "unset";
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
isLogin();
