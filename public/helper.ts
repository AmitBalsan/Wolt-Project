const loginUser = JSON.parse(localStorage.getItem("user")!);
const signUpPopup = document.querySelector(".signUp-panel") as HTMLDivElement;
const addRestaurant = document.querySelector(".body") as HTMLDivElement;
const restaurantList = document.querySelector(".restaurant") as HTMLDivElement;
const restaurantsList = document.querySelector(
  ".restaurants"
) as HTMLDivElement;
const popup = document.querySelector(".popup") as HTMLDivElement;
const headerAvatar = document.querySelector(".header_btn") as HTMLDivElement;

const restaurantSelect = JSON.parse(localStorage.getItem("restaurant")!);

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
  <div onclick="handleCreate()" class="new_restaurant_container--btn">
    <button><p>+</p></button>
  </div>
</div>
</selection>`;

const newRestaurantForm = `    <selection class="create_restaurant">
<div class="create_restaurant-container">
  <div class="create_restaurant-container-headline">
    <h3>New Restaurant</h3>
  </div>
  <div class="create_restaurant-container-info">
    <form onsubmit="createRestaurant(event)">
      <div class="create_restaurant-container-info--details">
        <div class="create_restaurant-container-info--details-input">
          <label>Name</label>
          <input type="text" name="name"  required/>
          <label>Cover Image</label>
          <input type="text" name="image"  required/>
        </div>
        <div class="create_restaurant-container-info--details-input">
          <label>Phone Number</label>
          <input type="text" name="phone" required />
          <label>BN Number</label>
          <input type="text" name="bn"  required/>
        </div>
        <div class="create_restaurant-container-info--details-input">
          <label>City</label>
          <input type="text" name="city"  required/>
          <label>Street</label>
          <input type="street" name="street"  required/>
        </div>
      </div>
      <div class="create_restaurant-container-info--details-note">
        <label for="">notes</label>
        <textarea name="notes" required></textarea>
        <div class="create_restaurant-container-info--details-time">
          <label>Min Time</label>
          <input name="minTime" type="number"  required/>
          <label>Max Time</label>
          <input name="maxTime" type="number"  required/>
        </div>
      </div>
      <div class="create_restaurant-container-btn">
        <button id="cancel" onclick="closeModal()">Cancel</button>
        <button type="submit" id="Next">Next</button>
      </div>
    </form>
  </div>
</div>
</selection>`;

const restaurantManageCard = `<selection class="restaurant_modal">
<div class="restaurant_modal_container">
  <div class="restaurant_modal_container-image">
    <img
      src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
      alt=""
    />
  </div>
  <div class="restaurant_modal_container-content">
    <div class="restaurant_modal_container-content-res">
      <h3>Restaurant Name</h3>
      <p>Phone: 03-63728773</p>
      <p>City: Tel-Aviv</p>
    </div>
    <div class="restaurant_modal_container-content-delete">
      <img
        src="../assets/images/f9c676dd662d9a7fbb11602b8837f7b7.png"
        alt=""
      />
    </div>
  </div>
</div>
</selection>`;

const userAvatar = `
<div  onclick="getCartItems()" class="header_btn--cart">
<img
  src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
  alt=""
/>
<div class="header_btn--cart">
  <div class="header_btn--cart-count">
    <div class="header_btn--cart-count-initials"></div>
  </div>
</div>
</div>
<section>
<div class="avatar">
<a href="#">
  <div  onclick="openDropDown()" class="dropbtn avatar__icon avatar__icon--big">
    <div class="avatar__initials"></div>
<div class="dropdown-content">
  <p onClick="logOut()">Log Out</p>
</div>
</section>`;

const createDishModal = ` <selection class="create_dish">
<div class="create_dish_container">
  <div class="create_dish_container--cover"></div>
  <div class="create_dish_container--form">
    <form onsubmit="createDish(event)">
      <div class="create_dish_container--form-top">
        <label>Dish Name</label>
        <input
          class="create_dish_container--form-top-name"
          type="text"
          name="dishName"
        />
        <label>Price</label>
        <input
          class="create_dish_container--form-top-price"
          type="number"
          name="price"
          maxlength="4"
        />
      </div>
      <label>Image</label>
      <input onchange="imagePreview(this.value)" type="text" name="image" />
      <label>Notes</label>
      <textarea type="text" name="notes"> </textarea>
      <div class="create_dish_container--form-btn">
        <button onclick="closeModal()" class="create_dish_container--form-btn--canel">
          Cancel
        </button>
        <button
          class="create_dish_container--form-btn--create"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</div>
</selection>`;

const dishModal = `<selection class="dish">
<div class="dish_container">
  <div class="dish_container-cover"></div>
  <div class="dish_container-headline">
    <h3>dish</h3>
    <h4>₪54</h4>
  </div>
  <div class="dish_container-notes">
    <p>this is a text</p>
  </div>
  <div class="dish_container-addcart">
    <button>Add to Cart</button>
  </div>
</div>
</selection>`;

const cartModal = `<section class="cart">
<div class="cart-container">
<div onclick="closeModal()" class="cart-container--exit">
<p class="cart-container--exit-right"></p>
<p class="cart-container--exit-left"></p>
</div>
<h2>CART</h2>
  <div class="cart-container--content">

  </div>
  <div class="cart-container-total">
    <p>Total</p>
    <p class="total"></p>
  </div>
  <div class="cart-container-btn">
    <button onclick="onPay()">Pay</button>
  </div>
</div>
</section>
`;

function getCity() {
  fetch("/api/get-city")
    .then((res) => res.json())
    .then((data) => {
      renderCityData(data.cityDB);
    });
}

let cityList = "";
function renderCityData(cites: City[]) {
  console.log(cites);

  const cityHTML = cites
    .map((res) => ` <option value="${res._id}">${res.cityName}</option>`)
    .join("");
  cityList = `<div class="address">
  <div class="address-container">
    <div onclick="closeModal()" class="address-container--exit">
      <p class="address-container--exit-right"></p>
      <p class="address-container--exit-left"></p>
    </div>
    <div class="address-container--header"><h2>Address</h2></div>
    <div class="address-container--form">
      <form onsubmit="addUserAddress(event)">
        <label for="city">City</label>
        <select name="city" class="address-container--form-select">
        ${cityHTML}
        </select>
        <label for="street">Street</label>
        <input type="text" name="street" required />
        <label for="home">Home</label>
        <input type="number" name="home" required />
        <label for="entrance">Entrance</label>
        <input type="text" name="entrance" required />
        <div class="address-container-btn">
          <button type="submit">Add Address</button>
        </div>
      </form>
    </div>
  </div>
  </div>`;
  console.log(cityList);
}

getCity();
