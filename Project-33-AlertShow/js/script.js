const btn = document.querySelector(".my-btn");
const alertBox = document.querySelector(".alert-box");
const closeBtn = document.querySelector(".close-btn");
let timer;

btn.addEventListener("click", function () {
    showAlertBox();
});

closeBtn.addEventListener("click", function () {
    hideAlertBox();
    clearTimeout(timer);
});

const showAlertBox = () => {
    alertBox.classList.remove("hide");
    alertBox.classList.add("show");
    if (alertBox.classList.contains("hidden")) {
        alertBox.classList.remove("hidden");
    }
    timer = setTimeout(function () {
        hideAlertBox();
    }, 5000);
};

const hideAlertBox = () => {
    alertBox.classList.remove("show");
    alertBox.classList.add("hide");
};
