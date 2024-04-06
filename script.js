const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");
const copyButton = document.querySelector(".copyButton");
const checkIcon = document.getElementById("checkIcon");

window.onload = setGradient;

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomRGB() {
  let rgbValues = [];
  for (let i = 0; i < 3; i++) {
    rgbValues.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + rgbValues[0] + "," + rgbValues[1] + "," + rgbValues[2] + ")";
}

function rgbToHex(rgb) {
  // Separa os valores de RGB
  const rgbValues = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  // Converte os valores para hexadecimal
  const hex = (x) => ("0" + parseInt(x).toString(16)).slice(-2);

  // Retorna a cor no formato hexadecimal
  return "#" + hex(rgbValues[1]) + hex(rgbValues[2]) + hex(rgbValues[3]);
}

function setRandomGradient() {
  // Gerar cores aleatórias
  const randomColor1 = randomRGB();
  const randomColor2 = randomRGB();

  // Converter valores de cor de RGB para hexadecimal
  const hexColor1 = rgbToHex(randomColor1);
  const hexColor2 = rgbToHex(randomColor2);

  // Atualizar valores dos inputs com as cores geradas aleatoriamente
  color1.value = hexColor1;
  color2.value = hexColor2;

  // Aplicar o gradiente com as novas cores
  body.style.background =
    "linear-gradient(to right, " + hexColor1 + ", " + hexColor2 + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);

copyButton.addEventListener("click", () => {
  const el = document.createElement("textarea");
  el.value = css.textContent;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  // Exibe o ícone de check por 2 segundos
  checkIcon.style.display = "inline";
  setTimeout(() => {
    checkIcon.style.display = "none";
  }, 2000);
});
