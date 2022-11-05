{
    const clickChangeBackground = () => {
        const bodyElement = document.body;
        const buttonTextElement = document.querySelector(".js-buttonText");
        bodyElement.classList.toggle("body__customBackground");
        buttonTextElement.innerText = bodyElement.classList.contains("body__customBackground") ? "ciemne" : "jasne";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", clickChangeBackground);
    }
    init();
}