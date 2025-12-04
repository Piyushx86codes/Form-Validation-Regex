let formData = document.querySelector(".input");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfeildMessage = document.querySelectorAll(".empty-feild");
let firstName,lastName,email,password;
let feild;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let element of emptyfeildMessage){
    element.classList.add("d-none");
}

formData.addEventListener("keyup",(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    switch(feild){
        case "firstName":
        firstName = e.target.value;
        break
        case "lastName":
        lastName = e.target.value;
        break;
        case "email":
        email = e.target.value;
        break;
        case "password":
        password = e.target.value;
        break;
        default:
        firstName = lastName = email = password = "";
        break;
    }
});

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(firstName,lastName,email,password);
})