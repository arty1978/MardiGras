const form = document.querySelector('form')
const fullName = document.getElementById('fullName');
const textArea = document.querySelector('.formControl');
const email = document.getElementById('email');
const error = document.querySelector('.error');
const btn = document.querySelector('input[type=button]');
// Error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

// Prevent the submit
form.addEventListener('click', (event) => {
    event.preventDefault();
    if (fullName.value == '') {
        showError(fullName, 'Enter Full Name Please');
    }
    else {
        showSuccess(fullName);
        fullName.innerText = '';
    }
    if (email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        showError(email, 'Please Enter email or check Email format  ("@" or "." missing)');
    }
    else {
        showSuccess(email);
        email.innerHTML = '';
    }

});
