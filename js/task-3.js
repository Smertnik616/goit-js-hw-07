const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener('input', () => {
    const  inputValue = input.value;
    const trimmedValue = inputValue.trim();

    if (trimmedValue !== '') {
    span.textContent = trimmedValue;
}   else {
    span.textContent = 'Anonymous';
}
});
