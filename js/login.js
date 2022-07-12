function showPassword() {
    const btn = document.querySelector(".btn__pass");
    const input = document.querySelector(".input__wrapper");
    const formInput = document.querySelector(".form__input");

    btn.addEventListener("click", () => {
        formInput.classList.toggle("active");

        if (input.getAttribute("type") === "password") {
            input.setAttribute("type", "text");
        } else {
            input.setAttribute("type", "password");
        }
    })
}
showPassword( )