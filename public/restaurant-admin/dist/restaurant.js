addRestaurant.innerHTML = newRestaurantBtn;
function handleCreate() {
    popup.innerHTML = newRestaurantForm;
    popup.style.position = "fixed";
}
function closeModal() {
    popup.innerHTML = "";
    popup.style.position = "unset";
}
function getRestaurant() {
    if (loginUser) {
        var userN = loginUser.firstName.charAt(0);
        var userL = loginUser.lastName.charAt(0);
        var userName = "" + userN + userL;
        headerAvatar.innerHTML = userAvatar;
        var avatarName = document.querySelector(".avatar__initials");
        avatarName.innerHTML = userName;
    }
    fetch("/api/get-restaurant")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderRestaurant(data);
    });
}
function createRestaurant(event) {
    event.preventDefault();
    console.log(event.target.elements.image.value === "");
    var image = "";
    if (event.target.elements.image.value === "") {
        image =
            "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png";
    }
    else {
        image = event.target.elements.image.value;
    }
    var res = {
        name: event.target.elements.name.value,
        image: image,
        phoneNumber: event.target.elements.phone.value,
        bmNumber: event.target.elements.bn.value,
        city: event.target.elements.city.value,
        street: event.target.elements.street.value
    };
    fetch("/api/create-restaurant", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ res: res })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        popup.innerHTML = "";
        popup.style.position = "unset";
        renderRestaurant(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function renderRestaurant(restaurant) {
    console.log(restaurant);
    var restaurantLists = restaurant.restaurantList
        .map(function (res) {
        return "<selection class=\"restaurant_modal\">\n  <div  class=\"restaurant_modal_container\">\n    <div onclick=\"editRestaurant('" + res._id + "')\" class=\"restaurant_modal_container-image\">\n      <img\n        src=" + res.image + "\n        alt=\"\"\n      />\n    </div>\n    <div class=\"restaurant_modal_container-content\">\n      <div class=\"restaurant_modal_container-content-res\">\n        <h3>" + res.name + "</h3>\n        <p>Phone: " + res.phone + "</p>\n        <p>City: " + res.city + "</p>\n      </div>\n      <div onclick=\"deleteRestaurant('" + res._id + "')\" class=\"restaurant_modal_container-content-delete\">\n        <img src=\"../assets/images/f9c676dd662d9a7fbb11602b8837f7b7.png\"\n          alt=\"\"\n        />\n      </div>\n    </div>\n  </div>\n</selection>";
    })
        .join("");
    restaurantList.innerHTML = restaurantLists;
}
function deleteRestaurant(restaurantID) {
    console.log("restaurantID");
    console.log(restaurantID);
    fetch("/api/delete-restaurant", {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ restaurantID: restaurantID })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderRestaurant(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function editRestaurant(resID) {
    console.log("here");
    localStorage.setItem("restaurant", JSON.stringify({ resID: resID }));
    window.location.replace("/restaurant-admin/restaurant-details/restaurant-details.html");
}
