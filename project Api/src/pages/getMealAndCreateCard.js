import createRecipieCard from "./createRecipieCard.js";
import fetchData from "../utilities/fetch.js";
import renderError from "../../renderError.js";

const getMealAndCreateCard = async (value, recipieContainer) => {
  try {
    const response = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    if (response.meals) {
      createRecipieCard(response.meals);
    } else {
      recipieContainer.innerHTML = `<h4>" Sorry we didn't found any meal !"<h4>`;
    }
  } catch (error) {
    renderError(error.message);
  }
};

export default getMealAndCreateCard;
