import { sampleTaco } from "./sampleTaco.js";
import { createHeaderElement } from "./header.js";

const updatingTacoHtml = function (tacoJson) {
  const container = document.querySelector(".container");

  const header = createHeaderElement(tacoJson);
  container.prepend(header);

  const tacoBaseLayerTitle = document.querySelector(".taco-base-layer_title");
  tacoBaseLayerTitle.innerText = tacoJson.base_layer.name;
  const tacoBaseLayerRecipe = document.querySelector(".taco-base-layer_recipe");
  tacoBaseLayerRecipe.innerText = tacoJson.base_layer.recipe;

  const tacoMixinTitle = document.querySelector(".taco-mixin_title");
  tacoMixinTitle.innerText = tacoJson.mixin.name;
  const tacoMixinRecipe = document.querySelector(".taco-mixin_recipe");
  tacoMixinRecipe.innerText = tacoJson.mixin.recipe;

  const tacoCondTitle = document.querySelector(".taco-condiment_title");
  tacoCondTitle.innerText = tacoJson.condiment.name;
  const tacoCondRecipe = document.querySelector(".taco-condiment_recipe");
  tacoCondRecipe.innerText = tacoJson.condiment.recipe;

  const tacoSeasoningTitle = document.querySelector(".taco-seasoning_title");
  tacoSeasoningTitle.innerText = tacoJson.seasoning.name;
  const tacoSeasoningRecipe = document.querySelector(".taco-seasoning_recipe");
  tacoSeasoningRecipe.innerText = tacoJson.seasoning.recipe;

  const tacoShellTitle = document.querySelector(".taco-shell_title");
  tacoShellTitle.innerText = tacoJson.shell.name;
  const tacoShellRecipe = document.querySelector(".taco-shell_recipe");
  tacoShellRecipe.innerText = tacoJson.shell.recipe;
};

fetch("http://taco-randomizer.herokuapp.com/random/")
  .then((response) => response.json())
  .then((tacoJson) => updatingTacoHtml(tacoJson)); 




