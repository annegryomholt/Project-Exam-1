// JavaScript Document

const contactForm = document.getElementById("submitContact");
const firstName = document.getElementById("firstName");
const firstNameSuccess = document.getElementById("firstNameSuccess");
const firstNameError = document.getElementById("firstNameError");
const emailRegEx =  /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,6}$/;
const emailInput = document.getElementById("email");
const emailSuccess = document.getElementById("emailSuccess");
const emailError = document.getElementById("emailError");


function validateName(name) {
    var removeSpaces = name.trim();

    if (removeSpaces.length > 0) {
        return true;
    }
    return false;
}

// Email//
function validateEmail() {
    if(emailInput.value.match(emailRegEx)) {
        return true;
    }
    return false;
}
// Name //
function validateName(name) {
    var removeSpaces = name.trim();

    if (removeSpaces.length > 0) {
        return true;
    }
    return false;
}
// ButtonClick//
contactForm.addEventListener('click', function(event) { 
	
    event.preventDefault();
	
    var firstNameValue = firstName.value;
    var firstNameIsValid = validateName(firstNameValue);
    var emailValue = emailInput.value;
    var emailIsValid = validateEmail(emailValue.Value);
    
    if (firstNameIsValid) {
        firstNameError.style.display = "none";
		firstNameSuccess.style.display ="block";
    } else {
        firstNameError.style.display = "block";
    }
    if (emailIsValid) {
        emailError.style.display = "none";
		emailSuccess.style.display = "block";
    } else {
        emailError.style.display = "block";
    }
	
});