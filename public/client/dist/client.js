createAvatar();
function getRestaurantList() {
    fetch("/api/get-restaurants")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderRestaurant(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function renderRestaurant(restaurants) {
    var renderHtml = restaurants
        .map(function (res) { return "<selection onselect=\"openModal('" + res._id + "')\" class=\"restaurant_card\">\n    <div class=\"restaurant_card_container\">\n      <div class=\"restaurant_card_container--img\">\n        <img src=\"" + res.image + "\" alt=\"\" />\n      </div>\n      <div class=\"restaurant_card_container--content\">\n        <div class=\"restaurant_card_container--content-description\">\n          <h3>" + res.name + "</h3>\n          <p>" + res.notes + "</p>\n        </div>\n        <div class=\"restaurant_card_container--content-time\">\n          <p>" + res.minTime + " - " + res.maxTime + "</p>\n          <p>min</p>\n        </div>\n      </div>\n    </div>\n    </selection>\n    "; })
        .join("");
    console.log(renderHtml);
    restaurantsList.innerHTML = renderHtml;
}
