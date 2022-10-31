import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");

const input = feedbackForm.querySelector("input");
const textarea = feedbackForm.querySelector("textarea");



feedbackForm.addEventListener("input", throttle(() => {

    const formState = {"email": feedbackForm.querySelector("input").value,
    "message": feedbackForm.querySelector("textarea").value};

    const formStateJsoned = JSON.stringify(formState);
localStorage.setItem("feedback-form-state", formStateJsoned)

}, 500))

const checkLocalStorage = () => {
    if (!localStorage.getItem("feedback-form-state")) {
        return
    }
    else {
        const downloadedAppState = JSON.parse(localStorage.getItem("feedback-form-state"));
        input.value = downloadedAppState.email;
        textarea.value = downloadedAppState.message;

}

}

checkLocalStorage();



feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const {
        elements: { email, message }
      } = event.currentTarget;
      if (email.value === "" || message.value === "") {
        return alert("Proszę wypełnić wszystkie pola!");
      }
      else {
        const results = { email: email.value, message: message.value };
        console.log(results);
        event.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
      }
})

