import displaySearchedRecipies from "./src/pages/displaySearchedRecipies.js";
import surpriseWithRecipe from "./src/pages/surpriseMeRecipe.js";
import topFiveRecipe from "./src/pages/topFiveRecipe.js";
import {
  createElementById,
  createElementByClassName,
} from "./src/utilities/elementFactory.js";
const main = () => {
  // Creating Elements

  const main = document.getElementById("main");
  const navBar = createElementById("nav", "nav-bar");
  const container = createElementById("div", "container");
  const surpriseRecipe = createElementById("a", "surprise-meal");
  const recipieContainer = document.getElementById("recipie-Container");
  const wrapperContainer = createElementById("div", "search-items");
  const form = createElementById("form");
  const inputField = createElementByClassName("input", "style-input");
  const searchButton = createElementByClassName("button", "style-button");

  // addting attributes and text to elements

  navBar.innerHTML = ` <div id ="bars-menu"><i class="fa fa-bars"></i></div>
  <h3>The Food corner</h3>
  <div id="navbar-search" class="hide"><input type="text" placeholder="search recipie...." id="navbar-search-field"/> </div>
  <div class = nav-icons>
  <i class="fa fa-instagram">
  </i><i class="fa fa-facebook">
  </i><i class="fa fa-twitter"></i></div>`;

  container.innerHTML = `<h1>Find a Recipe</h1>`;
  inputField.placeholder = "Search for recipe ....";
  inputField.type = "text";
  searchButton.innerHTML = `<i class="fa fa-search"></i>`;
  surpriseRecipe.innerHTML = ` SURPRISE RECIPIE  <i class="fa fa-chevron-circle-right"></i>`;

  // appending elements
  main.appendChild(navBar);
  main.appendChild(container);
  container.appendChild(wrapperContainer);
  container.appendChild(surpriseRecipe);
  form.appendChild(inputField);
  form.appendChild(searchButton);
  wrapperContainer.appendChild(form);

  topFiveRecipe();
  // Event Listeners
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputField.value !== "") {
      displaySearchedRecipies(inputField, container, recipieContainer);
    }
  });
  surpriseRecipe.addEventListener("click", () => surpriseWithRecipe());
};

window.addEventListener("load", main);
