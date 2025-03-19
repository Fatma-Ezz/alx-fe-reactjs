import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header with Navigation */}
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
          <nav className="mt-2">
            <Link to="/" className="px-4 hover:underline">Home</Link>
            <Link to="/add-recipe" className="px-4 hover:underline">Add Recipe</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Recipe Sharing Platform. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
