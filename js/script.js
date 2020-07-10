{
const onChangeButton = document.querySelector (".js-changeButton")
const page = document.querySelector(".page");

onChangeButton.addEventListener("click", () =>{ 
    page.classList.toggle("bodyLight")
})

}