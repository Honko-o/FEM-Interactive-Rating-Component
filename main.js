let rateButtons = document.querySelectorAll("a[data-value]");
let rateSubmit = document.querySelector(".rating__state__submit");
let rateValue;

// Rate Value Buttons Event Handlers
rateButtons.forEach(el => {
    el.addEventListener("click", e => {
        rateButtons.forEach(el => el.id = "");
        e.target.id = "active";
        rateValue = +(e.target.getAttribute("data-value"));
    });
});

// Submit Button
rateSubmit.addEventListener("click", el => {
    let activeRate = document.getElementById("active");
    if (activeRate) {
        document.querySelector(".rating__state").classList.remove("visible");
        document.querySelector(".rating__state").classList.add("hidden");
        document.querySelector(".thank__you").classList.remove("hidden");
        document.querySelector(".thank__you").classList.add("visible");
        document.getElementById("rate-number").innerHTML = rateValue;
    }
})