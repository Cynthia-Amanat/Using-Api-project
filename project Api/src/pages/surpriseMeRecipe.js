import fetchData from "../utilities/fetch.js";
import renderError from "../../renderError.js";
import mealInstructions from "./mealInstructions.js";

async function surpriseWithRecipe() {
  try {
    const response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    mealInstructions(response.meals[0]);
  } catch (error) {
    renderError(error.message);
  }
}
export default surpriseWithRecipe;
