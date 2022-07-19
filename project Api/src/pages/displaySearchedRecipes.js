import getMealAndCreateCard from "./getMealAndCreateCard.js";
const displaySearchedRecipes = async (
  inputField,
  container,
  recipesContainer
) => {
  const searchDivision = document.getElementById("navbar-search");
  const searchField = document.getElementById("navbar-search-field");
  searchDivision.classList.remove("hide");
  const topFiveRecipeTitle = document.getElementById("top-recipes-title");
  const topFiveRecipeContainer = document.getElementById("top-five");

  topFiveRecipeTitle.remove();
  topFiveRecipeContainer.remove();
  container.classList.add("hide");
  recipesContainer.classList.add("scroll");

  getMealAndCreateCard(inputField.value, recipesContainer);

  searchField.addEventListener("keydown", () => {
    recipesContainer.innerHTML = "";
    inputField.value = "";
    getMealAndCreateCard(searchField.value, recipesContainer);
  });
};

export default displaySearchedRecipes;
