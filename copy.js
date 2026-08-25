const copyBtn = document.getElementById("copyBtn");
const copyIcon = document.getElementById("copyIcon");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyBtn.innerText.trim()).then(() => {
    copyIcon.src = "/assets/check.svg";
    copyBtn.style.pointerEvents = "none";
    setTimeout(() => {
      copyIcon.src = "/assets/copy.svg";
      copyBtn.style.pointerEvents = "auto";
    }, 1000);
  });
});
