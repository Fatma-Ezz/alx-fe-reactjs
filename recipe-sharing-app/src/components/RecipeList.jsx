addRecipe: (newRecipe) => set((state) => {
  const updatedRecipes = [...state.recipes, newRecipe];
  return {
    recipes: updatedRecipes,
    filteredRecipes: updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  };
}),

deleteRecipe: (recipeId) => set((state) => {
  const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
  return {
    recipes: updatedRecipes,
    filteredRecipes: updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  };
}),
