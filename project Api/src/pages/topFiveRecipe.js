import fetchData from "../utilities/fetch.js";
import mealInstructions from "./mealInstructions.js";
import { createElementById } from "../utilities/elementFactory.js";
async function topFiveRecipe() {
  const main = document.getElementById("main");
  const topFiveRecipeContainer = createElementById("div", "top-five");
  const title = createElementById("h1", "top-recipes-title");
  title.textContent = " Top Five Recipes ";
  main.appendChild(title);
  let response;
  for (let i = 0; i < 5; i++) {
    response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    // create elements
    const topFiveRecipesCard = createElementById("div", "recipe-card");
    topFiveRecipesCard.onclick = () => mealInstructions(response.meals[0]);
    const topFiveRecipeImage = document.createElement("img");
    const topFiveRecipeTitle = document.createElement("h4");

    // Attributes text
    topFiveRecipeImage.src = response.meals[0].strMealThumb;
    topFiveRecipeTitle.textContent = response.meals[0].strMeal;

    // appendChild elements
    topFiveRecipesCard.appendChild(topFiveRecipeImage);
    topFiveRecipesCard.appendChild(topFiveRecipeTitle);
    topFiveRecipeContainer.appendChild(topFiveRecipesCard);
  }
  main.appendChild(topFiveRecipeContainer);
}

export default topFiveRecipe;
