import getMealRecipe from "./getMealRecipe.js";

const createRecipeCard = (meals) => {
  const recipesContainer = document.getElementById("recipie-Container");
  meals.forEach((meal) => {
    // Create Elements
    const recipieCardContainer = document.createElement("div");
    const recipieCard = document.createElement("div");
    recipesContainer.classList.remove("hide");

    recipieCard.classList.add("recipe-card");

    recipieCard.innerHTML = `<img class="card-img" src="${meal.strMealThumb}" />
    <h3 class="card-heading"> <span>Recipe</span><br>  ${meal.strMeal}</h3>
    <div class= "link"><button  id="get-recipie" class= "recipe-btn" data-mealId=${meal.idMeal}>Get Recipe</button><p> Cuisine ${meal.strArea} </p></div>`;

    // append elemet
    recipieCardContainer.appendChild(recipieCard);
    recipesContainer.appendChild(recipieCardContainer);
    recipieCard.addEventListener("click", (e) => getMealRecipe(e));
  });
};

export default createRecipeCard;