function handleSignUp() {
  const loginPopup = document.querySelector(".login-panel") as HTMLDivElement;
  console.log(loginPopup);

  loginPopup.innerHTML = `<div>
      <form>
      <label>First Name</label>
      <input type="text" name="first-name">

      </form>
      </div>
      `;
}

function handleLogin() {}
