import createRecipeCard from "./createRecipeCard.js";
import fetchData from "../utilities/fetch.js";

const getMealAndCreateCard = async (value, recipesContainer) => {
  try {
    const response = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    if (response.meals) {
      createRecipeCard(response.meals);
    } else {
      recipesContainer.innerHTML = `<h4>" Sorry we didn't found any meal !"<h4>`;
    }
  } catch (err) {
    recipesContainer.innerHTML = `<h4>${err}<h4>`;
  }
};

export default getMealAndCreateCard;
