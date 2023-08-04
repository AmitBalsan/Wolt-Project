const signUpForm = `<form id="sign-up" onsubmit="handleSignUp(event)">
<label for="first-name">First Name</label>
<input type="text" id="first-name" required />
<label for="last-name">Last Name</label>
<input type="text" id="last-name" required />
<label for="address">Address</label>
<input type="text" id="address" required />
<label>
  <input
    type="radio"
    name="kindOfPerson"
    value="delivery-person"
    onclick="toggleIdInput(true)"
  />Delivery-Person </label
><br />
<label>
  <input
    type="radio"
    name="kindOfPerson"
    value="seller"
    onclick="toggleIdInput(false)"
  />Seller </label
><br />
<label>
  <input
    type="radio"
    name="kindOfPerson"
    value="client"
    onclick="toggleIdInput(false)"
  />Client </label>
<div id="idContainer" style="display: none">
  <label for="id" id="idLabel">Id</label>
  <input type="text" id="id" />
</div>
<label for="phone">Phone</label>
<input type="text" id="phone" required />
<input type="submit" value="Sign Up" />
</form>`;
