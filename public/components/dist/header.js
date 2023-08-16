var selectCity = document.querySelector("#selectCity");
function getCityForSearch() {
    fetch("/api/get-city")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        renderCities(data.cityDB);
    });
}
//   let cityList = "";
function renderCities(cites) {
    console.log(cites);
    var cityHTML = cites
        .map(function (res) { return " <option value=\"" + res._id + "\">" + res.cityName + "</option>"; })
        .join("");
    selectCity.innerHTML = cityHTML;
}
