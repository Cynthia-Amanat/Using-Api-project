import displaySearchedRecipies from "./functions/displaySearchedRecipies.js";
import mealInstructions from "./functions/mealInstructions.js";
import getMealRecipe from "./functions/getMealRecipe.js";
async function main() {
  // Creating Elements

  const main = document.getElementById("main");
  //   const getRecipeButton = document.getElementById("get-recipie"); creating problem
  //   console.log(getRecipeButton);
  const closeButtonRecipe = document.getElementById("close-btn");
  const navBar = document.createElement("nav");
  const container = document.createElement("div");
  const recipieContainer = document.getElementById("recipie");
  const wrapperContainer = document.createElement("div");
  const inputField = document.createElement("input");
  const searchButton = document.createElement("button");

  // addting attributes and text to elements
  navBar.id = "nav-bar";
  navBar.innerHTML = ` <div id ="bars-menu"><i class="fa fa-bars"></i></div>
  <h3 style="text-align:center; font-size:5rem">The Food corner</h3>
     <div class = nav-icons>
     <i class="fa fa-instagram">
     </i><i class="fa fa-facebook">
     </i><i class="fa fa-twitter"></i></div>`;
  container.id = "container";
  container.innerHTML = `<h1>Find a Recipe</h1>`;
  recipieContainer.id = "recipie-Container";
  inputField.classList.add("style-input");
  inputField.placeholder = "Search for recipe ....";
  inputField.type = "text";
  searchButton.classList.add("style-button");
  searchButton.innerHTML = `<i class="fa fa-search"></i>`;
  wrapperContainer.id = "search-items";

  // appending elements
  main.appendChild(navBar);
  main.appendChild(container);
  container.appendChild(wrapperContainer);
  wrapperContainer.appendChild(inputField);
  wrapperContainer.appendChild(searchButton);

  // Event Listeners
  searchButton.addEventListener("click", () => {
    if (inputField.value !== "") {
      displaySearchedRecipies(inputField.value, container, recipieContainer);
    }
  });
  getRecipeButton.addEventListener("click", getMealRecipe);
  closeButtonRecipe.addEventListener("click", () => {
    mealInstructions.parentElement.classList.remove("showRecipe");
  });
}

window.addEventListener("load", main);
