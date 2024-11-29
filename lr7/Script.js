document.getElementById("myForm").onsubmit = function() {
    var isValid = true;
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (name.value.length < 2) {
        name.classList.add("invalid");
        isValid = false;
    } else {
        name.classList.remove("invalid");
        name.classList.add("valid");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        email.classList.add("invalid");
        isValid = false;
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
    }

    if (password.value.length < 8 || !/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value)) {
        password.classList.add("invalid");
        isValid = false;
    } else {
        password.classList.remove("invalid");
        password.classList.add("valid");
    }

    return isValid;
};
