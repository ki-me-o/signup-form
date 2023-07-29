const password_input = document.querySelector('input[name="password"]');
const verify_password_input = document.querySelector('input[name="confirm_password"]');
const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkPasswords(){    
    var password = password_input.value;
    var passwordVerify = verify_password_input.value;
    if(password !== passwordVerify) {
        verify_password_input.removeAttribute("class", "match");
        password_input.removeAttribute("class", "match");
        verify_password_input.setAttribute("class", "error");
        password_input.setAttribute("class", "error");


    } else {
        password_input.removeAttribute("class", "error");
        verify_password_input.removeAttribute("class", "error");
        password_input.setAttribute("class", "match");
        verify_password_input.setAttribute("class", "match");
    }
}

password_input.addEventListener("input", checkPasswords);
verify_password_input.addEventListener("input", checkPasswords);

// Verify email format
document.getElementById("user_email").addEventListener(
    "input",
    (e) => {
        if(e.target.value.match(email_pattern)!=null) {
            e.target.removeAttribute("class", "error");
            e.target.setAttribute("class", "success");
        } else {
            e.target.removeAttribute("class, success");
            e.target.setAttribute("class", "error");
        }
    },
    false
)

