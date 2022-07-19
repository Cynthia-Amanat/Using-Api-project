import fetchData from "../utilities/fetch.js";
import mealInstuctions from "./mealInstructions.js";
import {
  createElementById,
  createElementByClassName,
} from "../utilities/elementFactory.js";
async function topFiveRecipe() {
  const main = document.getElementById("main");
  const topFiveRecipeContainer = createElementById("div", "top-five");
  //   topFiveRecipeContainer.classList.add("hide");
  const title = createElementById("h1", "top-recipies-title");
  title.textContent = " Top Five Recipies ";
  main.appendChild(title);

  for (let i = 0; i < 5; i++) {
    let response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    // create elements
    const topFiveRecipeCard = createElementById("div", "recipie-card");
    topFiveRecipeCard.onclick = () => mealInstuctions(response.meals[0]);
    const topFiveRecipeImage = document.createElement("img");
    const topFiveRecipeTitle = document.createElement("h4");

    // Attributes text
    topFiveRecipeImage.src = response.meals[0].strMealThumb;
    topFiveRecipeTitle.textContent = response.meals[0].strMeal;

    // appendChild
    topFiveRecipeCard.appendChild(topFiveRecipeImage);
    topFiveRecipeCard.appendChild(topFiveRecipeTitle);
    topFiveRecipeContainer.appendChild(topFiveRecipeCard);
  }
  main.appendChild(topFiveRecipeContainer);
}

export default topFiveRecipe;
