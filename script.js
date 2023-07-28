const password_input = document.querySelector('input[name="password"]');
const verify_password_input = document.querySelector('input[name="confirm_password"]');

function checkPasswords(e){    
    var password = password_input.value;
    var passwordVerify = e.target.value;
    if(password !== passwordVerify) {
        verify_password_input.setAttribute("class", "error");
    } else {
        verify_password_input.removeAttribute("class", "error");
    }
}

verify_password_input.addEventListener("input", checkPasswords);
