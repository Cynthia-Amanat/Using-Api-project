import fetchData from "../utilities/fetch.js";
import createRecipieCard from "./createRecipieCard.js";

const displaySearchedRecipies = async (
  inputField,
  container,
  recipieContainer
) => {
  const searchDivision = document.getElementById("navbar-search");
  const searchField = document.getElementById("navbar-search-field");
  searchDivision.classList.remove("hide");

  if (inputField.value !== "") {
    const { meals } = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        inputField.value ? inputField.value : searchField.value
      }`
    );
    console.log(meals);
    // hide previous main Container
    container.classList.add("hide");
    recipieContainer.classList.add("scroll");
    if (meals) {
      createRecipieCard(meals);
    } else {
      recipieContainer.innerHTML = `<h4>" Sorry we didn't found any meal !"<h4>`;
    }
  }

  searchField.addEventListener("keyup", (e) => {
    setTimeout(() => {
      recipieContainer.innerHTML = "";
      inputField.value = "";
      displaySearchedRecipies(searchField.value, container, recipieContainer);
    });
  });
};

export default displaySearchedRecipies;
