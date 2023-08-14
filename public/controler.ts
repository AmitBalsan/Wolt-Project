function createAvatar() {
  if (loginUser) {
    const userN: string | undefined = loginUser.firstName
      .charAt(0)
      .toUpperCase();
    const userL: string | undefined = loginUser.lastName
      .charAt(0)
      .toUpperCase();
    const userName = `${userN}${userL}`;
    headerAvatar.innerHTML = userAvatar;
    const avatarName = document.querySelector(
      ".avatar__initials"
    ) as HTMLDivElement;

    if (loginUser.userType !== 1) {
      const cartUi = document.querySelector(
        ".header_btn--cart"
      ) as HTMLDivElement;
      cartUi.style.display = "none";
    }
    avatarName.innerHTML = userName;
  }
}

function checkCart() {
  if (loginUser.userType !== 1) {
    const userCart = document.querySelector(
      ".header_btn--cart"
    ) as HTMLDivElement;

    userCart.style.display = "none";
  } else {
    fetch("/api/get-user-cart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.itemInCart.length);
        const userCartCount = document.querySelector(
          ".header_btn--cart-count-initials"
        ) as HTMLDivElement;
        userCartCount.innerText = data.itemInCart.length;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function getCartItems() {
  fetch("/api/get-user-cart")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderCart(data.itemInCart);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderCart(data) {
  let total = 0;
  data.forEach((element) => {
    total += element.price;
  });
  const itemsHTML = data
    .map(
      (res) => `
      <div class="cart-container--content-items">
        <p class="cart-container--content-items-remove" onclick="removeDish('${res._id}')">X</p>
        <p>${res.dishName}</p>
        <p>₪${res.price}</p>
      </div>`
    )
    .join("");
  popup.innerHTML = cartModal;

  const cartItems = document.querySelector(
    ".cart-container--content"
  ) as HTMLDivElement;
  cartItems.innerHTML = itemsHTML;

  const totalHTML = document.querySelector(".total") as HTMLDivElement;
  totalHTML.innerText = "₪" + total.toString();
}

function removeDish(itemID) {
  fetch("/api/remove-item-cart", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemID }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getCartItems();
      checkCart();
    })
    .catch((error) => {
      console.log(error);
    });
}

function closeModal() {
  popup.innerHTML = "";
  popup.style.position = "unset";
  popup.style.alignItems = "unset";
}

function onPay() {
  fetch("/api/create-order")
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
      getCartItems();
      checkCart();
    })
    .catch((error) => {
      console.log(error);
    });
}

function openDropDown() {
  const drop = document.querySelector(".dropdown-content") as HTMLDivElement;
  drop.style.display = "flex";
}

window.onclick = (event) => {
  console.log(event);

  if (!event.target.matches(".avatar__initials")) {
    const drop = document.querySelector(".dropdown-content") as HTMLDivElement;
    drop.style.display = "none";
  }
};

function logOut() {
  fetch("/api/logout")
    .then((res) => res.json())
    .then((data) => {
      isClientLogin();
    });
}

function isClientLogin() {
  fetch("/api/login")
    .then((res) => res.json())
    .then((data) => {
      if (data.login) {
        if (data.userType === 2) {
          window.location.replace("/restaurant-admin/restaurant.html");
        } else if (data.userType === 1) {
        }
      } else {
        window.location.replace("/");
        localStorage.removeItem("user");
      }
    });
}

function isLogin() {
  fetch("/api/login")
    .then((res) => res.json())
    .then((data) => {
      if (data.login) {
        if (data.userType === 2) {
          window.location.replace("/restaurant-admin/restaurant.html");
        } else if (data.userType === 1) {
          window.location.replace("/client/client.html");
        }
      } else {
        window.location.replace("/");
        localStorage.removeItem("user");
      }
    });
}

function addUserAddress(event) {
  event.preventDefault();
  const userAddress = {
    cityID: event.target.elements.city.value,
    street: event.target.elements.street.value,
    home: event.target.elements.home.value,
    entrance: event.target.elements.entrance.value,
    userID: addressUser,
  };

  console.log(userAddress);

  fetch("/api/add-address", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userAddress }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function onCheckOut() {
  popup.innerHTML = paymentModal;
  popup.style.position = "fixed";
  popup.style.alignItems = "center";
}
