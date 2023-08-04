function openSignUp() {
  const signUpPopup = document.querySelector(".signUp-panel") as HTMLDivElement;
  console.log(signUpPopup);
  signUpPopup.style.display = "flex";
}

function toggleIdInput(show: boolean) {
  const idContainer = document.querySelector("#idContainer") as HTMLDivElement;

  if (show === true) {
    idContainer.style.display = "block";
  } else {
    idContainer.style.display = "none";
  }
}
