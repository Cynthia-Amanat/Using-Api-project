import getMealAndCreateCard from "./getMealAndCreateCard.js";
const displaySearchedRecipies = async (
  inputField,
  container,
  recipieContainer
) => {
  const searchDivision = document.getElementById("navbar-search");
  const searchField = document.getElementById("navbar-search-field");
  searchDivision.classList.remove("hide");
  const topFiveRecipeTitle = document.getElementById("top-recipies-title");
  const topFiveRecipeContainer = document.getElementById("top-five");

  topFiveRecipeTitle.remove();
  topFiveRecipeContainer.remove();
  container.classList.add("hide");
  recipieContainer.classList.add("scroll");

  getMealAndCreateCard(inputField.value, recipieContainer);

  searchField.addEventListener("keydown", () => {
    recipieContainer.innerHTML = "";
    inputField.value = "";
    getMealAndCreateCard(searchField.value, recipieContainer);
  });
};

export default displaySearchedRecipies;
