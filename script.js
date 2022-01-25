const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from inputs .trim() remove white space from values
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        //show error when empty ''
        //add error class
        setErrorFor(username, 'Name field cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }
    //adding same for surname
    if(surnameValue === '') {
        setErrorFor(surname, 'Surname field cannot be blank');
    } else {
        setSuccessFor(surname);
    }
    // adding same for email
    if(emailValue === '') {
        setErrorFor(email, 'Email field cannont be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    // adding same for password
    if(passwordValue === '') {
        setErrorFor(password, 'Password field cannont be blank');
    } else {
        setSuccessFor(password);
    }
} 

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message iside small tag
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control

    // add error class
    formControl.className = 'form-control success';

}

//test for valid email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}