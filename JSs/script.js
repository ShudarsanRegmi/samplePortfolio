// Validating contact form
let form = document.forms[0];
let firstName = form.firstName;
let lastName = form.lastName;
let email = form.email;
let message = form.message;
let submitBtn = form.submit;

submitBtn.type = "button"; // changing the submitBtn to type button so that it do not submit form without validating
// Accessing all boxes to show validation errors
let errorBoxes = document.getElementsByClassName("error");
firstName.addEventListener("focusout", event => {
    firstNameValidate(firstName.value);
})
lastName.addEventListener("focusout", event => {
    lastNameValidate(lastName.value);
})
email.addEventListener("focusout", event => {
    emailValidate(email.value);
})
message.addEventListener("focusout", event => {
    messageValidate(message.value);
})
submitBtn.addEventListener("click", event => {
    if (totalValidation()) {
        submitBtn.type = "submit";
        console.log("your message was sent");
    }
})
submitBtn.addEventListener("keypress", event => {
    if (event.key == "Enter") {
        if (totalValidation()) {
            submitBtn.type = "submit";
            console.log("your message was sent");
        }
    }
})


function firstNameValidate(fname) {
    let fnameRegex = /^[a-zA-Z\-]+$/;

    if (fnameRegex.test(fname)) {
        errorBoxes[0].style.display = "none";
        errorBoxes[0].innerText = null;
        if (fname.length >= 3) {
            console.log("first name validated");
            return true;

        } else {
            errorBoxes[0].style.display = "block";
            errorBoxes[0].innerText = "First name should be at least 3 characters long";
            return false;
        }


    } else {
        console.log("invalid first name");
        errorBoxes[0].style.display = "block";
        errorBoxes[0].innerText = "Invalid first name";
        return false;
    }

}

function lastNameValidate(lname) {
    let lnameRegex = /^[a-zA-Z\-]+$/;
    if (lnameRegex.test(lname)) {
        errorBoxes[1].style.display = "none";
        errorBoxes[1].innerText = null;
        if (lname.length >= 3) {
            console.log("last name validated");
            return true;

        } else {
            errorBoxes[1].style.display = "block";
            errorBoxes[1].innerText = "Last name should be at least 3 characters long";
            return false;
        }


    } else {
        console.log("invalid last name");
        errorBoxes[1].style.display = "block";
        errorBoxes[1].innerText = "Invalid last name";
        return false;
    }

}

function emailValidate(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(email)) {
        console.log("email validated");
        errorBoxes[2].style.display = "none";
        errorBoxes[2].innerText = null;
        return true;
    } else {
        console.log("invalid email");
        errorBoxes[2].style.display = "block";
        errorBoxes[2].innerText = "Invalid email address";
        return false;
    }
}

function messageValidate(message) {
    if (message.length < 5) {
        console.log("message should be at least  characters long");
        errorBoxes[3].style.display = "block";
        errorBoxes[3].innerText = "Too short message..";
        return false;
    } else {
        errorBoxes[3].style.display = "none";
        errorBoxes[3].innerText = null;
        return true;
    }
}

function totalValidation() {
    return firstNameValidate(firstName.value) && lastNameValidate(lastName.value) && emailValidate(email.value) && messageValidate(message.value);
}