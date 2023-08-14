function createAvatar() {
    if (loginUser) {
        var userN = loginUser.firstName
            .charAt(0)
            .toUpperCase();
        var userL = loginUser.lastName
            .charAt(0)
            .toUpperCase();
        var userName = "" + userN + userL;
        headerAvatar.innerHTML = userAvatar;
        var avatarName = document.querySelector(".avatar__initials");
        if (loginUser.userType !== 1) {
            var cartUi = document.querySelector(".header_btn--cart");
            cartUi.style.display = "none";
        }
        avatarName.innerHTML = userName;
    }
}
function checkCart() {
    if (loginUser.userType !== 1) {
        var userCart = document.querySelector(".header_btn--cart");
        userCart.style.display = "none";
    }
    else {
        fetch("/api/get-user-cart")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data.itemInCart.length);
            var userCartCount = document.querySelector(".header_btn--cart-count-initials");
            userCartCount.innerText = data.itemInCart.length;
        })["catch"](function (error) {
            console.log(error);
        });
    }
}
function getCartItems() {
    fetch("/api/get-user-cart")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        renderCart(data.itemInCart);
    })["catch"](function (error) {
        console.log(error);
    });
}
function renderCart(data) {
    var total = 0;
    data.forEach(function (element) {
        total += element.price;
    });
    var itemsHTML = data
        .map(function (res) { return "\n      <div class=\"cart-container--content-items\">\n        <p class=\"cart-container--content-items-remove\" onclick=\"removeDish('" + res._id + "')\">X</p>\n        <p>" + res.dishName + "</p>\n        <p>\u20AA" + res.price + "</p>\n      </div>"; })
        .join("");
    popup.innerHTML = cartModal;
    var cartItems = document.querySelector(".cart-container--content");
    cartItems.innerHTML = itemsHTML;
    var totalHTML = document.querySelector(".total");
    totalHTML.innerText = "₪" + total.toString();
}
function removeDish(itemID) {
    fetch("/api/remove-item-cart", {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ itemID: itemID })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        getCartItems();
        checkCart();
    })["catch"](function (error) {
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
        .then(function (res) { return res.json; })
        .then(function (data) {
        console.log(data);
        getCartItems();
        checkCart();
    })["catch"](function (error) {
        console.log(error);
    });
}
function openDropDown() {
    var drop = document.querySelector(".dropdown-content");
    drop.style.display = "flex";
}
window.onclick = function (event) {
    console.log(event);
    if (!event.target.matches(".avatar__initials")) {
        var drop = document.querySelector(".dropdown-content");
        drop.style.display = "none";
    }
};
function logOut() {
    fetch("/api/logout")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        isClientLogin();
    });
}
function isClientLogin() {
    fetch("/api/login")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        if (data.login) {
            if (data.userType === 2) {
                window.location.replace("/restaurant-admin/restaurant.html");
            }
            else if (data.userType === 1) {
            }
        }
        else {
            window.location.replace("/");
            localStorage.removeItem("user");
        }
    });
}
function isLogin() {
    fetch("/api/login")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        if (data.login) {
            if (data.userType === 2) {
                window.location.replace("/restaurant-admin/restaurant.html");
            }
            else if (data.userType === 1) {
                window.location.replace("/client/client.html");
            }
        }
        else {
            window.location.replace("/");
            localStorage.removeItem("user");
        }
    });
}
function addUserAddress(event) {
    event.preventDefault();
    var userAddress = {
        cityID: event.target.elements.city.value,
        street: event.target.elements.street.value,
        home: event.target.elements.home.value,
        entrance: event.target.elements.entrance.value,
        userID: addressUser
    };
    console.log(userAddress);
    fetch("/api/add-address", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userAddress: userAddress })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    })["catch"](function (error) {
        console.log(error);
    });
}
function onCheckOut() {
    popup.innerHTML = paymentModal;
    popup.style.position = "fixed";
    popup.style.alignItems = "center";
}
