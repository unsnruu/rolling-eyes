const form = document.getElementsByTagName("form");
const inputs = document.querySelectorAll("input");
const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");
const labels = document.querySelectorAll(".form-control label");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    eyes.forEach((eye) => {
      eye.style.transform = "rotate(40deg)";
    });
    pupils.forEach((pupil) => {
      pupil.style.bottom = "0px";
    });
  });
  input.addEventListener("keydown", (e) => {
    let degree = 40 - e.target.value.length * 3;
    if (degree <= -40) degree = -40;
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${degree}deg)`;
    });
  });
  input.addEventListener("blur", () => {
    pupils.forEach((pupil) => {
      pupil.style.bottom = "7.5px";
    });
  });
});

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
