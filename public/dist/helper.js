var loginUser = JSON.parse(localStorage.getItem("user"));
var addressUser = JSON.parse(localStorage.getItem("userAddress"));
var signUpPopup = document.querySelector(".signUp-panel");
var addRestaurant = document.querySelector(".body");
var restaurantList = document.querySelector(".restaurant");
var restaurantsList = document.querySelector(".restaurants");
var popup = document.querySelector(".popup");
var headerAvatar = document.querySelector(".header_btn");
var restaurantSelect = JSON.parse(localStorage.getItem("restaurant"));
var citySelection = "";
function getCity() {
    fetch("/api/get-city")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        renderCityData(data.cityDB);
    });
}
var cityList = "";
function renderCityData(cites) {
    console.log(cites);
    var cityHTML = cites
        .map(function (res) { return " <option value=\"" + res._id + "\">" + res.cityName + "</option>"; })
        .join("");
    citySelection = cityHTML;
    console.log(citySelection);
    cityList = "<div class=\"address\">\n  <div class=\"address-container\">\n    <div onclick=\"closeModal()\" class=\"address-container--exit\">\n      <p class=\"address-container--exit-right\"></p>\n      <p class=\"address-container--exit-left\"></p>\n    </div>\n    <div class=\"address-container--header\"><h2>Address</h2></div>\n    <div class=\"address-container--form\">\n      <form onsubmit=\"addUserAddress(event)\">\n        <label for=\"city\">City</label>\n        <select name=\"city\" class=\"address-container--form-select\">\n        " + cityHTML + "\n        </select>\n        <label for=\"street\">Street</label>\n        <input type=\"text\" name=\"street\" required />\n        <label for=\"home\">Home</label>\n        <input type=\"number\" name=\"home\" required />\n        <label for=\"entrance\">Entrance</label>\n        <input type=\"text\" name=\"entrance\" required />\n        <div class=\"address-container-btn\">\n          <button type=\"submit\">Add Address</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  </div>";
}
var signUpForm = "<div class=\"signup\">\n<div class=\"signup-container\">\n  <div onclick=\"closeModal()\" class=\"signup-container--exit\">\n    <p class=\"signup-container--exit-right\"></p>\n    <p class=\"signup-container--exit-left\"></p>\n  </div>\n  <div class=\"signup-container--header\"><h2>SIGN-UP</h2></div>\n  <div class=\"signup-container--form\">\n    <form onsubmit=\"createUser(event)\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" name=\"firstName\" required/>\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" name=\"lastName\" required />\n      <label for=\"phoneNumber\" >Phone Number</label>\n      <input type=\"text\" name=\"phoneNumber\" required/>\n      <label for=\"email\" >Email</label>\n      <input type=\"email\" name=\"email\" required/>\n      <label for=\"password\" >Password</label>\n      <input type=\"password\" name=\"password\" required/>\n      <label for=\"verifyPassword\" >Verify Password</label>\n      <input type=\"password\" name=\"verifyPassword\" required/>\n      <div class=\"signup-container--form-selection\">\n        <input type=\"radio\" name=\"radio\" checked value=\"1\" />\n        <label for=\"one\">Client</label>\n        <input type=\"radio\" name=\"radio\" value=\"3\"/>\n        <label for=\"two\">Delivery</label>\n        <input type=\"radio\" name=\"radio\" value=\"2\" />\n        <label for=\"three\">Seller</label>\n      </div>\n      <div class=\"signup-container-btn\">\n      <button type=\"submit\">SIGN-UP</button>\n    </div>      \n    </form>\n  </div>\n</div>\n</div>";
var LoginForm = "<div class=\"login\">\n<div class=\"login-container\">\n  <div onclick=\"closeModal()\" class=\"login-container--exit\">\n    <p class=\"login-container--exit-right\"></p>\n    <p class=\"login-container--exit-left\"></p>\n  </div>\n  <div class=\"login-container--header\"><h2>LOGIN</h2></div>\n  <div class=\"login-container--form\">\n    <form onsubmit=\"userLogin(event)\">\n      <label for=\"email\" >Email</label>\n      <input type=\"email\" name=\"email\" required/>\n      <label for=\"password\" >Password</label>\n      <input type=\"password\" name=\"password\" required/>\n      <div class=\"login-container-btn\">\n      <button type=\"submit\">LOGIN</button>\n    </div>      \n    </form>\n  </div>\n</div>\n</div>";
var header = "<section class=\"header\">\n<img src=\"./assets/images/DAI-logo.png\" alt=\"DAI Logo\" />\n<div>\n<input type=\"text\"/> \n</div>\n<div class=\"header_btn\">\n  <button class=\"header_btn--signup\" onclick=\"openSignUp()\">\n    SIGN-UP\n  </button>\n  <button class=\"header_btn--login\" onclick=\"openLogin()\">LOGIN</button>\n</div>\n</section>";
var restaurantCard = "<selection class=\"restaurant_card\">\n<div class=\"restaurant_card_container\">\n  <div class=\"restaurant_card_container--img\">\n    <img src=\"../assets/images/Marinated-Burgers-5.jpg\" alt=\"\" />\n  </div>\n  <div class=\"restaurant_card_container--content\">\n    <div class=\"restaurant_card_container--content-description\">\n      <h3>test</h3>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum</p>\n    </div>\n    <div class=\"restaurant_card_container--content-time\">\n      <p>40 - 50</p>\n      <p>min</p>\n    </div>\n  </div>\n</div>\n</selection>";
var newRestaurantBtn = "<selection class=\"new_restaurant\">\n<div class=\"new_restaurant_container\">\n  <div class=\"new_restaurant_container--headline\">\n    <h2>Add Restaurant</h2>\n  </div>\n  <div onclick=\"handleCreate()\" class=\"new_restaurant_container--btn\">\n    <button><p>+</p></button>\n  </div>\n</div>\n</selection>";
function showRestaurantForm() {
    return "<selection class=\"create_restaurant\">\n  <div class=\"create_restaurant-container\">\n    <div class=\"create_restaurant-container-headline\">\n      <h3>New Restaurant</h3>\n    </div>\n    <div class=\"create_restaurant-container-info\">\n      <form onsubmit=\"createRestaurant(event)\">\n        <div class=\"create_restaurant-container-info--details\">\n          <div class=\"create_restaurant-container-info--details-input\">\n            <label>Name</label>\n            <input type=\"text\" name=\"name\"  required/>\n            <label>Cover Image</label>\n            <input type=\"text\" name=\"image\"  required/>\n          </div>\n          <div class=\"create_restaurant-container-info--details-input\">\n            <label>Phone Number</label>\n            <input type=\"text\" name=\"phone\" required />\n            <label>BN Number</label>\n            <input type=\"text\" name=\"bn\"  required/>\n          </div>\n          <div class=\"create_restaurant-container-info--details-input\">\n            <label>City</label>\n            <select name=\"city\" class=\"address-container--form-select\">\n            " + citySelection + "\n            </select>\n            <label>Street</label>\n            <input type=\"street\" name=\"street\"  required/>\n          </div>\n        </div>\n        <div class=\"create_restaurant-container-info--details-note\">\n          <label for=\"\">notes</label>\n          <textarea name=\"notes\" required></textarea>\n          <div class=\"create_restaurant-container-info--details-time\">\n            <label>Min Time</label>\n            <input name=\"minTime\" type=\"number\"  required/>\n            <label>Max Time</label>\n            <input name=\"maxTime\" type=\"number\"  required/>\n          </div>\n        </div>\n        <div class=\"create_restaurant-container-btn\">\n          <button id=\"cancel\" onclick=\"closeModal()\">Cancel</button>\n          <button type=\"submit\" id=\"Next\">Next</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  </selection>";
}
var restaurantManageCard = "<selection class=\"restaurant_modal\">\n<div class=\"restaurant_modal_container\">\n  <div class=\"restaurant_modal_container-image\">\n    <img\n      src=\"https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg\"\n      alt=\"\"\n    />\n  </div>\n  <div class=\"restaurant_modal_container-content\">\n    <div class=\"restaurant_modal_container-content-res\">\n      <h3>Restaurant Name</h3>\n      <p>Phone: 03-63728773</p>\n      <p>City: Tel-Aviv</p>\n    </div>\n    <div class=\"restaurant_modal_container-content-delete\">\n      <img\n        src=\"../assets/images/f9c676dd662d9a7fbb11602b8837f7b7.png\"\n        alt=\"\"\n      />\n    </div>\n  </div>\n</div>\n</selection>";
var userAvatar = "\n<div  onclick=\"getCartItems()\" class=\"header_btn--cart\">\n<img\n  src=\"https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png\"\n  alt=\"\"\n/>\n<div class=\"header_btn--cart\">\n  <div class=\"header_btn--cart-count\">\n    <div class=\"header_btn--cart-count-initials\"></div>\n  </div>\n</div>\n</div>\n<section>\n<div class=\"avatar\">\n<a href=\"#\">\n  <div  onclick=\"openDropDown()\" class=\"dropbtn avatar__icon avatar__icon--big\">\n    <div class=\"avatar__initials\"></div>\n<div class=\"dropdown-content\">\n  <p onClick=\"logOut()\">Log Out</p>\n</div>\n</section>";
var createDishModal = " <selection class=\"create_dish\">\n<div class=\"create_dish_container\">\n  <div class=\"create_dish_container--cover\"></div>\n  <div class=\"create_dish_container--form\">\n    <form onsubmit=\"createDish(event)\">\n      <div class=\"create_dish_container--form-top\">\n        <label>Dish Name</label>\n        <input\n          class=\"create_dish_container--form-top-name\"\n          type=\"text\"\n          name=\"dishName\"\n        />\n        <label>Price</label>\n        <input\n          class=\"create_dish_container--form-top-price\"\n          type=\"number\"\n          name=\"price\"\n          maxlength=\"4\"\n        />\n      </div>\n      <label>Image</label>\n      <input onchange=\"imagePreview(this.value)\" type=\"text\" name=\"image\" />\n      <label>Notes</label>\n      <textarea type=\"text\" name=\"notes\"> </textarea>\n      <div class=\"create_dish_container--form-btn\">\n        <button onclick=\"closeModal()\" class=\"create_dish_container--form-btn--canel\">\n          Cancel\n        </button>\n        <button\n          class=\"create_dish_container--form-btn--create\"\n          type=\"submit\"\n        >\n          Create\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n</selection>";
var dishModal = "<selection class=\"dish\">\n<div class=\"dish_container\">\n  <div class=\"dish_container-cover\"></div>\n  <div class=\"dish_container-headline\">\n    <h3>dish</h3>\n    <h4>\u20AA54</h4>\n  </div>\n  <div class=\"dish_container-notes\">\n    <p>this is a text</p>\n  </div>\n  <div class=\"dish_container-addcart\">\n    <button>Add to Cart</button>\n  </div>\n</div>\n</selection>";
var cartModal = "<section class=\"cart\">\n<div class=\"cart-container\">\n<div onclick=\"closeModal()\" class=\"cart-container--exit\">\n<p class=\"cart-container--exit-right\"></p>\n<p class=\"cart-container--exit-left\"></p>\n</div>\n<h2>CART</h2>\n  <div class=\"cart-container--content\">\n\n  </div>\n  <div class=\"cart-container-total\">\n    <p>Total</p>\n    <p class=\"total\"></p>\n  </div>\n  <div class=\"cart-container-btn\">\n    <button onclick=\"onCheckOut()\">Pay</button>\n  </div>\n</div>\n</section>\n";
var paymentModal = " <div class=\"payCard\">\n<div class=\"payCard__x\">\n  <div onclick=\"closeModal()\" class=\"address-container--exit\">\n    <p class=\"address-container--exit-right\"></p>\n    <p class=\"address-container--exit-left\"></p>\n  </div>\n</div>\n<h1 class=\"payCard__title\">Payment</h1>\n<form class=\"payCard__payForm\" onsubmit=\"onPay()\">\n  <div class=\"payCard__payForm--cardNumber\">\n    <label for=\"cardNum\">Credit Card Number</label>\n    <input type=\"text\" id=\"cardNum\" class=\"maxWidth\" required />\n  </div>\n  <div class=\"payCard__payForm--oneLine\">\n    <div class=\"payCard__payForm--oneLine-expDate\">\n      <label for=\"expiredDate\">Expired Date</label>\n      <input type=\"text\" id=\"expiredDate\" class=\"minWidth\" required />\n    </div>\n    <div class=\"payCard__payForm--oneLine-securityCode\">\n      <label for=\"secCode\">Security Code</label>\n      <input type=\"text\" id=\"secCode\" class=\"minWidth\" required />\n    </div>\n  </div>\n  <div class=\"payCard__payForm--fullName\">\n    <label for=\"fullName\">Full Name</label>\n    <input type=\"text\" id=\"fullName\" class=\"maxWidth\" required />\n  </div>\n  <input type=\"submit\" value=\"Pay\" class=\"payCard__payForm--submit\" />\n</form>\n</div>";
var thanksModal = "<div class=\"thanks_container\">\n<div onclick=\"closeModal()\" class=\"thanks_container--exit\">\n  <p class=\"thanks_container--exit-right\"></p>\n  <p class=\"thanks_container--exit-left\"></p>\n</div>\n<div class=\"thanks_container_img\">\n  <img src=\"../../public/assets/images/DAI-logo.png\" alt=\"DAI Logo\" />\n</div>\n<div class=\"thanks_container_content\">\n  <h3>Thank you for signing up!</h3>\n  <p>to continue please Login...</p>\n</div>\n\n<div class=\"thanks_container_btn\">\n  <button>LOGIN</button>\n</div>\n</div>";
getCity();
var selectCity = document.querySelector(".header__selectCity");
var Search = document.querySelector(".header__searchContainer");
function getCityForSearch() {
    Search.style.display = "none";
    selectCity.style.display = "block";
    fetch("/api/get-city")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        renderCities(data.cityDB);
    });
}
//   let cityList = "";
function renderCities(cites) {
    console.log(cites);
    var cityHTML = cites
        .map(function (res) { return " <option value=\"" + res._id + "\">" + res.cityName + "</option>"; })
        .join("");
    console.log(cityHTML);
    selectCity.innerHTML = cityHTML;
}
var orderList = document.querySelector(".orders__bottomCard");
function openOrderList() {
    fetch("/api/get-order-lists")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        // orderList(data);
        console.log(data);
    });
}
