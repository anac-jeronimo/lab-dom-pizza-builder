// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;

let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
  
// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPrice();
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if(state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(oneGreen => {
    if(state.greenPeppers) {
      oneGreen.style.visibility = "visible";
    } else {
      oneGreen.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if(state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white");
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white");
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">` 
  if(state.pepperoni) {    
    document.querySelector(".btn-pepperonni").classList.add("active");
  }else{
    document.querySelector(".btn-pepperonni").classList.remove("active");
    //state.pepperoni = false;
  }
  if(state.mushrooms) {    
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active"); 
    //state.mushrooms = false;
  }
  if(state.greenPeppers) {
    document.querySelector(".btn-green-pepper").classList.add("active"); 
  } else {
    document.querySelector(".btn-green-pepper").classList.remove("active");
    //state.greenPeppers = false; 
  }
  if(state.sauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
    //state.sauce = false;
  }
  if(state.crust) {
    document.querySelector(".btn-crust").classList.add("active"); 
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
    //state.crust = false;
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /**
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
   */
  let ingredientsList = [];
  let displayPrice = document.getElementById('price');
  //global basePrice;
  
    if(state.pepperoni)//!ingredientsList.includes(ingredients.pepperoni)
    {
      ingredientsList.push(ingredients.pepperoni);
    }
    if(state.mushrooms)//&& !ingredientsList.includes(ingredients.mushrooms)
    {
      ingredientsList.push(ingredients.mushrooms);
    }
    if(state.greenPeppers )//&& !ingredientsList.includes(ingredients.greenPeppers)
    {
      ingredientsList.push(ingredients.greenPeppers);
    }
    if(state.whiteSauce )//&& !ingredientsList.includes(ingredients.whiteSauce)
    {
      ingredientsList.push(ingredients.whiteSauce);
    }
    if(state.glutenFreeCrust )// && !ingredientsList.includes(ingredients.glutenFreeCrust)
    {
      ingredientsList.push(ingredients.glutenFreeCrust);
    }
    let totalPrice = 0;
    for(let i = 0; i < ingredientsList.length; i++) {
      totalPrice += ingredientsList[i].price;
    } 
  totalPrice += basePrice;
  displayPrice.innerHTML = totalPrice;
  
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})