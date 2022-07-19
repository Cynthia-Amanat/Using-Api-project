import fetchData from "../utilities/fetch.js";
import mealInstructions from "./mealInstructions.js";
// import renderError from "../utilities/renderError.js";

async function surpriseWithRecipe() {
  const response = await fetchData(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  mealInstructions(response.meals[0]);
}
export default surpriseWithRecipe;
