let openCart = document.querySelector(".cart-button");
let container = document.querySelector(".container");
let closeCart = document.querySelector(".close-cart")
let burgerButton = document.querySelector(".burger-button")
let closeNav = document.querySelector(".close-nav")


openCart.addEventListener("click", () => {
    container.classList.add("active-cart");
})

closeCart.addEventListener("click", () => {
    container.classList.remove("active-cart")
})

burgerButton.addEventListener("click", () => {
    container.classList.add("active-nav")
})

closeNav.addEventListener("click", () => {
    container.classList.remove("active-nav")
})