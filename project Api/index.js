window.addEventListener("load", async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "ced92006a3msh3b0aa4a9d2ea60cp183d25jsn0727294629bd",
  //       "X-RapidAPI-Host": "tastyworld.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     "https://tastyworld.p.rapidapi.com/v1/suggest_recipe?ingredients=eggs%2C%20bacon%2C%20black%20pepper&limit=3",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));

  //   const letter = prompt("enter the variable");

  //   const request = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`
  //   );

  const inputField = document.createElement("input");
  inputField.add.classlist = "style-input";
  inputField.type = "list";

  const button = document.createElement("button");
  button.innerText = "search";

  const main = document.getElementById("main");
  const recipie = document.getElementById("recipie");

  main.appendChild(inputField);
  main.appendChild(button);

  inputField.addEventListener("keyup", async (e) => {
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
    );
    const response = await request.json();
    console.log(response);
  });

  //   button.addEventListener("click", async () => {
  //     const request = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField.value}`
  //     );

  //     const response = await request.json();
  //     console.log(response);

  //     main.classList.add("hide");
  //     recipie.classList.remove("hide");

  //     response.meals.forEach((meal) => {
  //       const h3 = document.createElement("h3");
  //       h3.textContent = meal.strMeal;
  //       const img = document.createElement("img");
  //       img.src = meal.strMealThumb;
  //       recipie.appendChild(img);
  //       recipie.appendChild(h3);
  //     });
  //   });
});
