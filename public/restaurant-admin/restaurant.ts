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
  createAvatar();
  fetch("/api/get-restaurant")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      renderRestaurant(data);
    });
}

function createRestaurant(event) {
  event.preventDefault();
  console.log(event.target.elements.image.value === "");
  let image = "";
  if (event.target.elements.image.value === "") {
    image =
      "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png";
  } else {
    image = event.target.elements.image.value;
  }
  const res: Restaurant = {
    name: event.target.elements.name.value,
    image: image,
    phoneNumber: event.target.elements.phone.value,
    bmNumber: event.target.elements.bn.value,
    city: event.target.elements.city.value,
    street: event.target.elements.street.value,
    notes: event.target.elements.notes.value,
    minTime: event.target.elements.minTime.value,
    maxTime: event.target.elements.maxTime.value,
  };

  fetch("/api/create-restaurant", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ res }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      popup.innerHTML = "";
      popup.style.position = "unset";
      renderRestaurant(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderRestaurant(restaurant: []) {
  console.log(restaurant);

  const restaurantLists = restaurant.restaurantList
    .map(
      (res) =>
        `<selection class="restaurant_modal">
  <div  class="restaurant_modal_container">
    <div onclick="editRestaurant('${res._id}')" class="restaurant_modal_container-image">
      <img
        src=${res.image}
        alt=""
      />
    </div>
    <div class="restaurant_modal_container-content">
      <div class="restaurant_modal_container-content-res">
        <h3>${res.name}</h3>
        <p>Phone: ${res.phone}</p>
        <p>City: ${res.city}</p>
      </div>
      <div onclick="deleteRestaurant('${res._id}')" class="restaurant_modal_container-content-delete">
        <img src="../assets/images/f9c676dd662d9a7fbb11602b8837f7b7.png"
          alt=""
        />
      </div>
    </div>
  </div>
</selection>`
    )
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ restaurantID }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderRestaurant(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function editRestaurant(resID: string) {
  console.log("here");

  localStorage.setItem("restaurant", JSON.stringify({ resID: resID }));
  window.location.replace(
    "/restaurant-admin/restaurant-details/restaurant-details.html"
  );
}
