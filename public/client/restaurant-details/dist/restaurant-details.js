var headerHtml = document.querySelector(".header-container");
var resHtml = document.querySelector(".restaurant-details");
var resID = "";
headerHtml.innerHTML;
createAvatar();
checkCart();
isClientLogin();
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
    resHtml.innerHTML = " <selection class=\"restaurant_details\">\n      <div class=\"restaurant_details_container\">\n        <div class=\"restaurant_details_container_back\">\n          <button onclick=\"goBack()\"><-- Back</button>\n        </div>\n        <div class=\"restaurant_details_container_cover\"></div>\n        <div class=\"restaurant_details_container_detail\">\n          <h3>" + data.name + "</h3>\n          <p>Phone: " + data.phone + "</p>\n          <p>City: " + data.street + "</p>\n        </div>\n        <div class=\"restaurant_details_container_dish\">\n        <div class=\"dish-list\"></div>\n        </div>\n      </div>\n    </selection>";
    var image = document.querySelector(".restaurant_details_container_cover");
    image.style.backgroundImage = "url(" + data.image + ")";
    getDish();
}
function goBack() {
    window.location.replace("/client/client.html");
}
function createDishpopup() {
    popup.innerHTML = createDishModal;
    popup.style.position = "fixed";
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
        renderDish(data.dishList);
        closeModal();
    });
}
function imagePreview(image) {
    var cover = document.querySelector(".create_dish_container--cover");
    console.log(image);
    cover.style.backgroundImage = "url(" + image + ")";
}
function getDish() {
    fetch("/api/get-dish", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ resID: resID })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderDish(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function renderDish(data) {
    var dishPlace = document.querySelector(".dish-list");
    console.log(data);
    var dishHtml = data
        .map(function (res) { return "<selection class=\"dish\">\n  <div class=\"dish_container\">\n    <div class=\"dish_container-cover\" style=\"background-image:url(" + res.image + ")\"></div>\n    <div class=\"dish_container-headline\">\n      <h3>" + res.name + "</h3>\n      <h4>\u20AA" + res.price + "</h4>\n    </div>\n    <div class=\"dish_container-notes\">\n      <p>" + res.notes + "</p>\n    </div>\n    <div class=\"dish_container-addcart\" style=\"display:flex\">\n      <button onclick=\"addCart('" + res._id + "')\">Add to Cart</button>\n    </div>\n\n  </div>\n  </selection>"; })
        .join("");
    dishPlace.innerHTML = dishHtml;
}
function handleDelete(id) {
    fetch("/api/delete-dish", {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id, resID: resID })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderDish(data.dishList);
    })["catch"](function (error) {
        console.log(error);
    });
}
function addCart(dishID) {
    console.log(dishID);
    fetch("/api/add-to-cart", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ dishID: dishID })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        checkCart();
    })["catch"](function (error) {
        console.log(error);
    });
}
