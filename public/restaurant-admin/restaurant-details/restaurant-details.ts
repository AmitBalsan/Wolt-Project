const headerHtml = document.querySelector(
  ".header-container"
) as HTMLDivElement;
const resHtml = document.querySelector(".restaurant-details") as HTMLDivElement;
let resID = "";
headerHtml.innerHTML;
if (loginUser) {
  const userN: string = loginUser.firstName.charAt(0);
  const userL: string = loginUser.lastName.charAt(0);
  const userName = `${userN}${userL}`;
  headerAvatar.innerHTML = userAvatar;
  const avatarName = document.querySelector(
    ".avatar__initials"
  ) as HTMLDivElement;

  avatarName.innerHTML = userName;
}

function getRestaurantDetails() {
  fetch("/api/get-res", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ restaurantSelect }),
  })
    .then((res) => res.json())
    .then((data) => {
      resID = data.resID;
      showRestaurant(data.resDetails, data.resID);
    })
    .catch((error) => {
      console.log(error);
    });
}

getRestaurantDetails();

function showRestaurant(data, resID) {
  resHtml.innerHTML = ` <selection class="restaurant_details">
      <div class="restaurant_details_container">
        <div class="restaurant_details_container_back">
          <button onclick="goBack()"><-- Back</button>
        </div>
        <div class="restaurant_details_container_cover"></div>
        <div class="restaurant_details_container_detail">
          <h3>${data.name}</h3>
          <p>Phone: ${data.phone}</p>
          <p>City: ${data.street}</p>
        </div>
        <div class="restaurant_details_container_dish">
          <selection class="new_restaurant">
            <div class="new_restaurant_container">
              <div class="new_restaurant_container--headline">
                <h2>Create a Dish</h2>
              </div>
              <div
                onclick="createDishpopup('${resID}')"
                class="new_restaurant_container--btn"
              >
                <button><p>+</p></button>
              </div>
            </div>
          </selection>
        </div>
      </div>
    </selection>`;

  const image = document.querySelector(
    ".restaurant_details_container_cover"
  ) as HTMLDivElement;
  image.style.backgroundImage = `url(${data.image})`;
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
  const dish: Dish = {
    name: event.target.elements.dishName.value,
    price: event.target.elements.price.value,
    image: event.target.elements.image.value,
    notes: event.target.elements.notes.value,
    resID: resID,
  };

  fetch("/api/create-dish", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dish }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      closeModal();
    });
}

function imagePreview(image) {
  const cover = document.querySelector(
    ".create_dish_container--cover"
  ) as HTMLDivElement;
  console.log(image);
  cover.style.backgroundImage = `url(${image})`;
}
