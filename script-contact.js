// JavaScript Document
var result = document.querySelector('#result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkPhoneNUmber(this.phone.value);
  checkEmailAdress(this.email.value);
  checkFirstName(this.firstname.value);
  checkLastName(this.lastname.value);
});

function checkPhoneNUmber(phoneNo) {
  var phoneRE = /^\d\d\d\ \d\d \d\d\d$/;
  if (phoneNo.match(phoneRE)) {
    console.log('The phone number is valid!');
  } else {
    console.log('The phone number is  not valid!');
  }
}

function checkEmailAdress(emailNo){
var emailRE = /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,6}$/;
	if(emailNo.match(emailRE)){
		console.log("the email adress is valid!");
	}else {
		console.log("the email adress is not valid");
	}
}

function checkFirstName(firstNameNO){
var firstNameRE = /^[a-zA-Z ]+$/;
	if(firstNameNO.match(firstNameRE)){
		console.log("the first name is valid!");
	}else {
		console.log("the first name is not valid");
	}
}
function checkLastName(lastNameNo){
var lastNameRE = /^[a-zA-Z]+$/;
	if(lastNameNo.match(lastNameRE)){
		console.log("the last name is valid!");
	}else {
		console.log("the last name is not valid");
	}
}