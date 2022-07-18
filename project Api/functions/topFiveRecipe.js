import fetchData from "../utilities/fetch.js";
import mealInstuctions from "./mealInstructions.js";

async function topFiveRecipe() {
  const main = document.getElementById("main");
  const topFiveRecipeContainer = document.createElement("div");
  const title = document.createElement("h1");
  title.id = "top-recipies-title";
  title.textContent = " Top Five Recipies ";
  main.appendChild(title);
  topFiveRecipeContainer.id = "top-five";

  //   let fiveRecipes = [];
  for (let i = 0; i < 5; i++) {
    let response = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log(response);

    // create elements
    const topFiveRecipeCard = document.createElement("div");
    topFiveRecipeCard.onclick = () => mealInstuctions(response.meals[0]);
    const topFiveRecipeImage = document.createElement("img");
    const topFiveRecipeTitle = document.createElement("h4");

    // Attributes text
    topFiveRecipeCard.id = "recipie-card";
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
