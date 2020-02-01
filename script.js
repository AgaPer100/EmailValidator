const form = document.getElementById('form');
const email = document.getElementById('email');

function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (email.value === '') {
        showError(email);
    } else if (!isValidEmail(email.value)) {
        showError(email);
    } else {
        showSuccess(email);
    }
});