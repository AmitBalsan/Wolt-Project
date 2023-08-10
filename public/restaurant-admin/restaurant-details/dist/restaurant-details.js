var headerHtml = document.querySelector(".header-container");
var resHtml = document.querySelector(".restaurant-details");
var resID = "";
headerHtml.innerHTML;
if (loginUser) {
    var userN = loginUser.firstName.charAt(0);
    var userL = loginUser.lastName.charAt(0);
    var userName = "" + userN + userL;
    headerAvatar.innerHTML = userAvatar;
    var avatarName = document.querySelector(".avatar__initials");
    avatarName.innerHTML = userName;
}
function getRestaurantDetails() {
    fetch("/api/get-res", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ restaurantSelect: restaurantSelect })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        resID = data.resID;
        showRestaurant(data.resDetails, data.resID);
    })["catch"](function (error) {
        console.log(error);
    });
}
getRestaurantDetails();
function showRestaurant(data, resID) {
    resHtml.innerHTML = " <selection class=\"restaurant_details\">\n      <div class=\"restaurant_details_container\">\n        <div class=\"restaurant_details_container_back\">\n          <button onclick=\"goBack()\"><-- Back</button>\n        </div>\n        <div class=\"restaurant_details_container_cover\"></div>\n        <div class=\"restaurant_details_container_detail\">\n          <h3>" + data.name + "</h3>\n          <p>Phone: " + data.phone + "</p>\n          <p>City: " + data.street + "</p>\n        </div>\n        <div class=\"restaurant_details_container_dish\">\n          <selection class=\"new_restaurant\">\n            <div class=\"new_restaurant_container\">\n              <div class=\"new_restaurant_container--headline\">\n                <h2>Create a Dish</h2>\n              </div>\n              <div\n                onclick=\"createDishpopup('" + resID + "')\"\n                class=\"new_restaurant_container--btn\"\n              >\n                <button><p>+</p></button>\n              </div>\n            </div>\n          </selection>\n        </div>\n      </div>\n    </selection>";
    var image = document.querySelector(".restaurant_details_container_cover");
    image.style.backgroundImage = "url(" + data.image + ")";
}
function goBack() {
    window.location.replace("/restaurant-admin/restaurant.html");
}
function createDishpopup() {
    popup.innerHTML = createDishModal;
    popup.style.position = "fixed";
}
function closeModal() {
    popup.innerHTML = "";
    popup.style.position = "unset";
}
function createDish(event) {
    event.preventDefault();
    var dish = {
        name: event.target.elements.dishName.value,
        price: event.target.elements.price.value,
        image: event.target.elements.image.value,
        notes: event.target.elements.notes.value,
        resID: resID
    };
    fetch("/api/create-dish", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dish: dish })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        closeModal();
    });
}
function imagePreview(image) {
    var cover = document.querySelector(".create_dish_container--cover");
    console.log(image);
    cover.style.backgroundImage = "url(" + image + ")";
}
