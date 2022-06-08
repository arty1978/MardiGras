const form = document.querySelector('form')
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const error = document.querySelector('.error');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
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
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (userName.value == '') {
        showError(userName, 'Enter Full Name Please');
    }
    else {
        showSuccess(userName);
    }
    if (email.value == '' || email.value.indexOf('@') == -1) {
        showError(email, 'Sender`s Email Required!');
    }
    else {
        showSuccess(email);
    }
});





btn.addEventListener('submit', function () {
    if (fullName.value == '') {
        // alert('Please Enter Name');
        error.innerHTML = '* Please Enter Name';
        error.style.color = '$color-colorPlate-3';
        fullName.focus();
    } else {
        error1.innerHTML = '';
        fullName.innerText = '';
    }

    if (email.value == '' || email.value.indexof('@') === -1 || email.value.indexof('.') === -1) {
        // alert('Please Enter Email');
        error2.innerHTML = '* Please Enter email or check Email format ("@" or "." missing)';
        error2.style.color = '#F2B705';
        email.focus();
    } else {
        error2.innerHTML = '';
        email.innerHTML = '';
    }

});