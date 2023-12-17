
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");


const initialMessage = localStorage.getItem(STORAGE_KEY);


if (initialMessage) {
    textarea.value = initialMessage;
    input.value = initialMessage;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input === "") {
        alert("Write email");
    
}
    else if (textarea === "") {
        alert("Write text");
    }
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
})

textarea.addEventListener("input", (event) => {
    const message = event.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, message.trim());
})

input.addEventListener("input", (event) => {
    const email = event.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, email.trim());
})