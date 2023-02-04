const mealname = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("random");
const meallist = document.getElementById("meallist");
const resultSearch = document.getElementById("result");
const mealDetails = document.getElementById('single-meal');

mealname.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchSearchResult();
  }
});

searchBtn.addEventListener("click", fetchSearchResult);
randomBtn.addEventListener('click', getRandomMeal);


function getRandomMeal() {

    // Clear meals and heading
    mealname.innerHTML = '';
  meallist.innerHTML= '';
  resultSearch.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}


function fetchSearchResult() {
  const meal = mealname.value.trim();
  if (meal.trim()) {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then((res) => res.json())
      .then((data) => {
        const mealsItems = data.meals;
        if (mealsItems.length > 0) {
          resultSearch.innerHTML = `<p>Search result for ${meal}</p>`;

          meallist.innerHTML = mealsItems
            .map((item) => {
              return `
                <div class="mealthumbnail">
                    <img class="meal-item" src="${item.strMealThumb}" alt="Image not found">
                    <span data-itemId="${item.idMeal}"  class="item-caption">${item.strMeal}</span>
                </div>
                `;
            })
            .join("");
        } else {
          resultSearch.innerHTML = `<p>No result for ${meal}</p>`;
        }
      });
  }
}

function getMealDetailByID(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });   
}

function addMealToDOM(meal) {
    
    const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  mealDetails.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;




}

meallist.addEventListener('click', (e)=> {
    const id =  e.target.getAttribute('data-itemid');
    getMealDetailByID(id);
});