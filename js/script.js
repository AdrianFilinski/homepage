let page = document.querySelector(".page");
let changeBackground = document.querySelector(".changeBackground");
let mail = document.querySelector(".mail");
let empty = document.querySelector(".empty");

mail.addEventListener("click", () => {
    empty.innerHTML= '<a href="mailto:bayern@gmail.com">bayern@gmail.com</a>';
})