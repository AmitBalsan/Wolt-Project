function openSignUp() {
  const signUpPopup = document.querySelector(".signUp-panel") as HTMLDivElement;
  signUpPopup.innerHTML = signUpForm;
}

function toggleIdInput(show: boolean) {
  const idContainer = document.querySelector("#idContainer") as HTMLDivElement;

  if (show === true) {
    idContainer.style.display = "block";
  } else {
    idContainer.style.display = "none";
  }
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
