checkCart();
isClientLogin();
createAvatar();

function getRestaurantList() {
  fetch("/api/get-restaurants")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderRestaurant(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderRestaurant(restaurants) {
  const renderHtml = restaurants
    .map(
      (
        res
      ) => `<selection onclick="openModal('${res._id}')" class="restaurant_card">
    <div class="restaurant_card_container">
      <div class="restaurant_card_container--img">
        <img src="${res.image}" alt="" />
      </div>
      <div class="restaurant_card_container--content">
        <div class="restaurant_card_container--content-description">
          <h3>${res.name}</h3>
          <p>${res.notes}</p>
        </div>
        <div class="restaurant_card_container--content-time">
          <p>${res.minTime} - ${res.maxTime}</p>
          <p>min</p>
        </div>
      </div>
    </div>
    </selection>
    `
    )
    .join("");

  restaurantsList.innerHTML = renderHtml;
}

function openModal(resID) {
  localStorage.setItem("restaurant", JSON.stringify({ resID: resID }));
  window.location.replace("/client/restaurant-details/restaurant-details.html");
}
