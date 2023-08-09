function handleNewRestaurant(event) {
    event.preventDefault();
    var restuarant = {
        name: event.target.elements.name.value,
        image: event.target.elements.image.value,
        phoneNumber: event.target.elements.phone.value,
        bmNumber: event.target.elements.bmNumber.value,
        city: event.target.elements.city.value,
        street: event.target.elements.street.value
    };
}
