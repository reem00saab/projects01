// script.js
const pcViewButton = document.getElementById("pc-view");
const phoneViewButton = document.getElementById("phone-view");

pcViewButton.addEventListener("click", () => {
    document.body.classList.remove("phone-view");
    document.body.classList.add("pc-view");
});

phoneViewButton.addEventListener("click", () => {
    document.body.classList.remove("pc-view");
    document.body.classList.add("phone-view");
});
