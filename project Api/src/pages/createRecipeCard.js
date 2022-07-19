import getMealRecipe from "./getMealRecipe.js";

const createRecipeCard = (meals) => {
  const recipesContainer = document.getElementById("recipie-Container");
  meals.forEach((meal) => {
    // Create Elements
    const recipieCard = document.createElement("div");
    recipesContainer.classList.remove("hide");

    recipieCard.classList.add("recipe-card");

    recipieCard.innerHTML = `<img class="card-img" src="${meal.strMealThumb}" data-mealId=${meal.idMeal} />
    <h3 class="card-heading" data-mealId=${meal.idMeal}> <span data-mealId=${meal.idMeal}>Recipe</span><br>  ${meal.strMeal}</h3>
    <div class= "link"><button  id="get-recipie" class= "recipe-btn" data-mealId=${meal.idMeal}>Get Recipe</button><p data-mealId=${meal.idMeal}> Cuisine ${meal.strArea} </p></div>`;

    // append element4
    recipesContainer.appendChild(recipieCard);
    recipieCard.addEventListener("click", (e) => getMealRecipe(e));
  });
};

export default createRecipeCard;
