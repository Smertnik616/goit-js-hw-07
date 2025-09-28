
const form = document.querySelector(".login-form");

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value
    };


    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if ( emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    console.log(info);

    event.target.reset();

};