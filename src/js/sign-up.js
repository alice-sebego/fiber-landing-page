const $tooglePassword = document.querySelector("#togglePassword");
const $eye = document.querySelector("#togglePassword > i");
const $inputPassword = document.querySelector("#password");

$tooglePassword.addEventListener("click", () => {
    
    const type = $inputPassword.getAttribute("type") === "password" ? "text" : "password";
    $inputPassword.setAttribute("type", type);
    
    $tooglePassword.classList.toggle("warning");

});