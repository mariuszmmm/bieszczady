let buttonElement = document.querySelector(".footer__button");
let bodyElement = document.querySelector(".body");
let buttonTextElement = document.querySelector(".js-buttonText");

buttonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body__customBackground");
    buttonTextElement.innerText = bodyElement.classList.contains("body__customBackground") ? "ciemne" : "jasne";
});
