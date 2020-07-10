{
const onChangeButton = document.querySelector (".js-changeButton")
const page = document.querySelector(".page");

onChangeButton.addEventListener("click", () =>{ 
    page.classList.toggle("bodyLight")
})

    const mailButton = document.querySelector (".js-mail")

    mailButton.addEventListener("click", () => {
        mailButton.innerText = "adrian.filinski1993@gmail.com" 

    })

}