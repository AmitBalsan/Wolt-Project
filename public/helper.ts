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

const header = `<section class="header">
<img src="./assets/images/DAI-logo.png" alt="DAI Logo" />
<div>
<input type="text"/> 
</div>
<div class="header_btn">
  <button class="header_btn--signup" onclick="openSignUp()">
    SIGN-UP
  </button>
  <button class="header_btn--login" onclick="openLogin()">LOGIN</button>
</div>
</section>`;

const restaurantCard = `<selection class="restaurant_card">
<div class="restaurant_card_container">
  <div class="restaurant_card_container--img">
    <img src="../assets/images/Marinated-Burgers-5.jpg" alt="" />
  </div>
  <div class="restaurant_card_container--content">
    <div class="restaurant_card_container--content-description">
      <h3>test</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum</p>
    </div>
    <div class="restaurant_card_container--content-time">
      <p>40 - 50</p>
      <p>min</p>
    </div>
  </div>
</div>
</selection>`;

const newRestaurantBtn = `<selection class="new_restaurant">
<div class="new_restaurant_container">
  <div class="new_restaurant_container--headline">
    <h2>Add Restaurant</h2>
  </div>
  <div onclick="" class="new_restaurant_container--btn">
    <button><p>+</p></button>
  </div>
</div>
</selection>`;

const newRestaurantForm = `<selection class="create_restaurant">
<div class="create_restaurant-container">
  <div class="create_restaurant-container-headline">
    <h3>New Restaurant</h3>
  </div>
  <div class="create_restaurant-container-info">
    <form onsubmit="createRestaurant(event)">
      <div class="create_restaurant-container-info--details">
        <div class="create_restaurant-container-info--details-input">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Cover Image</label>
          <input type="text" name="image" />
        </div>
        <div class="create_restaurant-container-info--details-input">
          <label>Phone Number</label>
          <input type="text" name="phone" />
          <label>BN Number</label>
          <input type="text" name="bn" />
        </div>
        <div class="create_restaurant-container-info--details-input">
          <label>City</label>
          <input type="text" name="city" />
          <label>Street</label>
          <input type="street" name="street" />
        </div>
      </div>
      <div class="create_restaurant-container-btn">
        <button id="cancel">Cancel</button>
        <button type="submit" id="Next">Next</button>
      </div>
    </form>
  </div>
</div>
</selection>`;
