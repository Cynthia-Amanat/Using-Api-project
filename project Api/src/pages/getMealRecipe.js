import fetchData from "../utilities/fetch.js";
import mealInstructions from "./mealInstructions.js";
async function getMealRecipe(e) {
  const recipesContainer = document.getElementById("recipie-Container");
  try {
    const response = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.dataset.mealid}`
    );
    mealInstructions(response.meals[0]);
  } catch (err) {
    recipesContainer.innerHTML = `<h4>${err}<h4>`;
  }
}

export default getMealRecipe;
