import displaySearchedRecipies from "./functions/displaySearchedRecipies.js";
import superiseWithRecipe from "./functions/superiseMeRecipe.js";
import topFiveRecipe from "./functions/topFiveRecipe.js";

async function main() {
  // Creating Elements

  const main = document.getElementById("main");
  const navBar = document.createElement("nav");
  const container = document.createElement("div");
  const superiseRecipe = document.createElement("a");
  const recipieContainer = document.getElementById("recipie-Container");
  const wrapperContainer = document.createElement("div");
  const form = document.createElement("form");
  const inputField = document.createElement("input");
  const searchButton = document.createElement("button");

  // addting attributes and text to elements
  navBar.id = "nav-bar";
  navBar.innerHTML = ` <div id ="bars-menu"><i class="fa fa-bars"></i></div>
  <h3 style="text-align:center; font-size:5rem">The Food corner</h3>
  <div id="navbar-search" class="hide"><input type="text" placeholder="search recipie...." id="navbar-search-field"/> </div>
     <div class = nav-icons>
     <i class="fa fa-instagram">
     </i><i class="fa fa-facebook">
     </i><i class="fa fa-twitter"></i></div>`;

  container.id = "container";
  container.innerHTML = `<h1>Find a Recipe</h1>`;
  inputField.classList.add("style-input");
  inputField.placeholder = "Search for recipe ....";
  inputField.type = "text";
  searchButton.classList.add("style-button");
  searchButton.innerHTML = `<i class="fa fa-search"></i>`;
  wrapperContainer.id = "search-items";
  superiseRecipe.innerHTML = `SUPERISE RECIPIE  <i class="fa fa-chevron-circle-right"></i>`;
  superiseRecipe.id = "superise-meal";

  // appending elements
  main.appendChild(navBar);
  main.appendChild(container);
  container.appendChild(wrapperContainer);
  container.appendChild(superiseRecipe);
  form.appendChild(inputField);
  form.appendChild(searchButton);
  wrapperContainer.append(form);

  // Event Listeners
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputField.value !== "") {
      displaySearchedRecipies(inputField, container, recipieContainer);
    }
  });
  superiseRecipe.addEventListener("click", () => superiseWithRecipe());
}

window.addEventListener("load", main);
window.addEventListener("load", topFiveRecipe);
