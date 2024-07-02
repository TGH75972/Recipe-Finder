document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
    displayRecipes(filteredRecipes);
});

document.getElementById('categoryFilter').addEventListener('change', () => {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredRecipes = selectedCategory === 'all' ? recipes : recipes.filter(recipe => recipe.category === selectedCategory);
    displayRecipes(filteredRecipes);
});

document.getElementById('emojiButton').addEventListener('click', () => {
    window.location.href = 'cookbook.html';
});

function addRecipeToCookbook(recipe) {
    let cookbook = JSON.parse(localStorage.getItem('cookbook')) || [];
    
    if (!cookbook.some(existingRecipe => existingRecipe.id === recipe.id)) {
        cookbook.push(recipe);
        localStorage.setItem('cookbook', JSON.stringify(cookbook));
    } else {
        alert('This recipe is already in the cookbook!');
    }
}

function displayRecipes(filteredRecipes) {
    const recipesSection = document.getElementById('recipes');
    const mainMessage = document.getElementById('mainMessage');
    recipesSection.innerHTML = '';

    if (filteredRecipes.length === 0) {
        mainMessage.textContent = 'No Recipes Found :(';
    } else {
        mainMessage.textContent = 'Find your favorite recipes easily.';
        filteredRecipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p class="ingredients">Ingredients: ${recipe.ingredients.join(', ')}</p>
                <div class="instructions-box">
                    <p class="instructions">${recipe.instructions}</p>
                </div>
                <button class="fryingPanButton">🍳</button>
            `;
            recipesSection.appendChild(recipeDiv);

            const fryingPanButton = recipeDiv.querySelector('.fryingPanButton');
            fryingPanButton.addEventListener('click', () => addRecipeToCookbook(recipe));
        });
    }
}
