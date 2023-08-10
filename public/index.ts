interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  userType: number;
}

function isLogin() {
  fetch("/api/login")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.login);
      if (data.login) {
        const userN: string = loginUser.firstName.charAt(0);
        const userL: string = loginUser.lastName.charAt(0);
        const userName = `${userN}${userL}`;
        console.log(userName);
        headerAvatar.innerHTML = userAvatar;
        const avatarName = document.querySelector(
          ".avatar__initials"
        ) as HTMLDivElement;

        avatarName.innerHTML = userName;
        if (data.userType === 2) {
          window.location.replace("/restaurant-admin/restaurant.html");
        }
      } else {
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
  const userLogin = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };

  fetch("/api/user-login", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userLogin }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.user.userType === 2) {
        window.location.replace("/restaurant-admin/restaurant.html");
      }
    });
}

function createUser(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const user: User = {
    firstName: elements.firstName.value,
    lastName: elements.lastName.value,
    phoneNumber: elements.phoneNumber.value,
    email: elements.email.value,
    password: elements.password.value,
    userType: elements.radio.value,
  };

  fetch("/api/signup-user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function closeModal() {
  const signUpPopup = document.querySelector(".signUp-panel") as HTMLDivElement;
  signUpPopup.innerHTML = "";
  signUpPopup.style.position = "unset";
}

function handleSubscribe(event) {
  event.preventDefault();
  const subscribeEmail = event.target.elements.email.value;
  if (!subscribeEmail) throw new Error("There is no Email");
  fetch("/api/user-email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: subscribeEmail }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

isLogin();
