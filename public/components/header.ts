const selectCity = document.querySelector("#selectCity") as HTMLSelectElement;
interface City {
  _id: string;
  cityName: string;
  cityID: number;
}

function getCityForSearch() {
  fetch("/api/get-city")
    .then((res) => res.json())
    .then((data) => {
      renderCities(data.cityDB);
    });
}

//   let cityList = "";
function renderCities(cites: City[]) {
  console.log(cites);

  const cityHTML = cites
    .map((res) => ` <option value="${res._id}">${res.cityName}</option>`)
    .join("");
  selectCity.innerHTML = cityHTML;
}
