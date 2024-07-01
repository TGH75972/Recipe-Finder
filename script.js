document.addEventListener('DOMContentLoaded', () => {
    const recipesSection = document.getElementById('recipes');
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        recipesSection.appendChild(recipeDiv);
    });
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

function displayRecipes(filteredRecipes) {
    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';
    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        recipesSection.appendChild(recipeDiv);
    });
}
