console.log("working");
let wrongPwdInstructor = false;
let password = document.querySelector("input[id=pwd]");
let button = document.querySelector("button");
let confirmPwd = document.querySelector("input[id=confirmpwd]");
let pwdInputs = document.querySelectorAll("input[required]");
let confirmPwdLabel = document.querySelector("label[for=confirmpwd]")
button.addEventListener("click",checkPwd);
function checkPwd(){
    if(password.value!=confirmPwd.value){
        confirmPwdLabel.classList.add("matchpwd");
        console.log(button);
        button.setAttribute("type","button");
    }
    else{
        confirmPwdLabel.classList.remove("matchpwd")
        button.setAttribute("type","submit");
    }
}
confirmPwd.addEventListener("keyup",checkPwd2)

function checkPwd2(){
    
        if(password.value == confirmPwd.value&& password.value!="") {
            confirmPwdLabel.classList.remove("matchpwd");
            console.log("van")
        }
        else{
            confirmPwdLabel.classList.add("matchpwd");
        }
        
     
}