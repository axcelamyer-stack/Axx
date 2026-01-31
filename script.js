const envelope = document.getElementById("envelope");
const message = document.getElementById("message");

envelope.addEventListener("click", () => {
    envelope.classList.add("hidden");
    message.classList.remove("hidden");
});
