function mealInstructions(meal) {
  const recipieContainer = document.getElementById("recipie-Container");
  const mealDetail = document.createElement("div");
  mealDetail.id = "meal-details";

  mealDetail.innerHTML = `
       <button type="button" class="btn-recipe-close" id="close-btn">
        <i class="fa fa-times"></i>
      </button>
      <div class="meal-details-content">
         <h2 class="recipe-title">${meal.strMeal}</h2>
         <div class="recipe-meal-img">
          <img
            src="${meal.strMealThumb}"
            alt="food"
          />
        </div>
        <p class="recipe-category">Category: ${meal.strCategory}</p>
        <div class="recipe-instruction">
          <h3>Instruction</h3>
          <p>${meal.strInstructions}</p>
        </div>
        
        <div class="recipe-Link">
          <a href="${meal.strYoutube}">Watch Video</a>
        </div>
      </div>
    `;

  recipieContainer.appendChild(mealDetail);
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", () => {
    mealDetail.classList.add("hide");
    mealDetail.remove();
  });
}

export default mealInstructions;
