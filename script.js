var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
// var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var myForm = document.getElementById('my-form');
var myInput = document.getElementById('my-input');
var errorText = document.getElementById('error-text');
var isValid = false;

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

myInput.addEventListener("input", (e) => {
    if(validateEmail(myInput.value) === null) {
        setError('Email is not valid');
    } else {
        clearError();
    }
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(myInput.value.trim() === "") {
        setError('Email is required');
    } else if(isValid) {
        validate();
    }
});

// button1.addEventListener('click', validate);
button2.addEventListener('click', validate);

function validate() {
    card1.classList.toggle('display-none');
    card2.classList.toggle('display-none');
}

function setError(error) {
    errorText.textContent = error;
    errorText.style.display = 'block';
    myInput.classList.add('input-error');
    isValid = false;
}

function clearError() {
    errorText.style.display = 'none';
    myInput.classList.remove('input-error');
    isValid = true;
}







