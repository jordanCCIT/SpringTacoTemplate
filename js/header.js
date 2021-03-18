import { sampleTaco } from "./sampleTaco.js";
import { updatingTacoHtml } from "./updatingTacoHtml.js";

const createHeaderElement = function (tacoJson) {
  if (document.querySelector("header") !== null) {
    document.querySelector("header").remove();
  }

  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
          <h1 class="header-title">Taco Generator!</h1>
          <h3 class="header_taco-title">
           <span class="header_taco-element" id="header_title-base-layer"> ${tacoJson.base_layer.name} </span> with
           <span class="header_taco-element" id="header_title-mixin"> ${tacoJson.mixin.name} </span>, garnished with
           <span class="header_taco-element" id="header_title-condiment"> ${tacoJson.condiment.name} </span>, topped off with
           <span class="header_taco-element" id="header_title-seasoning"> ${tacoJson.seasoning.name}</span> and wrapped in delicious
           <span class="header_taco-element" id="header_title-shell"> ${tacoJson.shell.name}</span>
          </h3>
      <button class="button">Generate New Taco</button>`;

  const button = header.querySelector(".button");
  button.addEventListener("click", () => {
    fetch("http://taco-randomizer.herokuapp.com/random/")
      .then((response) => response.json())
      .then((tacoJson) => updatingTacoHtml(tacoJson));
  });
  return header;
};

export { createHeaderElement };
