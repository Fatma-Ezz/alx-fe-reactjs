import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      alert("All fields are required.");
      return;
    }
    console.log({ title, ingredients, steps });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2 font-semibold">Recipe Title</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block mt-4 mb-2 font-semibold">Ingredients</label>
        <textarea
          className="w-full border p-2 rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label className="block mt-4 mb-2 font-semibold">Preparation Steps</label>
        <textarea
          className="w-full border p-2 rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
