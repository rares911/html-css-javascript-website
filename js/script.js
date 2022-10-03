const form = document.getElementsByTagName('form')[0];

const name1 = document.getElementById('name');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const gender = document.getElementById('gender');
const country = document.getElementById('country');

const nameError = document.querySelector("#name + span.error");
const usernameError = document.querySelector("#username + span.error");
const passwordError = document.querySelector("#password + span.error");
const repasswordError = document.querySelector("#repassword + span.error");
const emailError = document.querySelector("#email + span.error");
const telephoneError = document.querySelector("#telephone + span.error");
const genderError = document.querySelector("#gender + span.error");
const countryError = document.querySelector("#country + span.error");


//name error
name1.addEventListener('input', function(event){
    if(name1.validity.valid){
        nameError.textContent = '';
        nameError.className = 'error';
    } else {
        showNameError();
    }
});

form.addEventListener('submit', function(event){
    if(!name1.validity.valid){
        showNameError();
        event.preventDefault();
    }
});

function showNameError() {
    if(name1.validity.valueMissing){
        nameError.textContent = 'This field cannot be empty!'
    }
}
//name error

//username error
username.addEventListener('input', function(event){
    if(username.validity.valid){
        usernameError.textContent = '';
        usernameError.className = 'error';
    } else {
        showUsernameError();
    }
});

form.addEventListener('submit', function(event){
    if(!username.validity.valid){
        showUsernameError();
        event.preventDefault();
    }
});

function showUsernameError() {
    if(username.validity.valueMissing){
        usernameError.textContent = 'This field cannot be empty!'
    }
}
//username error

//password error
password.addEventListener('input', function(event){
    if(password.validity.valid){
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }
});

form.addEventListener('submit', function(event){
    if(!password.validity.valid){
        showPasswordError();
        event.preventDefault();
    }
});

function showPasswordError() {
    if(password.validity.valueMissing){
        passwordError.textContent = 'This field cannot be empty!'
    }
}   
//password error

//repeat password
repassword.addEventListener('input', function(event){
    if(repassword.validity.valid){
        repasswordError.textContent = '';
        repasswordError.className = 'error';
    } else {
        showRepasswordError();
    }
});

form.addEventListener('submit', function(event){
    if(!repassword.validity.valid){
        showPasswordError();
        event.preventDefault();
    }
});

var checkPass = function showRepasswordError() {
    if (repassword.value !== password.value){
        repasswordError.textContent = 'Passwords do NOT match'
    }
}
//repeat password

//email error
email.addEventListener('input', function(event){
    if(email.validity.valid){
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
});

form.addEventListener('submit', function(event){
    if(!email.validity.valid){
        showEmailError();
        event.preventDefault();
    }
});

function showEmailError() {
    if(email.validity.valueMissing){
        emailError.textContent = 'This field cannot be empty!'
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Invalid format.'
    } else { 
        return;
    }
}
//email error

//telephone error
telephone.addEventListener('input', function(event) {
    if (telephone.validity.valid) {
        telephoneError.textContent = '';
        telephoneError.className = 'error';
    } else {
        showTelephoneError();
    }
});

form.addEventListener('submit', function(event) {
    if (!telephone.validity.valid) {
        showTelephoneError();
        event.preventDefault();
    }
});

function showTelephoneError() {
    if (telephone.validity.valueMissing) {
        telephoneError.textContent = 'This field cannot be empty!'
    } else {
        return;
    }
}
//telephone error

//country error
country.addEventListener('input', function(event) {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
});

form.addEventListener('submit', function(event) {
    if (!country.validity.valid) {
        showCountryError();
        event.preventDefault();
    }
});

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'Select a country!'
    } else {
        return;
    }
};

function myFunction() {
    while(name1.validity.valid && username.validity.valid && password.validity.valid && repassword.validity.valid && email.validity.valid)

         window.location.href="action.html";
  }