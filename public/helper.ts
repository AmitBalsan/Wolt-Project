const signUpPopup = document.querySelector(".signUp-panel") as HTMLDivElement;

const signUpForm = `<div class="signup">
<div class="signup-container">
  <div onclick="closeModal()" class="signup-container--exit">
    <p class="signup-container--exit-right"></p>
    <p class="signup-container--exit-left"></p>
  </div>
  <div class="signup-container--header"><h2>SIGN-UP</h2></div>
  <div class="signup-container--form">
    <form onsubmit="createUser(event)">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" required/>
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" required />
      <label for="phoneNumber" >Phone Number</label>
      <input type="text" name="phoneNumber" required/>
      <label for="email" >Email</label>
      <input type="email" name="email" required/>
      <label for="password" >Password</label>
      <input type="password" name="password" required/>
      <label for="verifyPassword" >Verify Password</label>
      <input type="password" name="verifyPassword" required/>
      <div class="signup-container--form-selection">
        <input type="radio" name="radio" checked value="1" />
        <label for="one">Client</label>
        <input type="radio" name="radio" value="3"/>
        <label for="two">Delivery</label>
        <input type="radio" name="radio" value="2" />
        <label for="three">Seller</label>
      </div>
      <div class="signup-container-btn">
      <button type="submit">SIGN-UP</button>
    </div>      
    </form>
  </div>
</div>
</div>`;

const LoginForm = `<div class="login">
<div class="login-container">
  <div onclick="closeModal()" class="login-container--exit">
    <p class="login-container--exit-right"></p>
    <p class="login-container--exit-left"></p>
  </div>
  <div class="login-container--header"><h2>LOGIN</h2></div>
  <div class="login-container--form">
    <form onsubmit="userLogin(event)">
      <label for="email" >Email</label>
      <input type="email" name="email" required/>
      <label for="password" >Password</label>
      <input type="password" name="password" required/>
      <div class="login-container-btn">
      <button type="submit">LOGIN</button>
    </div>      
    </form>
  </div>
</div>
</div>`;
