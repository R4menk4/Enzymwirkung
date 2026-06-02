const steps = [
  {
    title: "Schritt 1: Ausgangslage",
    text: "Enzym und Substrat liegen getrennt vor. Das aktive Zentrum ist noch frei.",
  },
  {
    title: "Schritt 2: Annäherung",
    text: "Das Substrat nähert sich dem aktiven Zentrum. Seine Form passt zum Bindungsbereich des Enzyms.",
  },
  {
    title: "Schritt 3: Enzym-Substrat-Komplex",
    text: "Das Substrat bindet am aktiven Zentrum. Für kurze Zeit entsteht der Enzym-Substrat-Komplex.",
  },
  {
    title: "Schritt 4: Produktbildung",
    text: "Das gebundene Substrat wird umgesetzt. Aus einem Substrat entstehen zwei Produkte.",
  },
  {
    title: "Schritt 5: Produktfreisetzung",
    text: "Die Produkte lösen sich vom Enzym und entfernen sich vom aktiven Zentrum.",
  },
  {
    title: "Schritt 6: Enzym bleibt erhalten",
    text: "Das Enzym liegt wieder unverändert vor. Es kann ein weiteres Substrat binden und erneut reagieren.",
  },
];

const infos = {
  enzyme: {
    title: "Enzym",
    text: "Ein Enzym ist ein Biokatalysator. Es beschleunigt eine Reaktion, ohne selbst verbraucht zu werden.",
  },
  substrate: {
    title: "Substrat",
    text: "Das Substrat ist der Stoff, der vom Enzym umgesetzt wird.",
  },
  "active-center": {
    title: "aktives Zentrum",
    text: "Das aktive Zentrum ist der Bereich des Enzyms, an den das Substrat bindet.",
  },
  complex: {
    title: "Enzym-Substrat-Komplex",
    text: "Der Enzym-Substrat-Komplex entsteht kurzzeitig, wenn das Substrat am Enzym gebunden ist.",
  },
  product: {
    title: "Produkt",
    text: "Produkte sind die Stoffe, die nach der Reaktion entstehen.",
  },
};

const scene = document.querySelector("#scene");
const stepBadge = document.querySelector("#stepBadge");
const currentStepTitle = document.querySelector("#currentStepTitle");
const stepText = document.querySelector("#stepText");
const tooltip = document.querySelector("#tooltip");
const tooltipTitle = document.querySelector("#tooltipTitle");
const tooltipText = document.querySelector("#tooltipText");

let currentStep = 0;
let timer = null;

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, steps.length - 1));
  const step = steps[currentStep];

  scene.dataset.step = String(currentStep);
  stepBadge.textContent = step.title;
  currentStepTitle.textContent = step.title;
  stepText.textContent = step.text;

  if (currentStep === steps.length - 1) {
    pauseAnimation();
  }
}

function nextStep() {
  setStep(currentStep + 1);
}

function previousStep() {
  setStep(currentStep - 1);
}

function startAnimation() {
  if (timer) return;
  if (currentStep === steps.length - 1) {
    setStep(0);
  }
  timer = window.setInterval(nextStep, 2300);
}

function pauseAnimation() {
  window.clearInterval(timer);
  timer = null;
}

function resetAnimation() {
  pauseAnimation();
  setStep(0);
  hideTooltip();
}

function showTooltip(infoKey) {
  const info = infos[infoKey];
  if (!info) return;

  tooltipTitle.textContent = info.title;
  tooltipText.textContent = info.text;
  tooltip.hidden = false;
}

function hideTooltip() {
  tooltip.hidden = true;
}

document.querySelector("#startBtn").addEventListener("click", startAnimation);
document.querySelector("#pauseBtn").addEventListener("click", pauseAnimation);
document.querySelector("#prevBtn").addEventListener("click", () => {
  pauseAnimation();
  previousStep();
});
document.querySelector("#nextBtn").addEventListener("click", () => {
  pauseAnimation();
  nextStep();
});
document.querySelector("#resetBtn").addEventListener("click", resetAnimation);

document.querySelectorAll(".info-target").forEach((element) => {
  element.addEventListener("click", () => {
    showTooltip(element.dataset.info);
  });
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showTooltip(element.dataset.info);
    }
  });
});

document.querySelector(".active-center").addEventListener("click", (event) => {
  event.stopPropagation();
  showTooltip("active-center");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideTooltip();
  }
});

setStep(0);
