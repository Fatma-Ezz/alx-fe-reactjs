import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl">
            <img src={recipe.image} alt={recipe.title} className="w-full rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p className="text-sm text-gray-600">{recipe.summary}</p>
            "Link", "react-router-dom", "to"
          </div>
        ))}
      </div>
    </div>
  );
};
grid-cols-1
export default HomePage;
