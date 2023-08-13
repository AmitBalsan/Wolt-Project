function openDropDown() {
  document.querySelector(".dropdown-content")?.classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches(".dropbtn")) {
    document.querySelector(".dropdown-content")?.classList.remove("show");
  }
};
