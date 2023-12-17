import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
const btn = document.querySelector("button");

const initialMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));


if (initialMessage) {
    textarea.value = initialMessage.message.trim();
    input.value = initialMessage.email.trim();
    btn.disabled = !(input.value && textarea.value)
}

form.addEventListener("input", throttle(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: input.value, message: textarea.value }));
    btn.disabled = !(input.value && textarea.value);
    
},500))

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log({ email: input.value, message: textarea.value });
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    btn.disabled = true;
})













// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (input === "") {
//         alert("Write email");
    
// }
//     else if (textarea === "") {
//         alert("Write text");
//     }
//     localStorage.removeItem(STORAGE_KEY);
//     form.reset();
// })

// textarea.addEventListener("input", (event) => {
//     const message = event.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, message.trim());
// })

// input.addEventListener("input", (event) => {
//     const email = event.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, email.trim());
// })