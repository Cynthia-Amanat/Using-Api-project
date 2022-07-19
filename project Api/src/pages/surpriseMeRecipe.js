import fetchData from "./src/utilities/fetch.js";
import mealInstructions from "./src/pages/mealInstructions.js";

async function surpriseWithRecipe() {
  try {
    const response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    mealInstructions(response.meals[0]);
  } catch (error) {
    console.log(error.message);
  }
}
export default surpriseWithRecipe;
