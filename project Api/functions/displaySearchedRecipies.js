import fetchData from "../utilities/fetch.js";

const displaySearchedRecipies = async (
  inputField,
  container,
  recipieContainer
) => {
  const { meals } = await fetchData(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField}`
  );
  console.log(meals);
  // hide previous main Container
  container.classList.add("hide");
  recipieContainer.classList.add("scroll");
  if (meals) {
    meals.forEach((meal) => {
      // Create Elements
      const recipieCardContainer = document.createElement("div");
      const recipieCard = document.createElement("div");
      recipieContainer.classList.remove("hide");

      recipieCard.classList.add("recipie-card");

      recipieCard.innerHTML = `<img class="card-img" src="${meal.strMealThumb}" />
    <h3 class="card-heading"> <span>Recipe</span><br>  ${meal.strMeal}</h3>
    <div class= "link"><button  id="get-recipie"  class = "recipe-btn">Get Recipe</button><p> Cuisine ${meal.strArea} </p></div>`;

      // append elemet
      recipieCardContainer.appendChild(recipieCard);
      recipieContainer.appendChild(recipieCardContainer);
    });
  } else {
    recipieContainer.innerHTML = `<h4>" Sorry we didn't found any meal !"<h4>`;
  }
};

export default displaySearchedRecipies;
