const feedback = {
  start: {
    title: "Schlüssel-Schloss-Prinzip",
    text: "Enzyme wirken spezifisch: Ein Substrat muss mit seiner Bindungsstelle zum aktiven Zentrum passen.",
  },
  round: {
    title: "Substrat A passt",
    text: "Substrat A passt zur Bindungstasche des aktiven Zentrums. Es kann gebunden und umgesetzt werden.",
  },
  triangle: {
    title: "Substrat B passt nicht",
    text: "Substrat B hat eine andere räumliche Oberfläche. Es kann am aktiven Zentrum nicht stabil binden.",
  },
  square: {
    title: "Substrat C passt nicht",
    text: "Substrat C besitzt keine passende Bindungsstelle für dieses aktive Zentrum. Es wird deshalb nicht umgesetzt.",
  },
};

const lockCard = document.querySelector(".lock-card");
const feedbackBox = document.querySelector("#feedbackBox");

function setFeedback(choice) {
  const item = feedback[choice] || feedback.start;
  lockCard.dataset.choice = choice === "start" ? "" : choice;
  feedbackBox.querySelector("h3").textContent = item.title;
  feedbackBox.querySelector("p").textContent = item.text;
}

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => setFeedback(button.dataset.choice));
});

document.querySelectorAll(".lock-substrate").forEach((substrate) => {
  substrate.addEventListener("click", () => setFeedback(substrate.dataset.substrate));
  substrate.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFeedback(substrate.dataset.substrate);
    }
  });
});

document.querySelector("#lockResetBtn").addEventListener("click", () => {
  setFeedback("start");
});

setFeedback("start");
