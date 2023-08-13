function openDropDown() {
    var _a;
    (_a = document.querySelector(".dropdown-content")) === null || _a === void 0 ? void 0 : _a.classList.toggle("show");
}
window.onclick = function (event) {
    var _a;
    if (!event.target.matches(".dropbtn")) {
        (_a = document.querySelector(".dropdown-content")) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
    }
};
