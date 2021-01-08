const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(text.textContent);
})