import { getRandomColor } from "./utils";

export default function initApp() {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";
  document.body.append(button);
  button.addEventListener("click", changeBodyColorHandler);
}

function changeBodyColorHandler() {
  document.body.style.backgroundColor = getRandomColor();
}
