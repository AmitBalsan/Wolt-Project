var signUpPopup = document.querySelector(".signUp-panel");
var addRestaurant = document.querySelector(".body");
var restaurantList = document.querySelector(".restaurant");
var popup = document.querySelector(".popup");
var headerAvatar = document.querySelector(".header_btn");
var loginUser = JSON.parse(localStorage.getItem("user"));
var restaurantSelect = JSON.parse(localStorage.getItem("restaurant"));
var signUpForm = "<div class=\"signup\">\n<div class=\"signup-container\">\n  <div onclick=\"closeModal()\" class=\"signup-container--exit\">\n    <p class=\"signup-container--exit-right\"></p>\n    <p class=\"signup-container--exit-left\"></p>\n  </div>\n  <div class=\"signup-container--header\"><h2>SIGN-UP</h2></div>\n  <div class=\"signup-container--form\">\n    <form onsubmit=\"createUser(event)\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" name=\"firstName\" required/>\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" name=\"lastName\" required />\n      <label for=\"phoneNumber\" >Phone Number</label>\n      <input type=\"text\" name=\"phoneNumber\" required/>\n      <label for=\"email\" >Email</label>\n      <input type=\"email\" name=\"email\" required/>\n      <label for=\"password\" >Password</label>\n      <input type=\"password\" name=\"password\" required/>\n      <label for=\"verifyPassword\" >Verify Password</label>\n      <input type=\"password\" name=\"verifyPassword\" required/>\n      <div class=\"signup-container--form-selection\">\n        <input type=\"radio\" name=\"radio\" checked value=\"1\" />\n        <label for=\"one\">Client</label>\n        <input type=\"radio\" name=\"radio\" value=\"3\"/>\n        <label for=\"two\">Delivery</label>\n        <input type=\"radio\" name=\"radio\" value=\"2\" />\n        <label for=\"three\">Seller</label>\n      </div>\n      <div class=\"signup-container-btn\">\n      <button type=\"submit\">SIGN-UP</button>\n    </div>      \n    </form>\n  </div>\n</div>\n</div>";
var LoginForm = "<div class=\"login\">\n<div class=\"login-container\">\n  <div onclick=\"closeModal()\" class=\"login-container--exit\">\n    <p class=\"login-container--exit-right\"></p>\n    <p class=\"login-container--exit-left\"></p>\n  </div>\n  <div class=\"login-container--header\"><h2>LOGIN</h2></div>\n  <div class=\"login-container--form\">\n    <form onsubmit=\"userLogin(event)\">\n      <label for=\"email\" >Email</label>\n      <input type=\"email\" name=\"email\" required/>\n      <label for=\"password\" >Password</label>\n      <input type=\"password\" name=\"password\" required/>\n      <div class=\"login-container-btn\">\n      <button type=\"submit\">LOGIN</button>\n    </div>      \n    </form>\n  </div>\n</div>\n</div>";
var header = "<section class=\"header\">\n<img src=\"./assets/images/DAI-logo.png\" alt=\"DAI Logo\" />\n<div>\n<input type=\"text\"/> \n</div>\n<div class=\"header_btn\">\n  <button class=\"header_btn--signup\" onclick=\"openSignUp()\">\n    SIGN-UP\n  </button>\n  <button class=\"header_btn--login\" onclick=\"openLogin()\">LOGIN</button>\n</div>\n</section>";
var restaurantCard = "<selection class=\"restaurant_card\">\n<div class=\"restaurant_card_container\">\n  <div class=\"restaurant_card_container--img\">\n    <img src=\"../assets/images/Marinated-Burgers-5.jpg\" alt=\"\" />\n  </div>\n  <div class=\"restaurant_card_container--content\">\n    <div class=\"restaurant_card_container--content-description\">\n      <h3>test</h3>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum</p>\n    </div>\n    <div class=\"restaurant_card_container--content-time\">\n      <p>40 - 50</p>\n      <p>min</p>\n    </div>\n  </div>\n</div>\n</selection>";
var newRestaurantBtn = "<selection class=\"new_restaurant\">\n<div class=\"new_restaurant_container\">\n  <div class=\"new_restaurant_container--headline\">\n    <h2>Add Restaurant</h2>\n  </div>\n  <div onclick=\"handleCreate()\" class=\"new_restaurant_container--btn\">\n    <button><p>+</p></button>\n  </div>\n</div>\n</selection>";
var newRestaurantForm = "<selection class=\"create_restaurant\">\n<div class=\"create_restaurant-container\">\n  <div class=\"create_restaurant-container-headline\">\n    <h3>New Restaurant</h3>\n  </div>\n  <div class=\"create_restaurant-container-info\">\n    <form onsubmit=\"createRestaurant(event)\">\n      <div class=\"create_restaurant-container-info--details\">\n        <div class=\"create_restaurant-container-info--details-input\">\n          <label>Name</label>\n          <input type=\"text\" name=\"name\" />\n          <label>Cover Image</label>\n          <input type=\"text\" name=\"image\" />\n        </div>\n        <div class=\"create_restaurant-container-info--details-input\">\n          <label>Phone Number</label>\n          <input type=\"text\" name=\"phone\" />\n          <label>BN Number</label>\n          <input type=\"text\" name=\"bn\" />\n        </div>\n        <div class=\"create_restaurant-container-info--details-input\">\n          <label>City</label>\n          <input type=\"text\" name=\"city\" />\n          <label>Street</label>\n          <input type=\"street\" name=\"street\" />\n        </div>\n      </div>\n      <div class=\"create_restaurant-container-btn\">\n        <button id=\"cancel\" onclick=\"closeModal()\">Cancel</button>\n        <button type=\"submit\" id=\"Next\">Next</button>\n      </div>\n    </form>\n  </div>\n</div>\n</selection>";
var restaurantManageCard = "<selection class=\"restaurant_modal\">\n<div class=\"restaurant_modal_container\">\n  <div class=\"restaurant_modal_container-image\">\n    <img\n      src=\"https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg\"\n      alt=\"\"\n    />\n  </div>\n  <div class=\"restaurant_modal_container-content\">\n    <div class=\"restaurant_modal_container-content-res\">\n      <h3>Restaurant Name</h3>\n      <p>Phone: 03-63728773</p>\n      <p>City: Tel-Aviv</p>\n    </div>\n    <div class=\"restaurant_modal_container-content-delete\">\n      <img\n        src=\"../assets/images/f9c676dd662d9a7fbb11602b8837f7b7.png\"\n        alt=\"\"\n      />\n    </div>\n  </div>\n</div>\n</selection>";
var userAvatar = "<div class=\"avatar\">\n<a href=\"#\">\n  <div class=\"avatar__icon avatar__icon--big\">\n    <div class=\"avatar__initials\"></div>";
var createDishModal = " <selection class=\"create_dish\">\n<div class=\"create_dish_container\">\n  <div class=\"create_dish_container--cover\"></div>\n  <div class=\"create_dish_container--form\">\n    <form onsubmit=\"createDish(event)\">\n      <div class=\"create_dish_container--form-top\">\n        <label>Dish Name</label>\n        <input\n          class=\"create_dish_container--form-top-name\"\n          type=\"text\"\n          name=\"dishName\"\n        />\n        <label>Price</label>\n        <input\n          class=\"create_dish_container--form-top-price\"\n          type=\"number\"\n          name=\"price\"\n          maxlength=\"4\"\n        />\n      </div>\n      <label>Image</label>\n      <input onchange=\"imagePreview(this.value)\" type=\"text\" name=\"image\" />\n      <label>Notes</label>\n      <textarea type=\"text\" name=\"notes\"> </textarea>\n      <div class=\"create_dish_container--form-btn\">\n        <button onclick=\"closeModal()\" class=\"create_dish_container--form-btn--canel\">\n          Cancel\n        </button>\n        <button\n          class=\"create_dish_container--form-btn--create\"\n          type=\"submit\"\n        >\n          Create\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n</selection>";
var dishModal = "<selection class=\"dish\">\n<div class=\"dish_container\">\n  <div class=\"dish_container-cover\"></div>\n  <div class=\"dish_container-headline\">\n    <h3>dish</h3>\n    <h4>\u20AA54</h4>\n  </div>\n  <div class=\"dish_container-notes\">\n    <p>this is a text</p>\n  </div>\n  <div class=\"dish_container-addcart\">\n    <button>Add to Cart</button>\n  </div>\n</div>\n</selection>";
function createAvatar() {
    if (loginUser) {
        var userN = loginUser.firstName.charAt(0).toUpperCase();
        var userL = loginUser.lastName.charAt(0).toUpperCase();
        var userName = "" + userN + userL;
        headerAvatar.innerHTML = userAvatar;
        var avatarName = document.querySelector(".avatar__initials");
        avatarName.innerHTML = userName;
    }
}
