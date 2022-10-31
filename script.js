const form = document.querySelector('#form')

const inputFirstName = document.querySelector('#inputFirstName');
const inputLastName = document.querySelector('#inputLastName');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');

var firstName = '';
var lastName = '';
var email = '';
var password = '';

inputFirstName.addEventListener('change', (e) => {
    firstName = e.target.value;
});
inputLastName.addEventListener('change', (e) => {
    lastName = e.target.value;
});
inputEmail.addEventListener('change', (e) => {
    email = e.target.value;
});
inputPassword.addEventListener('change', (e) => {
    password = e.target.value;
});

const iconFirstName = document.querySelector('#iconFirstName');
const iconLastName = document.querySelector('#iconLastName');
const iconEmail = document.querySelector('#iconEmail');
const iconPassword = document.querySelector('#iconPassword')

const msgFirstName = document.querySelector('#msgFirstName');
const msgLastName = document.querySelector('#msgLastName');
const msgEmail = document.querySelector('#msgEmail');
const msgPassword = document.querySelector('#msgPassword');

const submit = document.querySelector('#submit');

var validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function formReset() {
        inputFirstName.classList.remove('not-valid');
        iconFirstName.classList.add('hide');
        msgFirstName.classList.add('hide');
        inputLastName.classList.remove('not-valid');
        iconLastName.classList.add('hide');
        msgLastName.classList.add('hide');
        inputEmail.classList.remove('not-valid');
        iconEmail.classList.add('hide');
        msgEmail.classList.add('hide');
        inputPassword.classList.remove('not-valid');
        iconPassword.classList.add('hide');
        msgPassword.classList.add('hide');
        firstName = '';
        lastName = '';
        email = '';
        password = '';
        submit.blur();
        form.reset();
}

submit.addEventListener('click', () => {
    var tmp= 0;
    if (firstName == '') {
        inputFirstName.classList.add('not-valid');
        iconFirstName.classList.remove('hide');
        msgFirstName.classList.remove('hide');
        tmp = 1;
    }
    if (lastName == '') {
        inputLastName.classList.add('not-valid');
        iconLastName.classList.remove('hide');
        msgLastName.classList.remove('hide');
        tmp = 1;
    }
    if (!validRegex.test(email) || email == '') {
        inputEmail.classList.add('not-valid');
        iconEmail.classList.remove('hide');
        msgEmail.classList.remove('hide');
        tmp = 1;
    }
    if (password == '') {
        inputPassword.classList.add('not-valid');
        iconPassword.classList.remove('hide');
        msgPassword.classList.remove('hide');
        tmp = 1;
    }
    if (tmp == 1) {
        setTimeout(() => {formReset()}, 2000);
    } else if (tmp == 0) {
        alert("Form will reset after you click 'OK'.");
        setTimeout(() => {formReset()}, 500);
    }
});

