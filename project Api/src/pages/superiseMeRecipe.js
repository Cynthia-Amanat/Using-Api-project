import fetchData from "../utilities/fetch.js";
import mealInstructions from "./mealInstructions.js";

async function superiseWithRecipe() {
  try {
    const response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    mealInstructions(response.meals[0]);
  } catch (error) {
    console.log(error.message);
  }
}
export default superiseWithRecipe;
